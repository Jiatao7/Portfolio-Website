import Skills from "../_components/Skills";

export default function Page() {
    return (
        <div className="py-20 -mb-10">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">My Skills<span className="text-primary">.</span></h1>
                <p className="text-xs">Here are some of my skills <br /> I am always seeking to learn new ones<span className="text-primary">.</span></p>
            </div>
            <Skills />
        </div>
    )
}