import React, { useEffect, useState } from 'react';
import { 
  Wifi, 
  Zap, 
  Smartphone, 
  ArrowRight, 
  Users, 
  Globe, 
  Shield,
  Lightbulb,
  Target,
  Heart,
  CheckCircle,
  Play
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Wifi,
      title: 'Télécommunications',
      description: 'Infrastructures et services de connectivité stable et rapide pour tous.',
      color: 'red',
      features: ['Infrastructures Télécoms', 'Villes Intelligentes', 'Solutions VoIP', 'Communication Unifiée']
    },
    {
      icon: Zap,
      title: 'Énergies Renouvelables',
      description: 'Solutions d\'électrification propre et durable adaptées aux réalités locales.',
      color: 'red',
      features: ['Systèmes Solaires', 'Solutions de Stockage', 'Micro-réseaux', 'Audit Énergétique']
    },
    {
      icon: Smartphone,
      title: 'Technologies Numériques',
      description: 'Innovation technologique pour la transformation numérique locale.',
      color: 'red',
      features: ['Développement Logiciels', 'IoT & Systèmes Intelligents', 'Cybersécurité', 'Formations Techniques']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projets Réalisés', icon: Target },
    { number: '50+', label: 'Entreprises Partenaires', icon: Users },
    { number: '15+', label: 'Années d\'Expérience', icon: Globe },
    { number: '99%', label: 'Satisfaction Client', icon: Heart }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-800">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(235, 61, 38, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(255, 154, 39, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(247, 12, 12, 0.88) 0%, transparent 50%)`
            }}
          ></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 opacity-10 transform rotate-45 animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${45 + i * 30}deg)`
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-800 rounded-lg"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            {/* Logo animé */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <span className="text-white font-bold text-4xl">N</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                NEXTCOM
              </span>
              <span className="block text-2xl md:text-3xl text-red-200 mt-2 font-light">
                S.A.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leader de la convergence entre télécommunications, énergie propre et innovation technologique en Afrique
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center">
                  Découvrir nos solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-red-500 text-red-400 rounded-xl font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Voir notre vision
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
