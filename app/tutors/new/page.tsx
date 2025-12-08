/* Import section */
import TutorForm from "@/components/TutorForm"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
/* NewCompanion section */
const NewTutor = async () => {
    const { userId } = await auth()
    if (!userId) redirect('/sign-in')
    return (
        <main className="lg:w-1/3 md:w-2/3 items-center justify-center">
            <article className="w-full gap-4 flex flex-col">
                <h1>Create your AI Tutor</h1>
                {/* Tutor building form */}
                <TutorForm />
            </article>
        </main>
    )
}
/* Export section */
export default NewTutor
