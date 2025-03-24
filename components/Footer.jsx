import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
        <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-8">
            <div className="flex justify-between">
                <div>
                    <Logo />
                    <p className="text-sm"><a href="mailto:j29geng@uwaterloo.ca" className="hover:underline hover:text-primary">j29geng@uwaterloo.ca</a><span className="text-primary">.</span></p>
                </div>
                <ModeToggle/>
            </div>
            <Social />
        </footer>
    )
}