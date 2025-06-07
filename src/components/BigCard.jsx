export default function BigCard({ info }) {
    return (
        <div>
            <div className="flex justify-between items-start p-3 mb-4 rounded-[0.6rem] bg-darker border border-selection">
                <div>
                    <div className="text-d-foreground font-semibold text-xl mb-0">{info.title}</div>
                    <div className="text-cyan text-md mt-0">{info.description}</div>
                    {info.bulletpointsHeader && <div className="mt-2 text-dracula-purple text-[1rem]">{info.bulletpointsHeader}</div>}
                    <div className="mt-1">
                        <ul className="space-y-[0.1rem]">
                            {info.bulletpoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-dracula-purple mr-2">-</span>
                                    <span className="text-dracula-foreground text-sm">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-[0.1rem] pl-[0.4rem] pb-[0.1rem] pr-[0.4rem] text-d-foreground rounded-2xl bg-dracula-pink text-[0.80rem] overflow-clip">
                    {info.date}
                </div>


            </div>



        </div>

    );
}