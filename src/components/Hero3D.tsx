import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Wifi, Sun, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * 10;
      const rotateY = (x - 0.5) * -10;

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-red-300 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-red-400 rounded-full opacity-15 animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-red-500 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                L'avenir de la
                <span className="text-red-600 block animate-gradient-text">
                  Connectivité
                </span>
                en Afrique
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NEXTCOM S.A. révolutionne les infrastructures africaines avec des solutions
                intégrées en télécommunications, énergies renouvelables et technologies numériques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/energy"
                className="group bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Découvrir nos solutions</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Nous contacter
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">100+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-sm text-gray-600">Entreprises partenaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Support technique</div>
              </div>
            </div>
          </div>

          {/* 3D Interactive Card */}
          <div className="relative">
            <div
              ref={containerRef}
              className="relative bg-white rounded-2xl shadow-2xl p-8 transition-transform duration-300 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl opacity-5"></div>

              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-red-600 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nos Pôles d'Excellence</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-300 group">
                    <Wifi className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Télécommunications</h4>
                      <p className="text-sm text-gray-600">Connectivité stable et rapide</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-300 group">
                    <Sun className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Énergies Renouvelables</h4>
                      <p className="text-sm text-gray-600">Solutions durables et efficaces</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors duration-300 group">
                    <Cpu className="h-8 w-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Technologies Numériques</h4>
                      <p className="text-sm text-gray-600">Innovation et transformation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;