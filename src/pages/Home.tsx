import React from 'react';
import Hero3D from '../components/Hero3D';
import { Wifi, Sun, Cpu, Target, Users, Globe, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Wifi,
      title: 'Télécommunications',
      description: 'Infrastructures et services de connectivité pour tous',
      features: ['Fibre optique', 'Réseaux sans fil', 'Solutions VoIP', 'Ville intelligente']
    },
    {
      icon: Sun,
      title: 'Énergies Renouvelables',
      description: 'Solutions énergétiques durables et efficaces',
      features: ['Systèmes solaires', 'Stockage d\'énergie', 'Micro-réseaux', 'Audit énergétique']
    },
    {
      icon: Cpu,
      title: 'Technologies Numériques',
      description: 'Innovation et transformation digitale',
      features: ['Développement logiciel', 'IoT', 'Cybersécurité', 'Formations']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Nous développons des solutions technologiques de pointe adaptées aux réalités locales.'
    },
    {
      icon: Award,
      title: 'Fiabilité',
      description: 'Nos services garantissent une qualité et une performance constantes.'
    },
    {
      icon: Users,
      title: 'Accessibilité',
      description: 'Nous rendons la technologie accessible à tous, partout en Afrique.'
    },
    {
      icon: Globe,
      title: 'Impact Local',
      description: 'Nous contribuons au développement économique et social des communautés.'
    }
  ];

  return (
    <div className="pt-16">
      <Hero3D />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Pôles d'Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois secteurs stratégiques qui convergent pour créer des solutions intégrées 
              et innovantes pour l'Afrique de demain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-red-500 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre mission de transformation technologique en Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                    <value.icon className="h-10 w-10 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à transformer votre infrastructure ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Rejoignez les entreprises qui font confiance à NEXTCOM S.A. pour leurs projets 
            de télécommunications, d'énergie renouvelable et de transformation numérique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Demander un devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Planifier une consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;