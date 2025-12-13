'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

/* Navigation items interface */
interface NavItemsProps {
    isMobile?: boolean;
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
const NavItems = ({ isMobile = false, toggleMenu }: NavItemsProps) => {
    const pathname = usePathname()
    const containerClasses = isMobile
        ? "space-y-2"
        : "flex items-center gap-4";
    const linkBaseClasses = "transition hover:text-primary/80";
    const mobileLinkClasses = "text-left py-1 px-2 rounded-md hover:bg-gray-700 block text-sm";

    return (
        <nav className={containerClasses}>
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(
                        linkBaseClasses,
                        pathname === href && 'text-primary font-semibold',
                        isMobile ? mobileLinkClasses : "text-black",
                    )}
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
