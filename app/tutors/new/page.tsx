/* Import section */
import TutorForm from "@/components/TutorForm"
import { newTutorPermissions } from "@/lib/actions/tutor.actions"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
/* NewCompanion section */
const NewTutor = async () => {
    const { userId } = await auth()
    if (!userId) redirect('/sign-in')
    const canCreateTutor = await newTutorPermissions()
    return (
        <main className="lg:w-1/3 md:w-2/3 items-center justify-center ">
            {canCreateTutor
                ? (
                    <article className="w-full gap-4 flex flex-col">
                        <h1>Create your AI Tutor</h1>
                        {/* Tutor building form */}
                        <TutorForm />
                    </article>
                )
                :
                (
                    <article className="tutor-limit">
                        <Image
                            src="/images/limit.svg"
                            alt="Limit permision"
                            width={360}
                            height={230}
                        />
                        <div className="cta-badge">
                            To create more tutors please upgrade your Plan!
                        </div>
                        <h1>
                            You have reached your limit of creation tutors
                        </h1>
                        <p>
                            You have reached your tutor limit , upgrade to have the ability
                            to create more tutors and other features !
                        </p>
                        <Link
                            href="/subscription"
                            className="btn-primary w-full justify-center"
                        >
                            Upgrade plan
                        </Link>
                    </article>
                )
            }
        </main>
    )
}
/* Export section */
export default NewTutor
