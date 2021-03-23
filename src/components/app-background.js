import Image from 'next/image'

export default function AppBackground() {
    return (
        <Image src="/home.svg" layout="fill" className="app-background" />
    )
}