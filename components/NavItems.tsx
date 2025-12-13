'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

/* --- 1. DEFINE PROPS INTERFACE --- */
interface NavItemsProps {
    // isMobile is a boolean, optional with a default value of false
    isMobile?: boolean;
    // toggleMenu is a function that takes no arguments and returns nothing (void)
    toggleMenu?: () => void;
}

/* Navigation items */
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tutors', href: '/tutors' },
    { label: 'Progress', 'href': '/my-progress' },
    { label: 'Vex', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

/* Navigation bar items section */
// 2. APPLY THE INTERFACE TO THE COMPONENT
const NavItems = ({ isMobile = false, toggleMenu }: NavItemsProps) => {
    const pathname = usePathname()

    // Container style: Vertical stack for mobile, Horizontal row for desktop
    const containerClasses = isMobile
        ? "space-y-2" // Mobile: Vertical stacking, minimal class to fit the grid
        : "flex items-center gap-4";

    // Base styles for links
    const linkBaseClasses = "transition hover:text-primary/80";

    // Mobile-specific link styles: Minimal padding, ensures block element for stacking
    const mobileLinkClasses = "text-left py-1 px-2 rounded-md hover:bg-gray-700 block text-sm";

    return (
        <nav className={containerClasses}>
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        linkBaseClasses,
                        // Active link color
                        pathname === href && 'text-primary font-semibold',
                        // Apply mobile styles or default desktop color
                        isMobile ? mobileLinkClasses : "text-white",
                    )}
                    // Menu close logic
                    onClick={isMobile ? toggleMenu : undefined}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

/* Export section */
export default NavItems
