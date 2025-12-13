'use client'
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useState } from "react"
import { Menu, X } from "lucide-react"

/* Navigation bar component */
const Navbar = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const toggleMenu = () => setMobileMenuIsOpen((prev) => !prev);

    return (
        <nav className="navbar">
            <div className="flex items-center justify-between w-full">
                <Link href="/" onClick={() => setMobileMenuIsOpen(false)}>
                    <div className="flex items-center cursor-pointer">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={25}
                            height={25}
                        />
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <NavItems isMobile={false} />
                    <SignedOut>
                        <SignInButton >
                            <button className="btn-signin">Sign in</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {mobileMenuIsOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
                </button>
            </div>

            {/*Mobile Menu Content*/}
            {mobileMenuIsOpen && (
                <div
                    className="md:hidden w-full absolute left-0 top-[68px] 
                               bg-card/90 backdrop-blur-lg border-b border-border/50
                               animate-in slide-in-from-top duration-300 z-40"
                >
                    {/* GRID CONTAINER */}
                    <div className="px-4 py-4 grid grid-cols-2 gap-4 items-start">

                        {/* LEFT COLUMN: Navigation Links  */}
                        <div className="flex flex-col space-y-2 py-2">
                            <NavItems isMobile={true} toggleMenu={toggleMenu} />
                        </div>

                        {/* RIGHT COLUMN: Sign in*/}
                        <div className="flex flex-col space-y-4 items-end pl-4 border-l border-gray-600/50">
                            {/* Sign in Container */}
                            <div className="flex flex-col space-y-2 items-end w-full">
                                {/* Sign In Button*/}
                                <SignedOut>
                                    <SignInButton >
                                        <button
                                            onClick={toggleMenu}
                                            className="text-center py-2 px-4 rounded transition 
                                                       bg-orange-500 text-white hover:bg-orange-600 font-semibold"
                                        >
                                            Sign in
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                {/* User Button */}
                                <SignedIn>
                                    <div className="py-2  w-fit flex justify-end items-center">
                                        <p className="px-4 pt-2">Your Profile</p>
                                        <UserButton afterSignOutUrl="/" />
                                    </div>
                                </SignedIn>
                            </div>
                            {/* Description Box */}
                            <div className="text-right text-xs text-gray-400 max-w-xs">
                                <p>
                                    Sign in to access your personalized tutoring dashboard, view your progress, and manage your billing plan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
/* Export section */
export default Navbar
