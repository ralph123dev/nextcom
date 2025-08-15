import React from 'react';
import { Target, Users, Globe, Award, Lightbulb, Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous développons des solutions technologiques de pointe adaptées aux réalités locales africaines.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Nos services garantissent une qualité et une performance constantes pour tous nos clients.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Accessibilité',
      description: 'Nous rendons la technologie accessible à tous, partout en Afrique, sans exception.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Heart,
      title: 'Impact Local',
      description: 'Nous contribuons activement au développement économique et social des communautés.',
      color: 'from-red-400 to-red-600'
    }
  ];

  const team = [
    {
      name: 'Mr. Paolo kk',
      role: 'Directeur Général',
      expertise: 'Télécommunications & Stratégie',
      experience: '15+ ans',
      description: 'Expert en infrastructures télécoms avec une vision stratégique pour l\'Afrique.'
    },
    {
      name: 'Ing. Fatou NDIAYE',
      role: 'Directrice Technique',
      expertise: 'Énergies Renouvelables',
      experience: '12+ ans',
      description: 'Spécialiste en systèmes solaires et solutions énergétiques durables.'
    },
    {
      name: 'M. Ousmane KANE',
      role: 'Directeur Innovation',
      expertise: 'Technologies Numériques',
      experience: '10+ ans',
      description: 'Pionnier du développement logiciel et des solutions IoT en Afrique.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Création de NEXTCOM S.A.', description: 'Lancement avec une vision claire de convergence technologique' },
    { year: '2021', event: 'Premier déploiement télécoms', description: '50 sites télécoms déployés dans 3 régions' },
    { year: '2022', event: 'Expansion énergétique', description: '100+ installations solaires réalisées' },
    { year: '2023', event: 'Innovation numérique', description: 'Lancement de notre pôle technologies numériques' },
    { year: '2024', event: 'Leadership régional', description: 'Reconnaissance comme leader de la convergence technologique' },
    { year: '2025', event: 'Mise en sur pied des services de NextCom', description: 'En 2025, nous avons tout mis sur pied les projets en plan de NextCom' }
  ];

  const stats = [
    { number: '500+', label: 'Projets réalisés', icon: Target },
    { number: '100+', label: 'Entreprises partenaires', icon: Users },
    { number: '15', label: 'Pays d\'intervention', icon: Globe },
    { number: '50+', label: 'Certifications obtenues', icon: Award }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <Zap className="h-6 w-6" />
                <span className="font-semibold">À Propos de NEXTCOM S.A.</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pionniers de la
                <span className="text-red-600 block">
                  Convergence Technologique
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                NEXTCOM S.A. est une entreprise innovante qui opère à l'intersection de trois secteurs 
                stratégiques : les télécommunications, les énergies renouvelables et les technologies 
                numériques, avec pour mission de moderniser l'Afrique.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Contribuer activement à la modernisation des infrastructures, à l'autonomisation 
                  énergétique et à la numérisation des services en proposant des solutions locales, 
                  durables et intelligentes adaptées aux réalités africaines.
                </p>
              </div>
              
              <div className="bg-red-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Nos Objectifs</h3>
                <ul className="space-y-3">
                  {[
                    'Démocratiser l\'accès aux technologies avancées',
                    'Créer des emplois locaux qualifiés',
                    'Réduire la fracture numérique',
                    'Promouvoir l\'énergie propre et durable'
                  ].map((objective, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Être le leader local de la convergence entre les télécommunications, l'énergie 
                  propre et l'innovation technologique, en construisant des infrastructures 
                  intelligentes et accessibles pour les populations, les entreprises et les 
                  collectivités africaines.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Impact 2030</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1M+</div>
                    <div className="text-sm opacity-90">Personnes connectées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-sm opacity-90">Emplois créés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50%</div>
                    <div className="text-sm opacity-90">Réduction CO₂</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Énergie renouvelable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions dans notre mission 
              de transformation technologique de l'Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
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

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les étapes clés de notre croissance et nos réalisations marquantes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés qui dirigent notre vision de transformation technologique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-red-600 font-semibold mb-1">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-4">{member.expertise} • {member.experience}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
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
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Ensemble, construisons l'Afrique de demain avec des technologies innovantes, 
            durables et accessibles à tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Devenir partenaire
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Nous rejoindre
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;