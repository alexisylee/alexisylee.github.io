import PortfolioCard from "../components/PortfolioCard"

export default function Portfolio() {
    const proj1 = {
        title: "lint40",
        description: "VSCode Extension",
        blurb: "A C linter enforcing course coding standards with contract generation and dual-mode checking",
        technologies: ["TypeScript", "Tree-sitter", "Node"],
        link: "https://marketplace.visualstudio.com/items?itemName=AlexisLee.lint40",
        githubLink: "https://github.com/alexisylee/lint40"
    }

    return(
        <div className="container">
            <h1 className="text-dracula-purple font-bold text-2xl mb-6">Portfolio</h1>
            <h1 className="text-cyan font-semibold text-xl mt-4 mb-4">In progress...</h1>
            <PortfolioCard key={proj1.title} proj={proj1}></PortfolioCard>
        </div>
        
    )
}