/* Import section */
import TutorComponent from "@/components/TutorComponent"
import { getTutor } from "@/lib/actions/tutor.actions"
import { getSubjectColor } from "@/lib/utils"
import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"
/* Interface section */
interface TutorSessionPageProps {
    params: Promise<{ id: string }>
}
/* Session section */
const TutorSession = async ({ params }: TutorSessionPageProps) => {
    const { id } = await params
    const tutor = await getTutor(id)
    const user = await currentUser()
    if (!user) redirect('/sign-in')
    if (!tutor) redirect('/tutors')
    return (
        <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">

                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: getSubjectColor(tutor.subject) }}>
                        <Image
                            src={`/icons/${tutor.subject}.svg`}
                            alt="subject icon"
                            width={35}
                            height={35}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <p className="font-bold text-2xl">
                                {tutor.name}
                            </p>
                            <div className="subject-badge max-sm:hidden">
                                {tutor.subject}
                            </div>
                        </div>
                        <p className="text-lg">
                            {tutor.topic}
                        </p>
                    </div>
                </div>
                <div className=" items-start text-2xl max-md:hidden">
                    {tutor.duration} minutes
                </div>
            </article>
            <TutorComponent
                {...tutor}
                tutorId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    )
}
/* Export section */
export default TutorSession
