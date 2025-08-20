// Fichier : src/pages/Home.tsx

import React, { useState } from 'react';
import Hero3D from '../components/Hero3D';
import { Link } from 'react-router-dom';
import { Wifi, Sun, Cpu, Target, Users, Globe, Award } from 'lucide-react';
import Modal from 'react-modal';
import Confetti from 'react-confetti';

// Lier la modal à l'élément racine de votre application pour l'accessibilité
// Assurez-vous que votre fichier HTML principal (index.html) a bien un élément avec id="root"
Modal.setAppElement('#root');

// La déclaration du composant se fait avec "const". L'export se fait à la fin.
const Home = () => {
  // État pour contrôler l'ouverture/fermeture de la popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  // État pour contrôler l'affichage de l'animation de confettis
  const [showConfetti, setShowConfetti] = useState(false);
  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  // Fonction pour ouvrir la popup
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer la popup
  const closeModal = () => {
    setIsModalOpen(false);
    setShowConfetti(false); // Arrête l'animation à la fermeture
  };

  // Gère les changements dans les champs du formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };
  
  // Gère la soumission du formulaire
  const handlePlanification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log('Consultation planifiée pour:', userInfo);

    // Déclenche l'animation de félicitations
    setShowConfetti(true);

    // Ferme la popup et arrête l'animation après 5 secondes
    setTimeout(() => {
      closeModal();
    }, 5000); 
  };

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
      {/* Affiche l'animation de confettis si showConfetti est vrai */}
      {showConfetti && <Confetti />}

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
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Demander un devis
            </Link>
            <button 
              onClick={openModal}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Planifier une consultation
            </button>
          </div>
        </div>
      </section>

      {/* --- POPUP / MODAL --- */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Planifier une consultation"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            borderRadius: '16px',
            padding: '40px',
            maxWidth: '500px',
            width: '90%'
          }
        }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Planifier une consultation</h2>
        <form onSubmit={handlePlanification}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nom complet</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              value={userInfo.name}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Adresse e-mail</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300"
          >
            Planifier
          </button>
        </form>
      </Modal>
    </div>
  );
};

// --- CORRECTION ---
// C'est cette ligne qui corrige l'erreur. Elle exporte le composant "Home"
// par défaut, ce qui permet à App.tsx de l'importer avec "import Home from ...".
export default Home;