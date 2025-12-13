import Image from "next/image"
import Link from "next/link"

/* Call to action section */
const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">
                Start learning in the way that suits you best
            </div>
            <h2 className="text-3xl font-bold">
                Create and customize your learning tutor
            </h2>
            <p>
                Name your tutor, select the subject to study, customize its personality,
                and engage in learning through interactive voice conversations.
            </p>
            <Image
                src="/images/limit.svg"
                alt="cta"
                width={362}
                height={232}
            />
            <button className="btn-primary">
                <Image
                    src="/icons/plus.svg"
                    alt="button"
                    width={12}
                    height={12}
                />
                <Link
                    href="/tutors/new"
                >
                    <p>Build Your Tutor</p>
                </Link>
            </button>
        </section>
    )
}
/* Export section */
export default CTA
