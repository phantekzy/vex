'use client'
/* Import section */
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { subjects } from "@/constants"
/* Filter subjects button */
const SubjectFilter = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [subject, setSubject] = useState(searchParams.get('subject') || 'All')
    useEffect(() => {
        const delay = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())
            if (subject === 'All') {
                params.delete('subject')
            } else {
                params.set('subject', subject)
            }
            router.push(`${pathname}?${params.toString()}`)
        }, 300)

        return () => clearTimeout(delay)
    }, [subject])
    return (
        <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="input">
                <SelectValue placeholder="Filters" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='All'>All</SelectItem>
                {subjects.map((sub) => (
                    <SelectItem
                        key={sub}
                        value={sub}
                    >
                        {sub}
                    </SelectItem>
                ))
                }
            </SelectContent>
        </Select>
    )
}
/* Export section */
export default SubjectFilter
