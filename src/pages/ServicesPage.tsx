import React, { useState } from 'react';
import { 
  Wifi, 
  Zap, 
  Smartphone, 
  Radio, 
  Eye, 
  Phone, 
  Shield, 
  Sun, 
  Battery, 
  Droplets, 
  Zap as ZapIcon, 
  Calculator, 
  Code, 
  Cpu, 
  Lock, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('telecoms');

  const services = {
    telecoms: {
      title: 'Télécommunications',
      subtitle: 'Connectivité stable, rapide et abordable pour tous',
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-50 to-blue-100',
      icon: Wifi,
      services: [
        {
          icon: Radio,
          title: 'Infrastructures Télécoms',
          description: 'Déploiement de tours relais, pylônes, fibre optique et réseaux sans fil pour une couverture optimale.',
          features: ['Tours relais haute performance', 'Installation fibre optique', 'Réseaux sans fil sécurisés', 'Maintenance préventive']
        },
        {
          icon: Eye,
          title: 'Villes Intelligentes',
          description: 'Systèmes de vidéosurveillance connectés et capteurs urbains pour une gestion moderne des villes.',
          features: ['Vidéosurveillance IP', 'Capteurs environnementaux', 'Éclairage intelligent', 'Gestion du trafic']
        },
        {
          icon: Phone,
          title: 'Accès Internet & Téléphonie',
          description: 'Solutions d\'accès Internet résidentiel et professionnel, services VoIP et communication unifiée.',
          features: ['Internet haut débit', 'Solutions VoIP', 'Téléphonie d\'entreprise', 'Communication unifiée']
        },
        {
          icon: Shield,
          title: 'Solutions Entreprises',
          description: 'VPN sécurisés, communication unifiée et solutions télécoms sur mesure pour les entreprises.',
          features: ['VPN d\'entreprise', 'Réseaux privés', 'Solutions sur mesure', 'Support technique 24/7']
        }
      ]
    },
    energy: {
      title: 'Énergies Renouvelables',
      subtitle: 'Solutions durables adaptées aux réalités locales',
      color: 'green',
      gradient: 'from-green-600 to-green-700',
      bgGradient: 'from-green-50 to-green-100',
      icon: Zap,
      services: [
        {
          icon: Sun,
          title: 'Systèmes Solaires Photovoltaïques',
          description: 'Kits solaires domestiques, solutions pour PME et centrales hybrides pour tous vos besoins énergétiques.',
          features: ['Kits solaires résidentiels', 'Solutions PME', 'Centrales hybrides', 'Monitoring intelligent']
        },
        {
          icon: Battery,
          title: 'Stockage & Secours',
          description: 'Batteries haute performance et onduleurs pour assurer une alimentation continue et fiable.',
          features: ['Batteries lithium-ion', 'Onduleurs professionnels', 'Systèmes UPS', 'Gestion intelligente']
        },
        {
          icon: Droplets,
          title: 'Pompage Solaire',
          description: 'Systèmes de pompage solaire pour l\'agriculture et l\'approvisionnement en eau potable.',
          features: ['Pompes solaires agricoles', 'Systèmes d\'irrigation', 'Pompage eau potable', 'Maintenance préventive']
        },
        {
          icon: ZapIcon,
          title: 'Micro-réseaux & Électrification',
          description: 'Développement de micro-réseaux et électrification rurale pour l\'accès universel à l\'énergie.',
          features: ['Micro-réseaux intelligents', 'Électrification rurale', 'Réseaux isolés', 'Gestion automatisée']
        },
        {
          icon: Calculator,
          title: 'Audit & Conseil Énergétique',
          description: 'Services d\'audit énergétique et conseil pour optimiser votre consommation et vos coûts.',
          features: ['Audit énergétique complet', 'Conseil en efficacité', 'Études de faisabilité', 'Formation technique']
        }
      ]
    },
    tech: {
      title: 'Technologies Numériques',
      subtitle: 'Innovation technologique pour la transformation digitale',
      color: 'orange',
      gradient: 'from-orange-600 to-orange-700',
      bgGradient: 'from-orange-50 to-orange-100',
      icon: Smartphone,
      services: [
        {
          icon: Code,
          title: 'Développement Logiciels',
          description: 'Applications web et mobiles, systèmes de gestion sur mesure pour digitaliser vos processus.',
          features: ['Applications web modernes', 'Apps mobiles natives', 'Systèmes de gestion', 'APIs personnalisées']
        },
        {
          icon: Cpu,
          title: 'IoT & Systèmes Intelligents',
          description: 'Objets connectés, capteurs agricoles et solutions domotiques pour un environnement intelligent.',
          features: ['Capteurs IoT agricoles', 'Domotique intelligente', 'Monitoring environnemental', 'Solutions connectées']
        },
        {
          icon: Lock,
          title: 'Cybersécurité',
          description: 'Protection des données, audits de sécurité et solutions de cybersécurité pour votre entreprise.',
          features: ['Audit de sécurité', 'Protection des données', 'Pare-feu avancés', 'Formation sécurité']
        },
        {
          icon: BookOpen,
          title: 'Formations Techniques',
          description: 'Formations en programmation, cybersécurité et énergies renouvelables pour développer les compétences.',
          features: ['Formation programmation', 'Cybersécurité', 'Énergies renouvelables', 'Certifications']
        }
      ]
    }
  };

  const tabs = [
    { id: 'telecoms', label: 'Télécommunications', icon: Wifi },
    { id: 'energy', label: 'Énergies Renouvelables', icon: Zap },
    { id: 'tech', label: 'Technologies Numériques', icon: Smartphone }
  ];

  const currentService = services[activeTab as keyof typeof services];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 opacity-10 transform rotate-45 animate-pulse"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 rounded-lg"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
              Nos Services
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Découvrez notre gamme complète de solutions intégrées dans les trois domaines d'excellence de NEXTCOM S.A.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12 bg-white shadow-lg sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-2xl p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${services[tab.id as keyof typeof services].gradient} text-white shadow-lg`
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className={`py-20 bg-gradient-to-br ${currentService.bgGradient} relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className={`absolute top-10 right-10 w-64 h-64 bg-${currentService.color}-300 rounded-full opacity-20 blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-10 left-10 w-64 h-64 bg-${currentService.color}-400 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-1000`}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                <currentService.icon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {currentService.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentService.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentService.services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${currentService.gradient}`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-${currentService.color}-100 text-${currentService.color}-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className={`absolute inset-0 bg-${currentService.color}-400 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300`}></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center group/feature">
                        <CheckCircle className={`w-5 h-5 mr-3 text-${currentService.color}-500 group-hover/feature:scale-110 transition-transform duration-200`} />
                        <span className="text-gray-700 text-sm group-hover/feature:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <button className={`flex-1 py-2 px-4 bg-gradient-to-r ${currentService.gradient} text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      En savoir plus
                    </button>
                    <button className={`p-2 border-2 border-${currentService.color}-200 text-${currentService.color}-600 rounded-lg hover:bg-${currentService.color}-50 transition-all duration-300 transform hover:scale-105`}>
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Notre Processus
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Une approche méthodique pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', description: 'Étude approfondie de vos besoins et contraintes' },
              { step: '02', title: 'Conception', description: 'Développement de solutions sur mesure' },
              { step: '03', title: 'Implémentation', description: 'Déploiement professionnel et sécurisé' },
              { step: '04', title: 'Support', description: 'Maintenance et support continu' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Besoin d'une Solution Personnalisée ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nos experts sont prêts à étudier votre projet et vous proposer la solution la plus adaptée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center justify-center">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;