'use client'
import { cn } from "@/lib/utils"
/* Import section */
import Link from "next/link"
import { usePathname } from "next/navigation"
/* Navigation items */
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },

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
