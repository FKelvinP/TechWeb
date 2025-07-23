import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Wifi, Zap, Crown, CheckCircle, Star, Gamepad2, Video, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Plans = () => {
  const { toast } = useToast();

  const handleSubscribeClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀",
    });
  };

  const plans = [
    {
      id: 'basico',
      name: 'Plano Básico',
      icon: Wifi,
      price: '49,90',
      speed: '50',
      description: 'Ideal para redes sociais e vídeos',
      features: [
        'Velocidade de 50 Mbps',
        'Wi-Fi grátis incluído',
        'Instalação gratuita',
        'Suporte técnico 24h',
        'Sem fidelidade',
        'Modem em comodato'
      ],
      idealFor: ['Navegação básica', 'Redes sociais', 'E-mails', 'Vídeos em HD'],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      id: 'turbo',
      name: 'Plano Turbo',
      icon: Zap,
      price: '79,90',
      speed: '100',
      description: 'Perfeito para famílias e streaming',
      features: [
        'Velocidade de 100 Mbps',
        'Wi-Fi grátis incluído',
        'Instalação gratuita',
        'Suporte técnico 24h',
        'Netflix incluso por 6 meses',
        'Modem Wi-Fi 6 grátis',
        'Antivírus premium'
      ],
      idealFor: ['Streaming 4K', 'Múltiplos dispositivos', 'Home office', 'Videochamadas'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'max',
      name: 'Plano Max',
      icon: Crown,
      price: '109,90',
      speed: '200',
      description: 'Streaming + games + home office',
      features: [
        'Velocidade de 200 Mbps',
        'Wi-Fi 6E premium',
        'Instalação gratuita',
        'Suporte técnico VIP 24h',
        'Netflix + Amazon Prime inclusos',
        'Roteador mesh grátis',
        'Antivírus premium família',
        'IP fixo gratuito'
      ],
      idealFor: ['Gaming online', 'Streaming 8K', 'Trabalho profissional', 'Smart home'],
      color: 'from-yellow-500 to-orange-500',
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planos de Internet - NetSpeed Pro</title>
        <meta name="description" content="Conheça nossos planos de internet de alta velocidade. Desde 50 Mbps por R$ 49,90 até 200 Mbps por R$ 109,90. Instalação gratuita e suporte 24h." />
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
                <Wifi className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="gradient-text">Nossos Planos</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Escolha o plano ideal para suas necessidades e navegue sem limites
              </p>
            </motion.div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative glass-effect rounded-3xl p-8 card-hover ${
                    plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <Star className="h-4 w-4 mr-2" />
                        MAIS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-sm text-gray-400 mr-2">R$</span>
                      <span className="text-5xl font-black gradient-text">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/mês</span>
                    </div>
                    <div className={`speed-indicator bg-gradient-to-r ${plan.color.replace('from-', 'from-').replace('to-', 'to-')}/20 rounded-xl p-4 mb-4`}>
                      <div className="text-4xl font-black text-white">{plan.speed} Mbps</div>
                      <div className="text-sm text-gray-300">Velocidade garantida</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Incluso no plano:</h3>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Ideal para:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {plan.idealFor.map((use, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${plan.color} rounded-full mr-2`}></div>
                          {use}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={handleSubscribeClick}
                    className={`w-full font-bold py-4 rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25'
                        : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white shadow-lg`
                    }`}
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Assinar {plan.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Compare os Planos</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Veja qual plano atende melhor suas necessidades
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">1-2 Pessoas</h3>
                <p className="text-gray-300 mb-4">Uso básico e moderado</p>
                <div className="text-2xl font-bold gradient-text">Plano Básico</div>
                <div className="text-gray-400">50 Mbps</div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 text-center ring-2 ring-purple-400"
              >
                <Video className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">3-5 Pessoas</h3>
                <p className="text-gray-300 mb-4">Streaming e home office</p>
                <div className="text-2xl font-bold gradient-text">Plano Turbo</div>
                <div className="text-gray-400">100 Mbps</div>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <Gamepad2 className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">5+ Pessoas</h3>
                <p className="text-gray-300 mb-4">Gaming e uso intensivo</p>
                <div className="text-2xl font-bold gradient-text">Plano Max</div>
                <div className="text-gray-400">200 Mbps</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Ainda com dúvidas?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nossa equipe está pronta para ajudar você a escolher o plano ideal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleSubscribeClick}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full"
                >
                  Falar com Especialista
                </Button>
                <Button 
                  onClick={handleSubscribeClick}
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Plans;