import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Users,
  MessageSquare,
  Headphones,
  Globe,
  ArrowRight,
  Calendar
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeContact, setActiveContact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContact((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Appelez-nous',
      info: '+227 XX XX XX XX',
      subInfo: 'Lun - Ven: 8h - 18h',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Écrivez-nous',
      info: 'contact@nextcom.ne',
      subInfo: 'Réponse sous 24h',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visitez-nous',
      info: 'Quartier Plateau',
      subInfo: 'Niamey, Niger',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'En ligne',
      info: 'Support 24/7',
      subInfo: 'Chat en direct',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const services = [
    'Télécommunications',
    'Énergies Renouvelables',
    'Technologies Numériques',
    'Consultation & Audit',
    'Formation Technique',
    'Autre'
  ];

  const departments = [
    { 
      name: 'Service Commercial', 
      description: 'Devis et informations produits',
      icon: Users,
      email: 'commercial@nextcom.ne'
    },
    { 
      name: 'Support Technique', 
      description: 'Assistance et dépannage',
      icon: Headphones,
      email: 'support@nextcom.ne'
    },
    { 
      name: 'Service Client', 
      description: 'Questions générales',
      icon: MessageSquare,
      email: 'service@nextcom.ne'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
          {/* Animated contact icons */}
          {[Phone, Mail, MapPin, Globe].map((Icon, index) => (
            <Icon
              key={index}
              className="absolute w-24 h-24 text-white/10 animate-pulse"
              style={{
                left: `${15 + index * 20}%`,
                top: `${20 + (index % 2) * 40}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + index * 0.3}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
              Contactez-nous
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Notre équipe d'experts est à votre écoute pour vous accompagner dans tous vos projets technologiques et énergétiques.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full opacity-50 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Plusieurs Façons de Nous Contacter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le moyen qui vous convient le mieux pour entrer en contact avec nos équipes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group text-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 p-8 ${
                  activeContact === index ? 'ring-4 ring-blue-200 scale-105' : ''
                }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-gradient-to-r ${method.gradient}`}></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900">
                    {method.title}
                  </h3>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                    {method.info}
                  </div>
                  
                  <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {method.subInfo}
                  </div>

                  <button className={`mt-6 px-6 py-2 bg-gradient-to-r ${method.gradient} text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Contacter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold ml-4 text-gray-800">Envoyez-nous un message</h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Entreprise</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service concerné</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet ou vos besoins..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
              
              {/* Form background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl opacity-20 blur-xl"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-800">Horaires d'ouverture</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-semibold text-gray-800">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Samedi</span>
                    <span className="font-semibold text-gray-800">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="font-semibold text-red-500">Fermé</span>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Prendre rendez-vous
                </button>
              </div>

              {/* Departments */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Services spécialisés</h3>
                {departments.map((dept, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <dept.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{dept.name}</h4>
                        <p className="text-sm text-gray-600">{dept.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 font-medium">{dept.email}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Notre Localisation</h3>
                  <p className="text-blue-200 mb-4">Quartier Plateau, Niamey, Niger</p>
                  <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300">
                    Voir sur la carte
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

export default ContactPage;