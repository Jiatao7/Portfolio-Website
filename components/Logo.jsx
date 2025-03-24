import Link from "next/link";

export default function Logo() {
    return(
        <Link href="/">
            <h1 className="text-2xl font-bold select-none">Jiatao Geng<span className="text-primary"></span></h1>
        </Link>
    )
}