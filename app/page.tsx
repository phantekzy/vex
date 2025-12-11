/* Import section */
import CTA from "@/components/CTA"
import TutorCard from "@/components/TutorCard"
import TutorList from "@/components/TutorList"
import { recentSessions } from "@/constants"
import { getAllTutors, getRecentSessions } from "@/lib/actions/tutor.actions"

/* Page section */
const Page = async () => {
    const tutors = await getAllTutors({ limit: 3 })
    const recentSessionsTutors = await getRecentSessions()
    return (
        <main>
            <h1 className="text-3xl font-bold mb-6">Popular Tutors</h1>

            <section className="home-section flex flex-wrap gap-6">
                {tutors.map((tutor) => (
                    <TutorCard
                        key={tutor.id}
                        {...tutor}
                        color="#f3f3f3" // Light Gray
                    />
                ))}
            </section>

            <section className="home-section mt-12 mb-10">
                <TutorList
                    title="Recently completed sessions"
                    tutors={recentSessionsTutors}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

/* Export section */
export default Page

