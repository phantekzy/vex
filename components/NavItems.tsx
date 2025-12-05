'use client'
import { cn } from "@/lib/utils"
/* Import section */
import Link from "next/link"
import { usePathname } from "next/navigation"
/* Navigation items */
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tutors', href: '/Tutors' },
    { label: 'My Progess', href: '/my-progress' },

]
/* Navigation bar items sectio */
const NavItems = () => {
    /* Path name */
    const pathname = usePathname()
    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathname === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}
/* Export section */
export default NavItems
