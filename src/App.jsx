import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Home page without Layout wrapper */}
                <Route path="/" element={

                    <div className="h-screen bg-background flex flex-col overflow-hidden">
                        <Header />
                        <div className="flex flex-1 pt-8">
                            <Sidebar />

                            <div className="flex flex-1">
                                    <Home />
                            </div>
                        </div>
                    </div>
                } />

                {/* Other pages with Layout wrapper */}
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;