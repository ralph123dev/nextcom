import React, { useState } from 'react';
import { Cpu, Smartphone, Shield, Code, Wifi, Database, Users, BookOpen } from 'lucide-react';

const Technology = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Logiciel',
      description: 'Solutions numériques sur mesure pour optimiser vos processus métier.',
      features: ['Applications web', 'Applications mobiles', 'Systèmes de gestion', 'API et intégrations']
    },
    {
      icon: Wifi,
      title: 'IoT & Systèmes Intelligents',
      description: 'Objets connectés et solutions intelligentes pour l\'agriculture et la domotique.',
      features: ['Capteurs agricoles', 'Domotique intelligente', 'Monitoring à distance', 'Automatisation']
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection complète de vos données et infrastructures numériques.',
      features: ['Audits de sécurité', 'Sécurisation réseau', 'Protection données', 'Conformité RGPD']
    },
    {
      icon: BookOpen,
      title: 'Formations Techniques',
      description: 'Programmes de formation pour développer les compétences numériques.',
      features: ['Programmation', 'Cybersécurité', 'Énergies renouvelables', 'Certifications']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', level: 95 },
    { name: 'Node.js', category: 'Backend', level: 90 },
    { name: 'Python', category: 'IA/ML', level: 88 },
    { name: 'IoT', category: 'Hardware', level: 85 },
    { name: 'Cloud', category: 'Infrastructure', level: 92 },
    { name: 'Blockchain', category: 'Innovation', level: 80 }
  ];

  const projects = [
    {
      title: 'Plateforme AgriTech',
      description: 'Solution IoT pour l\'agriculture intelligente avec capteurs et analyse prédictive.',
      tech: ['IoT', 'Python', 'React'],
      impact: '+40% rendement agricole'
    },
    {
      title: 'Système de Gestion Énergétique',
      description: 'Application de monitoring et gestion des installations solaires en temps réel.',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      impact: '500+ installations gérées'
    },
    {
      title: 'Plateforme E-Learning',
      description: 'Solution complète de formation en ligne avec certifications numériques.',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      impact: '2000+ apprenants formés'
    }
  ];

  // Animation pour déplacer les éléments de chaque liste "features"
  const [featuresState, setFeaturesState] = useState(services.map(s => [...s.features]));

  // Fonction pour permuter deux éléments dans une liste
  const swapFeatures = (serviceIdx: number, idxA: number, idxB: number) => {
    setFeaturesState(prev => {
      const newState = [...prev];
      const arr = [...newState[serviceIdx]];
      [arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]];
      newState[serviceIdx] = arr;
      return newState;
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-red-600">
                  <Cpu className="h-6 w-6" />
                  <span className="font-semibold">Pôle Technologies Numériques</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Innovation
                  <span className="text-red-600 block">
                    Numérique
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nous stimulons la transformation numérique locale en développant des solutions 
                  technologiques pratiques, accessibles et innovantes pour l'Afrique de demain.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  Découvrir nos projets
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                  Formations disponibles
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <Cpu className="h-16 w-16 text-blue-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900">Technologies Maîtrisées</h3>
                </div>
                <div className="space-y-4">
                  {technologies.slice(0, 4).map((tech, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <span className="font-medium text-gray-900">{tech.name}</span>
                        <span className="text-sm text-gray-500">({tech.category})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-600 rounded-full transition-all duration-1000"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-red-600">{tech.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Technologiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions numériques complètes pour accompagner votre transformation digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, serviceIdx) => (
              <div
                key={serviceIdx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {featuresState[serviceIdx].map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-500 transition-all duration-500"
                          style={{
                            transform: `translateY(0px)`,
                            transition: 'transform 0.5s'
                          }}
                        >
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          {feature}
                          {/* Bouton pour permuter avec le suivant */}
                          {idx < featuresState[serviceIdx].length - 1 && (
                            <button
                              className="ml-2 px-2 py-1 text-xs bg-red-100 rounded hover:bg-red-200 transition"
                              onClick={() => swapFeatures(serviceIdx, idx, idx + 1)}
                            >
                              ⇅
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Projets Réalisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations qui transforment les secteurs clés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Impact:</span>
                    <span className="font-semibold text-green-600">{project.impact}</span>
                  </div>
                </div>
                
                <div className="bg-red-600 text-white p-4 text-center">
                  <button className="font-semibold hover:underline">
                    Voir le projet →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Stack Technologique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons les technologies les plus avancées pour créer des solutions robustes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 -top-6 text-sm font-semibold text-red-600">
                    {tech.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à digitaliser votre entreprise ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Nos experts vous accompagnent dans votre transformation numérique avec des solutions 
            sur mesure adaptées à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Démarrer un projet
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Voir nos formations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;