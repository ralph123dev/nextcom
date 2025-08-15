import React from 'react';
import { Wifi, Radio, Globe, Shield, Smartphone, Building } from 'lucide-react';

const Telecoms = () => {
  const services = [
    {
      icon: Radio,
      title: 'Infrastructure Télécoms',
      description: 'Déploiement de tours relais, pylônes et réseaux fibre optique pour une couverture optimale.',
      features: ['Tours relais 4G/5G', 'Pylônes haute performance', 'Fibre optique FTTH', 'Réseaux sans fil']
    },
    {
      icon: Globe,
      title: 'Ville Intelligente',
      description: 'Solutions de smart city avec vidéosurveillance connectée et capteurs urbains intelligents.',
      features: ['Vidéosurveillance IP', 'Capteurs IoT urbains', 'Éclairage intelligent', 'Gestion du trafic']
    },
    {
      icon: Smartphone,
      title: 'Accès Internet & Téléphonie',
      description: 'Services Internet haut débit et solutions de téléphonie pour particuliers et entreprises.',
      features: ['Internet résidentiel', 'Internet professionnel', 'Solutions VoIP', 'Téléphonie mobile']
    },
    {
      icon: Building,
      title: 'Solutions Entreprises',
      description: 'Services télécoms dédiés aux entreprises avec VPN, communication unifiée et support 24/7.',
      features: ['Réseaux VPN sécurisés', 'Communication unifiée', 'Téléconférence HD', 'Support technique']
    }
  ];

  const advantages = [
    'Couverture étendue même en zones rurales',
    'Technologies de pointe 4G/5G',
    'Installation et maintenance professionnelles',
    'Support technique 24/7',
    'Solutions sur mesure',
    'Tarifs compétitifs'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-red-600">
                  <Wifi className="h-6 w-6" />
                  <span className="font-semibold">Pôle Télécommunications</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Connectivité
                  <span className="text-red-600 block">
                    Sans Limites
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nous déployons des infrastructures télécoms modernes pour garantir une connectivité 
                  stable, rapide et abordable à tous, y compris dans les zones les plus reculées.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  Demander un devis
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                  Voir nos réalisations
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Disponibilité réseau</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">1Gb/s</div>
                    <div className="text-sm text-gray-600">Débit maximum</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Sites déployés</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support technique</div>
                  </div>
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
              Nos Services Télécoms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de solutions pour répondre à tous vos besoins de connectivité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir NEXTCOM ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre expertise technique et notre connaissance du marché africain nous permettent 
                de proposer des solutions télécoms adaptées et performantes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Demandez votre étude personnalisée</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom de votre entreprise"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    placeholder="Email professionnel"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <textarea
                    placeholder="Décrivez votre projet..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  ></textarea>
                  <button className="w-full bg-white text-red-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Envoyer ma demande
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecoms;