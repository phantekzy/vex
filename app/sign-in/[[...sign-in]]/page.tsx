/* Import section */
import { SignIn } from "@clerk/nextjs";
/* Sign-in section */
export default function Page() {
    return (
        <main className="flex items-center justify-center min-h-[500px]">
            <SignIn
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
