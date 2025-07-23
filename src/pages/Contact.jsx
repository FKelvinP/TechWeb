import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "0800 123 4567",
      description: "Ligue grátis de qualquer lugar",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      description: "Chat direto no WhatsApp",
      color: "from-green-600 to-green-500"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@netspeedpro.com.br",
      description: "Envie sua mensagem",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000",
      description: "São Paulo - SP, 01310-100",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 18h" },
    { day: "Sábado", hours: "8h às 14h" },
    { day: "Domingo", hours: "Plantão 24h" },
    { day: "Suporte Técnico", hours: "24h por dia" }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - NetSpeed Pro</title>
        <meta name="description" content="Entre em contato com a NetSpeed Pro. Telefone: 0800 123 4567, WhatsApp: (11) 99999-9999. Estamos na Av. Paulista, 1000 - São Paulo." />
      </Helmet>

      <div className="pt-20 min-h-screen">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-b from-blue-900/20 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 pulse-glow">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="gradient-text">Fale Conosco</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Estamos aqui para ajudar você. Entre em contato através dos nossos canais
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 card-hover text-center group cursor-pointer"
                  onClick={handleContactClick}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <div className="text-cyan-400 font-semibold mb-1">{info.info}</div>
                  <p className="text-gray-300 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Business Hours */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Envie uma Mensagem</h2>
                  <p className="text-gray-300">Preencha o formulário e entraremos em contato</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Rua, número, bairro, cidade"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Interesse
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                      <option value="">Selecione seu interesse</option>
                      <option value="plano-basico">Plano Básico - 50 Mbps</option>
                      <option value="plano-turbo">Plano Turbo - 100 Mbps</option>
                      <option value="plano-max">Plano Max - 200 Mbps</option>
                      <option value="empresarial">Plano Empresarial</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Conte-nos mais sobre suas necessidades..."
                    ></textarea>
                  </div>

                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </motion.div>

              {/* Business Hours & Map */}
              <div className="space-y-8">
                {/* Business Hours */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-3xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Horário de Funcionamento</h3>
                  </div>

                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                        <span className="text-gray-300">{schedule.day}</span>
                        <span className="text-cyan-400 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-green-400 font-semibold">Suporte técnico disponível 24h</span>
                    </div>
                  </div>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-3xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nossa Localização</h3>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 text-center">
                    <img  alt="Mapa da localização da NetSpeed Pro" className="w-full h-48 object-cover rounded-lg mb-4" src="https://images.unsplash.com/photo-1601995826089-b95985c117f5" />
                    <div className="text-white">
                      <p className="font-semibold">NetSpeed Pro</p>
                      <p className="text-gray-300">Av. Paulista, 1000</p>
                      <p className="text-gray-300">São Paulo - SP, 01310-100</p>
                    </div>
                    <Button 
                      onClick={handleContactClick}
                      className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-full"
                    >
                      Ver no Google Maps
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Precisa de Atendimento Rápido?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nossa equipe está pronta para atender você agora mesmo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleContactClick}
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-8 py-4 rounded-full"
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  WhatsApp Agora
                </Button>
                <Button 
                  onClick={handleContactClick}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-full"
                >
                  <Phone className="h-6 w-6 mr-2" />
                  Ligar Grátis
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;