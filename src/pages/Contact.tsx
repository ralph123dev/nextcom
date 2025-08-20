import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['123 Avenue de l\'Innovation', 'Dakar, Sénégal', 'BP 12345'],
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+237 676 19 30 85', '+237 676 19 30 85', 'Urgences: +237 676 19 30 85'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@nextcom.sn', 'commercial@nextcom.sn', 'support@nextcom.sn'],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h00 - 18h00', 'Sam: 9h00 - 13h00', 'Support 24/7 disponible'],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const services = [
    'Télécommunications',
    'Énergies Renouvelables',
    'Technologies Numériques',
    'Formations Techniques',
    'Audit et Conseil',
    'Maintenance et Support'
  ];

  const offices = [
    {
      city: 'Cameroun',
      country: 'Douala',
      address: '#',
      phone: '+237 676 19 30 85',
      type: 'Siège Social'
    },
    {
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      address: '456 Boulevard de la Technologie',
      phone: '+237 676 19 30 85',
      type: 'Bureau Régional'
    },
    {
      city: 'Bamako',
      country: 'Mali',
      address: '789 Rue de l\'Innovation',
      phone: '+237 676 19 30 85',
      type: 'Antenne Locale'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <MessageCircle className="h-6 w-6" />
                <span className="font-semibold">Contactez-nous</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Parlons de Votre
                <span className="text-red-600 block">
                  Projet
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Notre équipe d'experts est à votre disposition pour étudier vos besoins et 
                vous proposer des solutions sur mesure adaptées à vos objectifs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Planifier un rendez-vous</span>
              </button>
              <button
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => window.location.href = 'tel:+237676193085'}
              >
                <Phone className="h-5 w-5" />
                <span>Appel d'urgence</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un Message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service d'intérêt
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Informations de Contact
                </h2>
                <p className="text-gray-600">
                  Plusieurs moyens de nous joindre selon vos préférences et urgences.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <button className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Réserver une consultation</span>
                  </button>
                  <button className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Demander une démonstration</span>
                  </button>
                  <button className="w-full bg-white text-red-600 py-3 px-4 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                    onClick={() => window.location.href = 'tel:+237676193085'}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Support technique urgent</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Bureaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Présents dans plusieurs pays d'Afrique de l'Ouest pour mieux vous servir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-32 bg-gradient-to-br from-red-400 to-red-600 relative">
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-medium">{office.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{office.city}</h3>
                  <p className="text-red-600 font-medium mb-4">{office.country}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{office.phone}</span>
                    </div>
                  </div>
                  
                  <button
                    className="w-full mt-6 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
                    onClick={() => window.location.href = `tel:${office.phone.replace(/\s+/g, '')}`}
                  >
                    Contacter ce bureau
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nous Trouver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre siège social est situé au cœur de Dakar, facilement accessible.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
            <iframe
              title="Google Maps Dakar"
              src="https://www.google.com/maps?q=123+Avenue+de+l'Innovation,+Dakar&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;