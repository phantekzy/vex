import { PricingTable } from "@clerk/nextjs"

/* Subscription section */
const Subscription = () => {
    return (
        <main className="py-12 px-4 max-w-5xl mx-auto">
            <PricingTable
                appearance={{
                    variables: {
                        colorPrimary: '#D62F2F',
                    },
                    elements: {
                        card: {
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                        }
                    }
                }}

            />
        </main>
    )
}
/* Export section */
export default Subscription
