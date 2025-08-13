import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";

export default function About() {
    const skillsData = [
        { category: "Languages", items: ["Java", "C++", "Python", "C", "JavaScript", "TypeScript", "CSS", "HTML", "SQL"] },
        { category: "Frameworks & Libraries", items: ["React", "Node.js", "Spring Boot", "PostgreSQL", "Next.js", "Tailwind", "Express"] },
        { category: "Tools & Platforms", items: ["Git", "Linux"] }
    ];

    const educationInfo = {
        title: "Tufts University",
        description: "Pursuing BS in Computer Science & Applied Math",
        date: "Sep 2023 - May 2027",
        bulletpointsHeader: "Course Work:",
        bulletpoints: ["Algorithms", "Machine Structure and Programming", "Software Engineering", "Data Structures"]
    }

    const experienceInfo0 = {
        title: "Research Intern",
        description: "Pusan National University Programming Languages Lab",
        date: "Jun 2025 - Aug 2025",
        bulletpoints: ["Designed and implemented K-Prolog programming language, a Korean-localized Prolog variant with translated predicates, custom Hangul tokenization, and educational grammar adaptations", 
                        "Built complete interpreter from scratch and published research findings in conference proceedings", 
                        "Developed interactive development environment with integrated GUI terminal and file management system, deployed as the primary programming platform for university coursework "]
    }

    const experienceInfo1 = {
        title: "Software Developer",
        description: "Tufts Bioinformatics and Computational Biology Group",
        date: "Jan 2025 - Present",
        bulletpoints: ["Implement research data archival tool with automated metadata validation, standardized directory organization, and MD5 checksum generation for BagIt format compliance and long-term digital preservation", 
                        "Develop 50+ automated tests integrated with CI pipelines, enabling scalable testing across 10+ researchers"]
    }

    const experienceInfo2 = {
        title: "Teaching Assistant",
        description: "Tufts University Discrete Mathematics Course",
        date: "Sep 2024 - Present",
        bulletpoints: ["Lead weekly workshops for 20+ students", 
                        "Provide personalized office hours support for 5-10 students weekly,"]
    }

    return (
        <div className="container">
            <h1 className="text-dracula-purple font-bold text-2xl mb-6">About Me</h1>
            <h1 className="text-cyan font-semibold text-xl mt-4 mb-4">Education</h1>
            <BigCard key={educationInfo.title} info={educationInfo}></BigCard>

            <h1 className="text-cyan font-semibold text-xl mt-12">Skills</h1>
            {skillsData.map(({ category, items }) => (
                <div key={category} className="space-y-4">
                    <h2 className="text-[16px] font-semibold text-cyan mt-5 mb-2">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {items.map(skill => (
                            <SmallCard key={skill}>{skill}</SmallCard>
                        ))}
                    </div>
                </div>
            ))}

            <h1 className="text-cyan font-semibold text-xl mt-14 mb-4">Experience</h1>
            <BigCard key={experienceInfo0.title} info={experienceInfo0}></BigCard>
            <BigCard key={experienceInfo1.title} info={experienceInfo1}></BigCard>
            <BigCard key={experienceInfo2.title} info={experienceInfo2}></BigCard>

            

        </div>
    );
}
