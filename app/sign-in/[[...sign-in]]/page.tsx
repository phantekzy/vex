/* Import section */
import { SignIn } from "@clerk/nextjs";
/* Sign-in section */
export default function Page() {
    return (
        <main className="flex items-center justify-center min-h-[500px]">
            <SignIn />
        </main>
    )
}
