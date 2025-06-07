import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-d-background flex flex-col overflow-auto">
      <Header />
      <div className="flex flex-1 pt-8">
        <Sidebar />
        
        <div className="flex flex-1">
          
          <main className="flex-1 bg-d-background p-6 text-[#d4d4d4] font-mono text-sm leading-6 overflow-auto ml-64">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}