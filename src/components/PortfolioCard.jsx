export default function PortfolioCard({ proj }) {
    return (

        <div className="flex justify-between items-start p-3 mb-4 rounded-[0.6rem] bg-darker border border-selection">
            <div>
                <div className="text-dracula-pink font-semibold text-2xl">{proj.title}</div>
                <div className="text-#fbfbf5 text-md">{proj.description}</div>
                <div className="text-d-foreground text-md mt-4">{proj.blurb}</div>
                <div className="text-cyan font-semibold mt-6 mb-2 text-lg">Languages & Technologies</div>
                <div className="">
                    <ul className="flex items-start">
                        {proj.technologies.map((tech, index) => (
                            <li key={index} className="">
                                <div className="pr-2 pl-2 mr-2 text-d-foreground rounded-2xl bg-dracula-pink text-[0.80rem] whitespace-nowrap">
                                    {tech}
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex space-x-3">
                <a href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="rounded-[0.4rem] p-2 pl-5 pr-5 bg-dracula-pink text-d-foreground hover:scale-105 transition-all duration-200 whitespace-nowrap">View</a>
                <a href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[0.4rem] p-2 bg-selection  text-d-foreground hover:scale-105 transition-all duration-200 whitespace-nowrap">View on Github</a>
            </div>

        </div>






    );
}