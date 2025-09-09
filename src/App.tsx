import React, { useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Users, 
  Star, 
  Mail, 
  Phone, 
  MessageCircle,
  Bitcoin,
  Zap,
  Lock,
  Globe,
  ArrowRight,
  CheckCircle,
  Eye,
  Award,
  Target
} from 'lucide-react';

const CryptoExchangeLanding = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Registration:', { name, email });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 border border-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 border border-yellow-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/3 w-48 h-48 border border-green-400/30 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <Bitcoin className="w-16 h-16 text-yellow-400 mr-4" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              CryptoTrade Pro
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Платформа для торгівлі криптовалютами, створена українськими розробниками. 
            Професійні інструменти, надійна безпека, швидкі транзакції.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-full text-black font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
              Зареєструватися зараз
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 rounded-full text-blue-400 font-bold text-lg transition-all duration-300">
              Демо версія
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">₿500M+</div>
              <div className="text-sm text-gray-400">Обсяг торгів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">150K+</div>
              <div className="text-sm text-gray-400">Активних користувачів</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">99.9%</div>
              <div className="text-sm text-gray-400">Час роботи</div>
            </div>
          </div>
        </div>
      </header>

      {/* About Platform Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Про нашу платформу
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CryptoTrade Pro — це платформа для торгівлі криптовалютами, 
              яка підходить як новачкам, так і досвідченим трейдерам.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Максимальна безпека</h3>
              <p className="text-gray-300">
                Система захисту з кількома рівнями, холодне зберігання коштів, 
                двофакторна автентифікація та страхування депозитів.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Професійні інструменти</h3>
              <p className="text-gray-300">
                Детальна аналітика, графіки TradingView, автоматична торгівля 
                та сигнали від досвідчених трейдерів.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <Zap className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-4">Швидкість виконання</h3>
              <p className="text-gray-300">
                Швидке виконання ордерів, низькі комісії, 
                підтримка більше 200 криптовалют.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Функціональність</h2>
            <p className="text-xl text-gray-300">Все необхідне для торгівлі в одному місці</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-black mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Спот торгівля</h3>
              <p className="text-gray-400">Купівля і продаж криптовалют за поточною ринковою ціною</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ф'ючерси</h3>
              <p className="text-gray-400">Торгівля деривативами з кредитним плечем до x125</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Мобільний додаток</h3>
              <p className="text-gray-400">Торгуйте на ходу з нашим додатком для iOS і Android</p>
            </div>

            <div className="group text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безпека</h3>
              <p className="text-gray-400">Багатофакторна автентифікація та холодне зберігання</p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Аналітичні інструменти</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Розширені графіки TradingView</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Технічні індикатори та осцилятори</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Алгоритмічна торгівля</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Копітрейдинг</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gray-900 p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-yellow-400 font-bold">BTC/USDT</span>
                    <span className="text-green-400 text-2xl font-bold">+12.5%</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg flex items-end justify-between p-2">
                    {[40, 65, 80, 45, 90, 75, 95].map((height, i) => (
                      <div key={i} className="bg-green-400 w-4 rounded-sm" style={{height: `${height}%`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Успішні трейдери</h2>
            <p className="text-xl text-gray-300">Історії успіху наших користувачів</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
                  O
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Олександр К.</h4>
                  <p className="text-gray-400 text-sm">Професійний трейдер</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "За півроку торгівлі на платформі збільшив портфель на 340%. 
                Добре працюють інструменти аналізу та швидко виконуються ордери."
              </p>
              <div className="text-green-400 font-bold text-xl">+340% прибуток</div>
            </div>

            <div className="bg-gray-800/70 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-black font-bold">
                  М
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Марина Л.</h4>
                  <p className="text-gray-400 text-sm">Інвестор</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Почала з $500 і завдяки копітрейдингу вже маю $2400. 
                Платформа добре підходить для новачків."
              </p>
              <div className="text-green-400 font-bold text-xl">+380% зростання</div>
            </div>

            <div className="bg-gray-800/70 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  А
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Андрій С.</h4>
                  <p className="text-gray-400 text-sm">DeFi трейдер</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Хороша платформа! Низькі комісії, великий вибір монет 
                та швидка підтримка клієнтів."
              </p>
              <div className="text-green-400 font-bold text-xl">+520% ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Registration Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Registration Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600">
              <h3 className="text-3xl font-bold mb-6 text-center">Почніть торгувати вже сьогодні</h3>
              <p className="text-gray-300 text-center mb-8">
                Зареєструйтесь за 2 хвилини та отримайте бонус $50 на перші торги
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ім'я</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 rounded-lg text-black font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Створити акаунт безкоштовно
                </button>
              </form>
              
              <div className="flex items-center justify-center mt-6 space-x-6">
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Без комісій
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Бонус $50
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Безкоштовно
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold mb-8">Контакти та підтримка</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email підтримка</h4>
                    <p className="text-gray-400">support@cryptotradepro.ua</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-500 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Телефон</h4>
                    <p className="text-gray-400">+380 44 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-500 p-3 rounded-lg mr-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Онлайн чат</h4>
                    <p className="text-gray-400">24/7 підтримка в реальному часі</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Слідкуйте за нами</h4>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors">
                    <Globe className="w-6 h-6" />
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </button>
                  <button className="bg-pink-500 hover:bg-pink-600 p-3 rounded-lg transition-colors">
                    <Users className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-800/50 to-blue-800/50 rounded-2xl border border-green-500/30">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-400 mr-3" />
                  <h4 className="text-xl font-bold">Ліцензовано в Україні</h4>
                </div>
                <p className="text-gray-300">
                  Платформа працює згідно з українським законодавством 
                  та має необхідні дозволи для надання фінансових послуг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Bitcoin className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-xl font-bold">CryptoTrade Pro</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2025 CryptoTrade Pro. Усі права захищені.
              </p>
              <p className="text-sm text-gray-500">
                Торгівля криптовалютами пов'язана з ризиками. Інвестуйте відповідально.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CryptoExchangeLanding;