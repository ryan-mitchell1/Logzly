import Image from 'next/image'

export default function AppFooter() {
    return (
        <div className="app-footer">
            <a href="https://vercel.com/?utm_source=logzly&utm_campaign=oss">
                <Image src="/powered-by-vercel.svg" height="120" width="120" priority />
            </a>
        </div>
    )
}