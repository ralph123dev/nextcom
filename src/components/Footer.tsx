import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">NEXTCOM S.A.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leader de la convergence entre télécommunications, énergie propre et innovation technologique en Afrique.
            </p>
            <img src="logo.PNG" alt="" />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#h" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/telecoms" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Télécommunications
                </Link>
              </li>
              <li>
                <Link to="/energy" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Énergies Renouvelables
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Technologies Numériques
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Formations Techniques
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Actualités
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-500">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                 Douala<br />
                 Cameroun
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+237 676 19 30 85</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact.nextcom@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NEXTCOM S.A. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;