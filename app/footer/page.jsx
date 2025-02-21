import { GithubIcon } from '@/components/icons'
import { Meteors } from '@/components/magicui/meteors.tsx'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className="relative flex h-[100px] w-full items-center justify-between px-16 overflow-hidden rounded-lg border">
            <Meteors number={30} />
            <p className="font-bold text-inherit pacifico-regular text-3xl">Dipali.</p>
            <div className="flex gap-3 justify-center items-center">
                <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="bg-slate-400 p-2 rounded-full hover:p-4 transition-all">
                    <GithubIcon />
                </Link>

                <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="bg-slate-400 p-2 rounded-full hover:p-4 transition-all">
                    <FaLinkedin className="text-blue-600" size={22} />
                </Link>
            </div>
        </div>
    )
}