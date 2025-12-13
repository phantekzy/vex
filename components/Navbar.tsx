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

            {/* Main Content Row: Logo, Desktop Links, Hamburger Button */}
            <div className="flex items-center justify-between w-full">

                {/* Logo Section (Always visible) */}
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

                {/* 1. Desktop Navigation (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    <NavItems isMobile={false} /> {/* Desktop styling */}
                    <SignedOut>
                        <SignInButton >
                            <button className="btn-signin">Sign in</button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>

                {/* 2. Hamburger Button (Hidden on desktop, Visible on mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {mobileMenuIsOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
                </button>
            </div>

            {/* 3. Mobile Menu Content (Conditionally rendered with GRID) */}
            {mobileMenuIsOpen && (
                <div
                    // Full width, absolute position below navbar, hidden on desktop
                    className="md:hidden w-full absolute left-0 top-[68px] 
                               bg-card/90 backdrop-blur-lg border-b border-border/50
                               animate-in slide-in-from-top duration-300 z-40"
                >
                    {/* GRID CONTAINER: Splits the whole mobile menu into 2 equal columns (col-2) */}
                    <div className="px-4 py-4 grid grid-cols-2 gap-4 items-start">

                        {/* LEFT COLUMN: Navigation Links (Vertically stacked) */}
                        <div className="flex flex-col space-y-2 py-2">
                            {/* NavItems is now passed the necessary props for mobile styling and closing */}
                            <NavItems isMobile={true} toggleMenu={toggleMenu} />
                        </div>

                        {/* RIGHT COLUMN: Auth Buttons and Description (Vertically stacked, Right-aligned, with Border) */}
                        <div className="flex flex-col space-y-4 items-end pl-4 border-l border-gray-600/50">

                            {/* Auth Components Container */}
                            <div className="flex flex-col space-y-2 items-end w-full">

                                {/* Sign In Button (Orange, Auto-Width) */}
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
                                    <div className="py-2 w-fit flex justify-end items-center">
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
