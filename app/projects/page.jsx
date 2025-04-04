import Link from "next/link";
import ProjectsSnip from "../_components/ProjectsSnip";

export const metadata = {
    title: "Projects",
    description: "An extensive display of my full-stack development skills, experiences, and projects, demonstrating my proficiency and commitment to coding.",
};

export default function Page() {
    return (
        <div className="py-20">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">My Projects<span className="text-primary">.</span></h1>
                <p className="text-xs">Here are some of the projects I built<span className="text-primary">.</span></p>
            </div>
            <ProjectsSnip />
        </div>
    )
}