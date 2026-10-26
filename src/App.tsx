import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import './index.css';

// Pages
import LoadingScreen from './pages/LoadingScreen';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SellPage from './pages/SellPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Login from './components/Login';

function App({ basename }: { basename: string }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    (window.lenis as any) = lenisInstance;

    let rafId: number;
    function raf(time: number) {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      clearTimeout(timer);
    };
  }, []);

  // 3D Loading Scene
  const LoadingScene = () => {
    return (
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        shadows
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#e5b769" />

        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <group position={[0, 0, 0]}>
            <mesh rotation={[Math.PI / 6, Math.PI / 4, 0]} position={[-2, 1.5, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#e5b769"
                roughness={0.2}
                metalness={0.8}
                emissive="#e5b769"
                emissiveIntensity={0.2}
              />
            </mesh>
            <mesh rotation={[-Math.PI / 6, -Math.PI / 4, 0]} position={[2, -1.5, 0]}>
              <octahedronGeometry args={[0.8]} />
              <meshStandardMaterial
                color="#00d4ff"
                roughness={0.2}
                metalness={0.9}
                emissive="#00d4ff"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <torusGeometry args={[1.1, 0.3, 16, 32]} />
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.1}
                metalness={0.95}
                emissive="#00d4ff"
                emissiveIntensity={0.15}
              />
            </mesh>
          </group>
        </Float>

        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    );
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-50">
        <div className="absolute inset-0 z-0">
          <LoadingScene />
        </div>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <Router basename={basename}>
      <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#121218] text-white">
        {/* Particle Background */}
        <div className="particle-bg pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${(i % 5) * 2 + 2}px`,
                height: `${(i % 5) * 2 + 2}px`,
                left: `${(i * 17) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${15 + (i % 10)}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 liquid-glass border-b border-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e5b769] to-[#00d4ff] flex items-center justify-center">
                <span className="text-black font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-display font-bold gradient-text">REFUB</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-300 hover:text-[#e5b769] transition-colors text-sm font-medium">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-[#e5b769] transition-colors text-sm font-medium">Products</Link>
              <Link to="/sell" className="text-gray-300 hover:text-[#e5b769] transition-colors text-sm font-medium">Sell Item</Link>
              <Link to="/about" className="text-gray-300 hover:text-[#e5b769] transition-colors text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-[#e5b769] transition-colors text-sm font-medium">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/cart" className="p-2 rounded-full hover:bg-white/5 transition-colors">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <Login />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20 relative z-10 max-w-7xl mx-auto w-full overflow-x-hidden">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/sell" element={<SellPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text mb-4">REFUB</h3>
                <p className="text-gray-400 text-sm">
                  The best refurbished gadgets in the UAE market. Tried & tested by our experts with a 3-month warranty.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Mobiles & Tablets</li>
                  <li>Drones & Cameras</li>
                  <li>PCs & Gaming</li>
                  <li>Projectors & Home Appliances</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/sell" className="hover:text-[#e5b769]">Sell Your Gadget (Expert Pickup)</Link></li>
                  <li><Link to="/about" className="hover:text-[#e5b769]">3-Month Warranty Policy</Link></li>
                  <li><Link to="/contact" className="hover:text-[#e5b769]">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white flex-1 focus:outline-none focus:border-[#e5b769]"
                  />
                  <button className="bg-[#e5b769] hover:bg-[#c9964d] px-4 py-2 rounded-lg text-black text-sm font-semibold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-500 text-sm">
              © 2026 REFUB UAE. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
