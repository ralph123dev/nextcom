import React from 'react';
import { Sun, Battery, Zap, Home, Building2, Factory } from 'lucide-react';

const Energy = () => {
  const services = [
    {
      icon: Sun,
      title: 'Systèmes Solaires Photovoltaïques',
      description: 'Solutions solaires complètes pour tous types d\'installations, du résidentiel à l\'industriel.',
      features: ['Kits solaires domestiques', 'Solutions PME', 'Centrales hybrides', 'Maintenance préventive']
    },
    {
      icon: Battery,
      title: 'Stockage et Secours', 
      description: 'Systèmes de stockage d\'énergie et solutions de secours pour une alimentation continue.',
      features: ['Batteries lithium', 'Onduleurs intelligents', 'Systèmes UPS', 'Gestion énergétique']
    },
    {
      icon: Zap,
      title: 'Pompage Solaire',
      description: 'Solutions de pompage solaire pour l\'agriculture et l\'approvisionnement en eau.',
      features: ['Pompes solaires', 'Systèmes d\'irrigation', 'Forage solaire', 'Traitement de l\'eau']
    },
    {
      icon: Building2,
      title: 'Micro-réseaux & Électrification',
      description: 'Développement de micro-réseaux intelligents pour l\'électrification rurale.',
      features: ['Mini-grids solaires', 'Électrification villages', 'Réseaux intelligents', 'Monitoring à distance']
    }
  ];

  const solutions = [
    {
      icon: Home,
      title: 'Résidentiel',
      description: 'Solutions solaires pour maisons individuelles',
      power: '3-10 kWc',
      savings: 'Jusqu\'à 80% d\'économies'
    },
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Installations pour entreprises et bureaux',
      power: '10-100 kWc',
      savings: 'ROI en 3-5 ans'
    },
    {
      icon: Factory,
      title: 'Industriel',
      description: 'Grandes installations pour l\'industrie',
      power: '100+ kWc',
      savings: 'Réduction drastique des coûts'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-red-600">
                  <Sun className="h-6 w-6" />
                  <span className="font-semibold">Pôle Énergies Renouvelables</span>
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  L'Énergie du
                  <span className="text-red-600 block">
                    Futur
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nous proposons des solutions énergétiques durables et efficaces, adaptées aux 
                  réalités socio-économiques africaines pour un avenir énergétique autonome.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  Calculer mes économies
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                  Audit énergétique gratuit
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <Sun className="h-16 w-16 text-yellow-500 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900">Impact Environnemental</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">-50T</div>
                    <div className="text-xs text-gray-600">CO₂ évité/an</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">25 ans</div>
                    <div className="text-xs text-gray-600">Garantie panneaux</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">300+</div>
                    <div className="text-xs text-gray-600">Jours soleil/an</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">80%</div>
                    <div className="text-xs text-gray-600">Économies max</div>
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
              Nos Solutions Énergétiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'installation résidentielle aux grandes centrales solaires, nous couvrons 
              tous vos besoins énergétiques avec des technologies de pointe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="h-8 w-8 text-yellow-600 group-hover:text-white transition-colors duration-300" />
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

      {/* Solutions by Sector */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions par Secteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque type d'installation et de besoin énergétique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <solution.icon className="h-10 w-10 text-red-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Puissance</span>
                      <span className="font-semibold text-red-600">{solution.power}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-500">Économies</span>
                      <span className="font-semibold text-green-600">{solution.savings}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-600 text-white p-4 text-center">
                  <button className="font-semibold hover:underline">
                    Demander un devis →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'étude de faisabilité à la maintenance, nous vous accompagnons à chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit Énergétique', desc: 'Analyse de vos besoins et consommation' },
              { step: '02', title: 'Étude Technique', desc: 'Dimensionnement et conception sur mesure' },
              { step: '03', title: 'Installation', desc: 'Mise en œuvre par nos équipes certifiées' },
              { step: '04', title: 'Maintenance', desc: 'Suivi et maintenance préventive' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-200"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Energy;