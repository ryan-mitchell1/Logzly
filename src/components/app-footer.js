import Image from 'next/image'

export default function AppFooter() {
    return (
        <div className="app-footer">
            <Image src="/powered-by-vercel.svg" height="120" width="120" priority />
        </div>
    )
}