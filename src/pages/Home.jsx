export default function Home() {
    return (
        <div className="flex flex-1 overflow-hidden">
            
            <div className="w-12 bg-d-background border-r border-[#3c3c3c] overflow-hidden ml-64">
                <div className="text-right pr-2 text-[#858585] text-xs font-mono leading-6 pt-4">
                    {Array.from({ length: 50 }, (_, i) => (
                        <div key={i}>{i}</div>
                    ))}
                </div>
            </div>

            
            <div className="flex-1 bg-d-background p-6 text-[#d4d4d4] font-mono text-sm leading-6 overflow-auto">
                <div className="space-y-6">
                    
                    <div className="flex">
                        <pre className="text-[#d4d4d4] font-mono leading-tight text-xs md:text-sm mb-6">
                            {`            _      ________   _______  _____   _      ______ ______
      /\\   | |    |  ____\\ \\ / /_   _|/ ____| | |    |  ____|  ____|
     /  \\  | |    | |__   \\ V /  | | | (___   | |    | |__  | |__
    / /\\ \\ | |    |  __|   > <   | |  \\___ \\  | |    |  __| |  __|
   / ____ \\| |____| |____ / . \\ _| |_ ____) | | |____| |____| |____
  /_/    \\_\\______|______/_/ \\_\\_____|_____/  |______|______|______|`}
                        </pre>
                        <pre className="text-dracula-green font-mono ml-4 mt-2">
                            {`   /\\_/\\
  ( o.o )
   > ^ <`}
                        </pre>
                    </div>

                    <div className="mb-8"></div>
                    <div className="mb-8"></div>

                    <div className="space-y-0">
                        <span className="text-[#ff79c6]">// Introduction</span>
                        <div className="text-[#f1fa8c] pl-4">
                            I'm a third-year student at Tufts University.
                        </div>
                    </div>

                    <div className="space-y-0">
                        <span className="text-[#ff79c6]">// Currently</span>
                        <div className="text-[#f1fa8c] pl-4">
                        I'm looking for a summer 2026 internship. Open to opportunities in software development and related fields.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}