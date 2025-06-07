import { Link, useLocation } from 'react-router-dom';


export default function Sidebar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/'},
    { name: 'About', path: '/about'},
    { name: 'Portfolio', path: '/portfolio'},
    { name: 'Contact', path: '/contact'},
  ];

  return (
    <div className="w-64 bg-darker border-r border-[#3c3c3c] h-screen flex flex-col fixed left-0 top-0 z-10">
      
      <div className="px-3 pt-11 pb-3 text-[#cccccc] text-xs font-medium uppercase tracking-wide">
        Explorer
      </div>
      
      
      <div className="flex-1 py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 px-3 py-1 text-sm transition-colors ${
              location.pathname === item.path
                ? 'bg-[#37373d] text-dracula-purple'
                : 'text-[#cccccc] hover:bg-[#2a2d2e]'
            }`}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}