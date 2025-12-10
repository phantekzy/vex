'use client'
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const SearchInput = () => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [searchQuery, setSearchQuery] = useState(searchParams.get('topic') || '')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())
            if (searchQuery === '') {
                params.delete('topic')
            } else {
                params.set('topic', searchQuery)
            }
            router.push(`${pathname}?${params.toString()}`)
        }, 500)

        return () => clearTimeout(delayDebounceFn)

    }, [searchQuery])

    return (
        <div className="relative border border-black rounded-lg flex items-center gap-2 px-2 py-1 h-fit">
            <Image
                src={"/icons/search.svg"}
                alt='search input'
                height={15}
                width={15}
            />
            <input
                placeholder="Search Tutors"
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchInput

