export default function SmallCard({children}) {
    return (
        <div className="p-3 rounded-[0.6rem] bg-darker border border-selection text-d-foreground text-[16px] cursor-default">            
            {children}
        </div>
    );
}