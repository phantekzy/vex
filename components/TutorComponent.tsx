'use client'
/* Import section */
import { cn, configureAssistant, getSubjectColor } from "@/lib/utils"
import { vapi } from "@/lib/vapi.sdk"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import soundwaves from "@/constants/soundwaves.json"
/* Enum for CallStatus */
enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNTECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}
/* Tutor component */
// I removed the tutorId inchalah i dont forget it
const TutorComponent = ({ subject, topic, name, userName, userImage, style, voice }: TutorComponentProps) => {
    /* use state */
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [messages, setMessages] = useState<SavedMessage[]>([])
    /* Lottie ref */
    const lottieRef = useRef<LottieRefCurrentProps>(null)
    useEffect(() => {
        if (lottieRef) {
            if (isSpeaking) {
                lottieRef.current?.play()
            } else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])
    /* use effect */
    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE)
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED)
        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = {
                    role: message.role,
                    content: message.transcript,
                }
                setMessages((prev) => [newMessage, ...prev])
            }
        }
        const onSpeechStart = () => setIsSpeaking(true)
        const onSpeechEnd = () => setIsSpeaking(false)
        const onError = (error: Error) => console.log('Error', error)
        /* vapi events */
        vapi.on('call-start', onCallStart)
        vapi.on('call-end', onCallEnd)
        vapi.on('message', onMessage)
        vapi.on('error', onError)
        vapi.on('speech-start', onSpeechStart)
        vapi.on('speech-end', onSpeechEnd)
        return () => {
            vapi.off('call-start', onCallStart)
            vapi.off('call-end', onCallEnd)
            vapi.off('message', onMessage)
            vapi.off('error', onError)
            vapi.off('speech-start', onSpeechStart)
            vapi.off('speech-end', onSpeechEnd)
        }
    })
    /* Microphone toggle */
    const toggleMic = () => {
        const isMuted = vapi.isMuted()
        vapi.setMuted(!isMuted)
        /* for UI */
        setIsMuted(!isMuted)
    }
    /* Call tutor handler */
    const handleCall = async () => {
        setCallStatus(CallStatus.CONNTECTING)

        const assistantOverrides = {
            variableValues: {
                subject,
                topic,
                style,
            },
            clientMessages: ['transcript'],
            serverMessages: [],
        }
        // @ts-expect-error Vapi types are incorrect, this is valid at runtime
        vapi.start(configureAssistant(voice, style), assistantOverrides)
    }
    /* Disconnect call handler */
    const handelDisconnect = () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }

    /* Return section */
    return (
        <section className="flex flex-col h-[70vh]">
            {/* Voice call section */}
            <section className="flex gap-8 max-sm:flex-col">
                <div className="tutor-section">
                    <div className="tutor-avatar"
                        style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                        <div className={cn(
                            'absolute transition-opacity duration-1000',
                            callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE
                                ? 'opacity-100'
                                : 'opacity-0',
                            callStatus === CallStatus.CONNTECTING
                            && 'opacity-100 animate-pulse'
                        )}>
                            <Image
                                src={`/icons/${subject}.svg`}
                                alt={subject}
                                width={150}
                                height={150}
                                className="max-sm:w-fit"
                            />
                        </div>

                        <div
                            className={cn(
                                'absolute transition-opacity duration-1000',
                                callStatus === CallStatus.ACTIVE
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            )}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={soundwaves}
                                autoplay={false}
                                className="tutor-lottie"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-2xl">{name}</p>
                </div>

                <div className="user-section">
                    <div className="user-avatar">
                        <Image
                            src={userImage}
                            alt={userName}
                            width={130}
                            height={130}
                            className="rounded-lg"
                        />
                        <p className="font-bold text-2xl">
                            {userName}
                        </p>
                    </div>
                    <button className="btn-mic"
                        onClick={toggleMic}
                    >
                        <Image
                            src={
                                isMuted
                                    ? '/icons/mic-off.svg'
                                    : '/icons/mic-on.svg'
                            }
                            alt="microphone"
                            width={36}
                            height={36}
                        />
                        <p className="max-sm:hidden">
                            {isMuted
                                ? 'Turn on Microphone'
                                : 'Turn off Microphone'
                            }
                        </p>
                    </button>
                    <button className={cn(
                        'rounded-lg py-2 cursor-pointer transition-colors w-full text-white',
                        callStatus === CallStatus.ACTIVE
                            ? 'bg-black'
                            : 'bg-primary',
                        callStatus === CallStatus.CONNTECTING
                        && 'animate-pulse'
                    )}
                        onClick={
                            callStatus === CallStatus.ACTIVE
                                ? handelDisconnect
                                : handleCall
                        }
                    >
                        {callStatus === CallStatus.ACTIVE
                            ? "End the lesson"
                            : callStatus === CallStatus.CONNTECTING
                                ? "Connecting"
                                : 'Start Lesson'
                        }

                    </button>
                </div>
            </section>

            {/* Transcript section */}
            <section className="transcript">
                <div className="transcript-message no-scrollbar">
                    {messages.map((message) => {
                        if (message.role === 'assistant') {
                            return (
                                <p
                                    key={message.content}
                                    className="max-sm:text-sm"
                                >
                                    {name
                                        .split(' ')[0]
                                        .replace(/[.,]/g, ' ')
                                    } : {message.content}
                                </p>
                            )
                        } else {
                            return <p
                                key={message.content}
                                className="text-primary max-sm:text-sm"
                            >
                                {userName} : {message.content}
                            </p>
                        }
                    })}
                </div>
                <div className="transcript-fade" />
            </section>
        </section>
    )
}
/* Export section */
export default TutorComponent


