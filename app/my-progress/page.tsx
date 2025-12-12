/* Import section */
import TutorList from "@/components/TutorList"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getUserSessions, getUserTutors } from "@/lib/actions/tutor.actions"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"
/* Profile section */
const Profile = async () => {
    const user = await currentUser()
    if (!user) redirect('/sign-in')
    const tutors = await getUserTutors(user.id)
    const sessionHistory = await getUserSessions(user.id)
    return (
        <main className="lg:w-3/4">
            <section className="flex justify-between gap-4 max-sm:flex-col items-center">
                <div className="flex gap-4 items-center">
                    <Image
                        src={user.imageUrl}
                        alt="user image"
                        width={110}
                        height={110}
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {user.emailAddresses[0].emailAddress}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit">
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/icons/check.svg"
                                alt="check image"
                                width={22}
                                height={22}
                            />
                            <p className="text-2xl font-bold">
                                {sessionHistory.length}
                            </p>
                        </div>
                        <div>
                            Completed lessons
                        </div>
                    </div>

                    <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit">
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/icons/cap.svg"
                                alt="cap image"
                                width={22}
                                height={22}
                            />
                            <p className="text-2xl font-bold">
                                {tutors.length}
                            </p>
                        </div>
                        <div>
                            Tutors created
                        </div>
                    </div>

                </div>
            </section>
            <Accordion
                type="multiple">
                <AccordionItem value="recent">
                    <AccordionTrigger className="text-2xl font-bold">
                        Recent Lessons
                    </AccordionTrigger>
                    <AccordionContent>
                        <TutorList
                            title="Recent lessons"
                            tutors={sessionHistory}
                        />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tutors">
                    <AccordionTrigger className="text-2xl font-bold">
                        My AI tutors {`${tutors.length}`}
                    </AccordionTrigger>
                    <AccordionContent>
                        <TutorList
                            title="My tutors"
                            tutors={tutors}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}
/* Export section */
export default Profile

