import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
    return (
        <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
            <Link href="https://github.com/Jiatao7" className="hover:text-primary"><GitHubLogoIcon className="h-4 w-4" /></Link>
            <Link href="https://www.linkedin.com/in/jiatao-geng-533073313/" className="hover:text-primary"><LinkedInLogoIcon className="h-4 w-4" /></Link>
        </div>
    )
}