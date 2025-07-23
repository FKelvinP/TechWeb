import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Phone, MessageCircle, Mail, Clock, Headphones, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Support = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀",
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue para nossa central",
      info: "0800 123 4567",
      available: "24 horas por dia",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat direto no WhatsApp",
      info: "(11) 99999-9999",
      available: "24 horas por dia",
      color: "from-green-600 to-green-500"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua dúvida por e-mail",
      info: "suporte@netspeedpro.com.br",
      available: "Resposta em até 2h",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const faqItems = [
    {
      question: "Como verificar a velocidade da minha internet?",
      answer: "Você pode usar nosso teste de velocidade gratuito ou acessar sites como speedtest.net para verificar sua velocidade atual."
    },
    {
      question: "Minha internet está lenta, o que fazer?",
      answer: "Primeiro, reinicie seu modem. Se o problema persistir, verifique se há muitos dispositivos conectados ou entre em contato conosco."
    },
    {
      question: "Como alterar meu plano?",
      answer: "Você pode alterar seu plano através da área do cliente ou entrando em contato com nossa central de atendimento."
    },
    {
      question: "Qual o prazo para instalação?",
      answer: "A instalação é realizada em até 48 horas após a contratação, dependendo da disponibilidade técnica na sua região."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Suporte - NetSpeed Pro</title>
        <meta name="description" content="Suporte técnico 24 horas da NetSpeed Pro. Entre em contato por telefone, WhatsApp ou e-mail. Estamos aqui para ajudar você." />
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
                <Headphones className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="gradient-text">Suporte 24h</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Estamos sempre prontos para ajudar você com qualquer dúvida ou problema
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Como Entrar em Contato</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Escolha a forma mais conveniente para você
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 card-hover text-center group cursor-pointer"
                  onClick={handleContactClick}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-lg font-semibold gradient-text mb-2">{method.info}</div>
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {method.available}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Emergência?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Para problemas urgentes que afetam sua conexão, ligue agora mesmo
              </p>
              <Button 
                onClick={handleContactClick}
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full text-xl"
              >
                <Phone className="h-6 w-6 mr-2" />
                0800 123 4567
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Perguntas Frequentes</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Encontre respostas rápidas para as dúvidas mais comuns
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Envie sua Mensagem</h2>
                  <p className="text-gray-300">Descreva seu problema e entraremos em contato</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Assunto
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                      <option value="">Selecione o assunto</option>
                      <option value="tecnico">Problema Técnico</option>
                      <option value="financeiro">Questão Financeira</option>
                      <option value="comercial">Informação Comercial</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                      placeholder="Descreva detalhadamente seu problema ou dúvida..."
                    ></textarea>
                  </div>

                  <Button 
                    onClick={handleContactClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;