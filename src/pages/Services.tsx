import React from 'react';
import { Globe, Smartphone, Palette, Code, Database, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Sites web modernes, rapides et responsive',
      features: [
        'Sites vitrine et portfolios',
        'Applications web complexes',
        'E-commerce et marketplaces',
        'Systèmes de gestion (CRM, ERP)',
        'Optimisation SEO',
        'Hébergement et maintenance'
      ],
      technologies: ['React', 'Vue.js', 'Next.js', 'Node.js', 'TypeScript'],
      price: 'À partir de 500€',
      duration: '2-8 semaines'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Apps natives et cross-platform performantes',
      features: [
        'Applications iOS et Android',
        'Apps cross-platform',
        'Interface utilisateur intuitive',
        'Intégration API et services',
        'Publication sur les stores',
        'Maintenance et mises à jour'
      ],
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      price: 'À partir de 800€',
      duration: '4-12 semaines'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Interfaces élégantes et expériences utilisateur optimales',
      features: [
        'Recherche utilisateur',
        'Wireframes et prototypes',
        'Design d\'interface moderne',
        'Design system et guidelines',
        'Tests d\'utilisabilité',
        'Optimisation conversion'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
      price: 'À partir de 300€',
      duration: '1-4 semaines'
    },
    {
      icon: Code,
      title: 'Développement Backend',
      description: 'APIs robustes et architectures scalables',
      features: [
        'APIs REST et GraphQL',
        'Bases de données optimisées',
        'Architecture microservices',
        'Authentification et sécurité',
        'Intégrations tierces',
        'Documentation technique'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      price: 'À partir de 400€',
      duration: '2-6 semaines'
    },
    {
      icon: Database,
      title: 'Consulting Technique',
      description: 'Conseils et audits pour optimiser vos projets',
      features: [
        'Audit de code et architecture',
        'Choix technologiques',
        'Optimisation performance',
        'Stratégie de développement',
        'Formation équipes',
        'Accompagnement projet'
      ],
      technologies: ['Analyse', 'Stratégie', 'Formation', 'Audit'],
      price: 'À partir de 100€/h',
      duration: 'Variable'
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: 'Suivi continu et évolutions de vos applications',
      features: [
        'Maintenance corrective',
        'Mises à jour sécurité',
        'Évolutions fonctionnelles',
        'Monitoring et alertes',
        'Support technique',
        'Sauvegardes automatiques'
      ],
      technologies: ['Monitoring', 'DevOps', 'CI/CD', 'Cloud'],
      price: 'À partir de 50€/mois',
      duration: 'Continu'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Découverte',
      description: 'Analyse de vos besoins et définition du cahier des charges',
      icon: Users
    },
    {
      step: '02',
      title: 'Conception',
      description: 'Design et architecture technique de la solution',
      icon: Palette
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Réalisation avec méthodologie agile et tests continus',
      icon: Code
    },
    {
      step: '04',
      title: 'Livraison',
      description: 'Déploiement, formation et accompagnement au lancement',
      icon: Zap
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '500€',
      description: 'Parfait pour débuter',
      features: [
        'Site vitrine 5 pages',
        'Design responsive',
        'Optimisation SEO de base',
        'Formulaire de contact',
        '1 mois de support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '1200€',
      description: 'Pour les entreprises',
      features: [
        'Application web complète',
        'Interface d\'administration',
        'Base de données',
        'API personnalisée',
        '3 mois de support',
        'Formation incluse'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      description: 'Solutions sur mesure',
      features: [
        'Architecture complexe',
        'Intégrations multiples',
        'Sécurité avancée',
        'Support prioritaire',
        'Maintenance continue',
        'Évolutions illimitées'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <Code className="h-6 w-6" />
                <span className="font-semibold">Mes Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Solutions
                <span className="text-red-600 block">
                  Numériques
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Je propose une gamme complète de services pour donner vie à vos projets numériques, 
                du concept à la réalisation et au-delà.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Projets livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">30+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Temps de réponse</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services Détaillés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque service est conçu pour répondre à des besoins spécifiques avec une approche personnalisée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 mb-6">
                    <service.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Inclus :</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{service.price}</span>
                    <span>{service.duration}</span>
                  </div>
                </div>
                
                <div className="bg-red-600 text-white p-4 text-center">
                  <button className="font-semibold hover:underline">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mon Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:scale-110 transition-transform duration-300 mb-4">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 transition-colors duration-300">
                    <step.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-red-200"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Packages Populaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions pré-configurées pour démarrer rapidement votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-red-600' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-b-lg text-sm font-medium">
                    Populaire
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                  }`}>
                    Choisir ce package
                  </button>
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
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Demander un devis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Planifier un appel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;