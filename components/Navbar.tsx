import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

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
                <p>Sign-in</p>
            </div>
        </nav>
    )
}
/* Export section */
export default Navbar
