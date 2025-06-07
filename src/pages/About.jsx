import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";

export default function About() {
    const skillsData = [
        { category: "Languages", items: ["Java", "C++", "Python", "C", "JavaScript", "CSS", "HTML"] },
        { category: "Frameworks & Libraries", items: ["React", "Node.js", "Spring Boot", "Next.js", "Tailwind CSS", "Express"] },
        { category: "Tools & Platforms", items: ["Git", "MongoDB", "Linux"] }
    ];

    const educationInfo = {
        title: "Tufts University",
        description: "Pursuing BS in Computer Science & Applied Math",
        date: "Sep 2023 - May 2027",
        bulletpointsHeader: "Course Work:",
        bulletpoints: ["Algorithms", "Machine Structure and Programming", "Software Engineering", "Data Structures"]
    }

    const experienceInfo1 = {
        title: "Software Developer",
        description: "Tufts Bioinformatics and Computational Biology Group",
        date: "Jan 2025 - Present",
        bulletpoints: ["Build archival tool that validates metadata and generates compressed BagIt-compliant packages", 
                        "Developed metadata validation system for MEDFORD language with custom rules and file operations", 
                        "Created automated test suite with 50+ tests used by 10+ team members"]
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
            <BigCard key={experienceInfo1.title} info={experienceInfo1}></BigCard>
            <BigCard key={experienceInfo2.title} info={experienceInfo2}></BigCard>

            

        </div>
    );
}
