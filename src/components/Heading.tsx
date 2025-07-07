export const Heading =({ level, children }: { level: "h1" | "h2" | "h3"; children: React.ReactNode })  =>{
    if (level === "h1") {
        return <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-loose font-bold pb-10 font-Outfit">{children}</h1>;
    }
    if (level === "h2") {
        return <h2 className="text-3xl font-bold pt-10 font-Outfit border-b border-gray-200 pb-2">
{children}</h2>;
    }
    return <h3 className="text-xl font-bold pt-8 mb-4">{children}</h3>;
    }

export default Heading;