import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

/* Navigation bar component */
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={25}
                        height={25}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <SignInButton >
                        <button className="btn-signin">
                            Sign in
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}
/* Export section */
export default Navbar
