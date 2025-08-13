import PortfolioCard from "../components/PortfolioCard"

export default function Portfolio() {
    const proj1 = {
        title: "lint40",
        description: "VSCode Extension",
        blurb: "A C linter enforcing course coding standards with contract generation and dual-mode checking.",
        technologies: ["TypeScript", "Tree-sitter", "Node"],
        link: "https://marketplace.visualstudio.com/items?itemName=AlexisLee.lint40",
        githubLink: "https://github.com/alexisylee/lint40"
    }

    const proj2 = {
        title: "K-Prolog",
        description: "Programming Language",
        blurb: "A functional logic programming language with native Korean syntax parsing andA functional logic programming language with native Korean predicate support and syntax parsing, featuring extensive Prolog compatibility.",
        technologies: ["Python", "Prolog", "PyInstaller"],
        link: "https://github.com/yonghun8343/k-prolog",
        githubLink: "https://github.com/yonghun8343/k-prolog"
    }

    return(
        <div className="container">
            <h1 className="text-dracula-purple font-bold text-2xl mb-6">Portfolio</h1>
            <PortfolioCard key={proj1.title} proj={proj1}></PortfolioCard>
            <PortfolioCard key={proj2.title} proj={proj2}></PortfolioCard>
        </div>
        
    )
}