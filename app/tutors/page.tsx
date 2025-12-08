/* Import section */
import TutorCard from "@/components/TutorCard"
import { getAllTutors } from "@/lib/actions/tutor.actions"
import { getSubjectColor } from "@/lib/utils"
/* Conpanion section */
const TutorsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams
    const subject = filters.subject ? filters.subject : ''
    const topic = filters.topic ? filters.topic : ''
    const tutors = await getAllTutors({ subject, topic })
    console.log(tutors)
    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Tutors Library</h1>
                <div className="flex gap-4">Filters</div>
            </section>
            <section className="tutors-grid">
                {tutors.map((tutor) => (
                    <TutorCard
                        key={tutor.id}
                        {...tutor}
                        color={getSubjectColor(tutor.subject)}
                    />
                ))}
            </section>
        </main>
    )
}
/* Export section */
export default TutorsLibrary
