import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTypescript, SiPython, SiCplusplus, SiExpress, SiFastapi, SiGit } from "react-icons/si";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall, DiMongodb, DiMysql, DiBootstrap, DiJava } from "react-icons/di";


import { FaDocker } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
    return (
        <div className="py-10 -mt-5 mb-10 px-5">
            <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiJavascript className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiTypescript className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiPython className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><DiJava className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiCplusplus className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaHtml5 className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><IoLogoCss3 className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaReact className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><TbBrandNextjs className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><DiNodejsSmall className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiExpress className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiFastapi className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiTailwindcss className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><DiBootstrap className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><DiMysql className="h-10 w-10" /></div>
                <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><DiMongodb className="h-10 w-10" /></div>
                {/* <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiGit className="h-10 w-10" /></div> */}
                {/* <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><FaDocker className="h-10 w-10" /></div> */}
                {/* <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><SiAppwrite className="h-10 w-10" /></div> */}
                {/* <div className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"><TbBrandReactNative className="h-10 w-10" /></div> */}
            </div>
        </div>
    )
}
