import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Wallet, ArrowRight, Cpu, Globe, Key, RefreshCw, Settings, Smartphone, Users, Zap } from 'lucide-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CryptoTicker } from './components/CryptoTicker';

const queryClient = new QueryClient();

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, rotateY: 10 }}
    className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl transform perspective-1000"
  >
    <Icon className="w-12 h-12 text-green-400 mb-4" />
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-b from-dark-green-900 to-dark-green-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-green-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <CryptoTicker />
        
        <header className="container mx-auto px-4 py-20 text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600"
          >
            Trezor Suite: The Future of Crypto Security
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-200 mb-8"
          >
            Your comprehensive guide to mastering <a href="https://trezor.io/start" className="text-green-400 hover:underline">Trezor.io/start</a>
          </motion.p>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-white mb-12 border-l-4 border-green-400 pl-4"
            >
              What is Trezor Suite?
            </motion.h2>
            <div className="prose prose-lg prose-invert max-w-none mb-12">
              <p className="text-gray-200 text-xl leading-relaxed">
                Trezor Suite represents the next evolution in cryptocurrency management and security. Available at <a href="https://trezor.io/start" className="text-green-400 hover:underline">Trezor.io/start</a>, it's not just a wallet interface – it's a complete cryptocurrency command center that combines military-grade security with an intuitive user experience. The Suite transforms how you interact with your digital assets, making complex cryptocurrency operations accessible while maintaining the highest security standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <FeatureCard 
                icon={Shield}
                title="Uncompromising Security"
                description="Your private keys never leave your Trezor device, ensuring complete protection of your digital assets with military-grade encryption."
              />
              <FeatureCard 
                icon={Zap}
                title="Lightning Fast"
                description="Experience instant transactions and real-time portfolio updates with Trezor Suite's optimized performance."
              />
              <FeatureCard 
                icon={Globe}
                title="Universal Access"
                description="Manage your crypto assets from anywhere in the world with Trezor Suite's cross-platform compatibility."
              />
            </div>
          </section>

          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-white mb-12 border-l-4 border-green-400 pl-4"
            >
              Core Features of Trezor Suite
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Key}
                title="Advanced Security"
                description="Multi-factor authentication, encrypted backup, and secure chip technology protect your assets."
              />
              <FeatureCard 
                icon={RefreshCw}
                title="Real-Time Updates"
                description="Live market data, instant transaction notifications, and automatic firmware updates."
              />
              <FeatureCard 
                icon={Users}
                title="Multi-Account Support"
                description="Manage multiple cryptocurrency accounts with distinct security policies and access controls."
              />
              <FeatureCard 
                icon={Cpu}
                title="Hardware Integration"
                description="Seamless connection with Trezor hardware wallets for maximum security and convenience."
              />
              <FeatureCard 
                icon={Settings}
                title="Custom Configuration"
                description="Personalize security settings, transaction limits, and notification preferences."
              />
              <FeatureCard 
                icon={Smartphone}
                title="Mobile Compatibility"
                description="Access your portfolio on the go with full mobile device support and synchronization."
              />
            </div>
          </section>

          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-white mb-12 border-l-4 border-green-400 pl-4"
            >
              Getting Started with Trezor Suite
            </motion.h2>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <ol className="space-y-8">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-dark-green-900 font-bold">1</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Download and Install</h3>
                    <p className="text-gray-300">Visit <a href="https://trezor.io/start" className="text-green-400 hover:underline">Trezor.io/start</a> to download the latest version of Trezor Suite for your operating system.</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-dark-green-900 font-bold">2</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Connect Your Device</h3>
                    <p className="text-gray-300">Connect your Trezor hardware wallet to your computer using the provided USB cable.</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-dark-green-900 font-bold">3</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Initial Setup</h3>
                    <p className="text-gray-300">Follow the on-screen instructions to set up your device and create your wallet.</p>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-400 text-dark-green-900 font-bold">4</span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Secure Your Recovery Seed</h3>
                    <p className="text-gray-300">Write down your recovery seed phrase and store it in a safe place. Never store it digitally or share it with anyone.</p>
                  </div>
                </motion.li>
              </ol>
            </div>
          </section>

          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-white mb-12 border-l-4 border-green-400 pl-4"
            >
              Advanced Security Features
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Hardware Security</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Secure Element Chip
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-green-400" />
                    PIN Protection
                  </li>
                  <li className="flex items-center gap-2">
                    <Key className="w-5 h-5 text-green-400" />
                    Offline Private Keys
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Software Security</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-green-400" />
                    Automatic Updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-400" />
                    Multi-Signature Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-green-400" />
                    Custom Security Policies
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-white mb-12 border-l-4 border-green-400 pl-4"
            >
              Why Choose Trezor Suite?
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">For Beginners</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-green-400" />
                    <span>Intuitive interface designed for easy navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-green-400" />
                    <span>Step-by-step guides for all major operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-green-400" />
                    <span>24/7 customer support and extensive documentation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">For Advanced Users</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-green-400" />
                    <span>Advanced trading features and custom scripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-green-400" />
                    <span>API integration capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 mt-1 text-green-400" />
                    <span>Multiple account types and security levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-dark-green-900/50 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
              <p className="text-gray-300 mb-8">
                Start your journey to secure cryptocurrency management today at{' '}
                <a href="https://trezor.io/start" className="text-green-400 hover:underline">Trezor.io/start</a>
              </p>
              <a 
                href="https://trezor.io/start"
                className="inline-block bg-green-400 text-dark-green-900 px-8 py-4 rounded-full font-bold hover:bg-green-300 transition-colors duration-300"
              >
                Get Started Now
              </a>
            </motion.div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;