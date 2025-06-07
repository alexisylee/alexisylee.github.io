import PortfolioCard from "../components/PortfolioCard"

export default function Portfolio() {
    const proj1 = {
        title: "CartMates",
        description: "Web App",
        blurb: "blurbblurbblurb",
        technologies: ["React", "MongoDB", "Node.js", "Express"],
        link: "https://github.com/alexisylee",
        githubLink: "https://github.com/alexisylee"
    }

    return(
        <div className="container">
            <h1 className="text-dracula-purple font-bold text-2xl mb-6">Portfolio</h1>
            <h1 className="text-cyan font-semibold text-xl mt-4 mb-4">In progress...</h1>
            {/* <PortfolioCard key={proj1.title} proj={proj1}></PortfolioCard> */}
        </div>
        
    )
}