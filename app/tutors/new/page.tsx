/* Import section */
import TutorForm from "@/components/TutorForm"
/* NewCompanion section */
const NewTutor = () => {
    return (
        <main className="lg:w-1/3 md:w-2/3 items-center justify-center">
            <article className="w-full gap-4 flex flex-col">
                <h1>Create you AI Tutor</h1>
                {/* Tutor building form */}
                <TutorForm />
            </article>
        </main>
    )
}
/* Export section */
export default NewTutor
