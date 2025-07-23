import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Wifi, Zap, Shield, CreditCard, Phone, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleContractClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀",
    });
  };

  const features = [
    {
      icon: Phone,
      title: "Suporte imediato",
      description: "Atendimento 24h para resolver qualquer problema"
    },
    {
      icon: CreditCard,
      title: "Pagamento fácil",
      description: "Múltiplas formas de pagamento disponíveis"
    },
    {
      icon: Shield,
      title: "Conexão segura",
      description: "Tecnologia avançada para máxima segurança"
    }
  ];

  const plans = [
    {
      name: "Plano Essencial",
      price: "49,90",
      speed: "50",
      description: "Ideal para redes sociais e vídeos",
      features: ["Wi-Fi grátis", "Instalação gratuita", "Suporte 24h"],
      popular: false
    },
    {
      name: "Plano Turbo",
      price: "79,90",
      speed: "100",
      description: "Perfeito para famílias e streaming",
      features: ["Wi-Fi grátis", "Instalação gratuita", "Suporte 24h", "Netflix incluso"],
      popular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>NetSpeed Pro - Internet Rápida para Sua Casa</title>
        <meta name="description" content="Provedor de internet de alta velocidade com planos a partir de R$ 49,90. Conexão estável, suporte 24h e instalação gratuita." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-purple-900/40"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 pulse-glow">
                  <Wifi className="h-12 w-12 text-white" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black mb-6"
              >
                <span className="gradient-text">Internet rápida</span>
                <br />
                <span className="text-white">para sua casa!</span>
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Conecte-se ao futuro com velocidades incríveis e estabilidade garantida
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  onClick={handleContractClick}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="h-6 w-6 mr-2" />
                  Contratar Agora
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 floating">
            <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-40 right-20 floating" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
          </div>
          <div className="absolute bottom-40 left-20 floating" style={{ animationDelay: '2s' }}>
            <div className="w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Planos em Destaque</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Escolha o plano perfeito para suas necessidades
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative glass-effect rounded-2xl p-8 card-hover ${
                    plan.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Mais Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-black gradient-text">R$ {plan.price}</span>
                      <span className="text-gray-400 ml-2">/mês</span>
                    </div>
                    <div className="speed-indicator bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-3 mb-4">
                      <div className="text-3xl font-bold text-cyan-400">{plan.speed} Mbps</div>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={handleContractClick}
                    className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    Assinar Agora
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Pronto para acelerar?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Não perca mais tempo com internet lenta. Faça a mudança hoje mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/planos">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full">
                    Ver Todos os Planos
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full">
                    Falar com Especialista
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;