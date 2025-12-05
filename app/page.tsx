/* Import section */
import CTA from "@/components/CTA"
import TutorCard from "@/components/TutorCard"
import TutorList from "@/components/TutorList"
import { recentSessions } from "@/constants"

/* Page section */
const Page = () => {
    return (
        <main>
            <h1 className="text-3xl font-bold mb-6">Popular Tutors</h1>

            <section className="home-section flex flex-wrap gap-6">
                <TutorCard
                    id="123"
                    name="Understanding Neural Networks"
                    topic="Introduction to deep learning models and how neurons simulate brain activity."
                    subject="AI"
                    duration={45}
                    color="#f3f3f3" // Light Gray
                />

                <TutorCard
                    id="094"
                    name="The Wonders of Photosynthesis"
                    topic="Exploring how plants convert sunlight into chemical energy."
                    subject="Science"
                    duration={65}
                    color="#f3f3f3" // Light Gray
                />

                <TutorCard
                    id="209"
                    name="The Solar System Explained"
                    topic="Study of planets, moons, and their interactions with the Sun."
                    subject="Astronomy"
                    duration={35}
                    color="#f3f3f3" // Light Gray

                />
            </section>

            <section className="home-section mt-12">
                <TutorList
                    title="Recently completed sessions"
                    tutors={recentSessions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

/* Export section */
export default Page

