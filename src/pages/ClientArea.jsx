import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { User, CreditCard, Wifi, Settings, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ClientArea = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀",
    });
  };

  const features = [
    {
      icon: User,
      title: "Meus Dados",
      description: "Gerencie suas informações pessoais",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "Faturas",
      description: "Visualize e pague suas contas",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Wifi,
      title: "Minha Conexão",
      description: "Monitore sua velocidade e uso",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Configurações",
      description: "Ajuste suas preferências",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Acesse seus documentos",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Phone,
      title: "Suporte",
      description: "Entre em contato conosco",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Área do Cliente - NetSpeed Pro</title>
        <meta name="description" content="Acesse sua área do cliente NetSpeed Pro. Gerencie suas faturas, monitore sua conexão e configure seus serviços." />
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
                <User className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="gradient-text">Área do Cliente</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Gerencie sua conta e serviços de forma simples e rápida
              </p>
            </motion.div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Faça seu Login</h2>
                  <p className="text-gray-300">Acesse sua conta para gerenciar seus serviços</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CPF ou E-mail
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Digite seu CPF ou e-mail"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Digite sua senha"
                    />
                  </div>

                  <Button 
                    onClick={handleFeatureClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl"
                  >
                    Entrar
                  </Button>

                  <div className="text-center space-y-2">
                    <button 
                      onClick={handleFeatureClick}
                      className="text-cyan-400 hover:text-cyan-300 text-sm"
                    >
                      Esqueci minha senha
                    </button>
                    <div className="text-gray-400 text-sm">
                      Não tem conta? 
                      <button 
                        onClick={handleFeatureClick}
                        className="text-cyan-400 hover:text-cyan-300 ml-1"
                      >
                        Cadastre-se aqui
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
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
                <span className="gradient-text">O que você pode fazer</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tenha controle total sobre seus serviços
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 card-hover group cursor-pointer"
                  onClick={handleFeatureClick}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
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
                <span className="gradient-text">Precisa de Ajuda?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nossa equipe está disponível 24 horas para te ajudar
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleFeatureClick}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 py-4 rounded-full"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Falar com Suporte
                </Button>
                <Button 
                  onClick={handleFeatureClick}
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full"
                >
                  Central de Ajuda
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientArea;