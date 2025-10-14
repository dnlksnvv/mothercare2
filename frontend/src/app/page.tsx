'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import ServiceCard from '@/components/ServiceCard';

// Типы для Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
    };
  }
}

export default function HomePage() {
  const [calendlyHeight, setCalendlyHeight] = useState('100vh');
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/kosyanov080620042/30min');
  const [calendlyKey, setCalendlyKey] = useState(0);

  // Service card data - focused on core doula services from logo
  const services = [
    {
      icon: '🤱',
      title: 'Birth Support',
      description: 'Continuous support during labor and delivery. Expert guidance for your birth experience.',
      features: [
        'Prenatal consultations',
        'Labor support & comfort measures',
        'Birth plan assistance',
        'Immediate postpartum care'
      ],
      bgColor: 'bg-accent'
    },
    {
      icon: '👶',
      title: 'Postpartum Care',
      description: 'Essential support in the first weeks after birth. Help with baby care, recovery, and family adjustment.',
      features: [
        'Newborn care guidance',
        'Breastfeeding support',
        'Maternal recovery assistance',
        'Family transition support'
      ],
      bgColor: 'bg-accent'
    },
    {
      icon: '🌟',
      title: 'Beyond Support',
      description: 'Ongoing support for your family journey. Comprehensive care that extends beyond birth and postpartum.',
      features: [
        'Family wellness support',
        'Parenting guidance',
        'Life transition assistance',
        'Long-term family care'
      ],
      bgColor: 'bg-accent'
    }
  ];

  // Функция для обновления URL Calendly в зависимости от темы
  const updateCalendlyUrl = () => {
    const isDoulaTheme = document.body.classList.contains('doula-theme');
    
    if (isDoulaTheme) {
      // Тема DoulaDoo - терракотовые цвета
      setCalendlyUrl('https://calendly.com/kosyanov080620042/30-minute-meeting-clone?background_color=fdf1eb&text_color=353030&primary_color=e4a081&hide_gdpr_banner=1');
    } else {
      // Оригинальная тема - голубые цвета
      setCalendlyUrl('https://calendly.com/kosyanov080620042/30min?background_color=f0f9ff&text_color=1e293b&primary_color=0ea5e9&hide_gdpr_banner=1');
    }
    
    // Принудительно перезагружаем виджет
    setCalendlyKey(prev => prev + 1);
    
    // Перезагружаем Calendly после смены темы
    setTimeout(() => {
      const widget = document.querySelector('.calendly-inline-widget');
      if (widget && window.Calendly) {
        // Очищаем предыдущий виджет
        widget.innerHTML = '';
        // Инициализируем новый
        window.Calendly.initInlineWidget({
          url: isDoulaTheme 
            ? 'https://calendly.com/kosyanov080620042/30-minute-meeting-clone?background_color=fdf1eb&text_color=353030&primary_color=e4a081&hide_gdpr_banner=1'
            : 'https://calendly.com/kosyanov080620042/30min?background_color=f0f9ff&text_color=1e293b&primary_color=0ea5e9&hide_gdpr_banner=1',
          parentElement: widget
        });
      }
    }, 300);
  };

  useEffect(() => {
    // Загружаем Calendly скрипт только один раз
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Функция для расчета оптимальной высоты Calendly
    const calculateHeight = () => {
      const windowHeight = window.innerHeight;
      const navHeight = 64; // высота навигации
      const sectionHeaderHeight = 200; // высота заголовка секции "Book a Consultation"
      const sectionPadding = 128; // отступы секции (py-16 = 64px сверху и снизу)
      const footerHeight = 100; // отступ снизу
      
      // Вычисляем доступную высоту для Calendly
      const availableHeight = windowHeight - navHeight - sectionHeaderHeight - sectionPadding - footerHeight;
      
      // Устанавливаем большую высоту для Calendly
      const finalHeight = Math.max(1000, Math.min(availableHeight, 1400));
      setCalendlyHeight(`${finalHeight}px`);
    };

    // Расчет при загрузке и при изменении размера окна
    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    // Обновляем URL Calendly при загрузке с учетом восстановленной темы
    setTimeout(() => {
      updateCalendlyUrl();
    }, 100);

    // Слушаем изменения темы
    const observer = new MutationObserver(() => {
      // Добавляем небольшую задержку для корректной работы
      setTimeout(() => {
        updateCalendlyUrl();
      }, 100);
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('resize', calculateHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <AIAssistant />

      {/* Hero Section */}
      <section id="home" className="section-padding pt-24 sm:pt-28 lg:pt-32 hero-bg">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left max-w-2xl lg:max-w-none">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight break-words">
                Professional Doula Care for {' '}
                  <span style={{color: 'var(--color-primary)'}}>Mothers</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Expert doula services supporting mothers and babies through every stage of the journey. From birth preparation to postpartum recovery and beyond.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Learn More
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl">👩‍⚕️</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-neutral-900 text-lg sm:text-xl">500+</p>
                    <p className="text-neutral-600 text-sm sm:text-base">Families supported</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl">⭐</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-neutral-900 text-lg sm:text-xl">4.9</p>
                    <p className="text-neutral-600 text-sm sm:text-base">Client rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
              <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Мама с малышом"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl -z-10 bg-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
                    <h2 className="heading-2 mb-4 lg:mb-6">
                      Our Services
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                      Core doula services: Birth • Postpartum • Beyond. Comprehensive support for your family journey.
                    </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                bgColor={service.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mother with baby"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-2 mb-4 lg:mb-6">About DoulaDoo</h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                DoulaDoo provides professional doula services for birth, postpartum, and beyond. 
                Our certified doulas offer compassionate, evidence-based support for each family.
              </p>
             
              
              <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <p className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>15+</p>
                          <p className="text-neutral-600">years of experience</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>500+</p>
                          <p className="text-neutral-600">happy families</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>99%</p>
                          <p className="text-neutral-600">positive reviews</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>24/7</p>
                          <p className="text-neutral-600">support</p>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai-assistant" className="section-padding bg-accent">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4 lg:mb-6">Doula AI Assistant</h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Our smart assistant combines doula expertise with 24/7 availability. Get answers to birth and postpartum questions anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--color-primary)'}}>
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Instant Answers</h3>
                    <p className="text-neutral-600">Get answers to questions about pregnancy, birth, and postpartum care at any time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--color-primary)'}}>
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Personal Recommendations</h3>
                    <p className="text-neutral-600">AI adapts to your needs and offers individual advice.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--color-primary)'}}>
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Doula Knowledge</h3>
                    <p className="text-neutral-600">Information based on certified doula practices and evidence-based birth support.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => (document.querySelector('.fixed.bottom-6') as HTMLButtonElement)?.click()}
                className="btn-primary"
              >
Try Doula AI Assistant
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--color-primary)'}}>
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-semibold">Doula AI</p>
                    <p className="text-sm text-neutral-500">Online</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-neutral-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm">Hi! How are things with your little one? 👶</p>
                  </div>
                  <div className="text-white rounded-2xl p-3 max-w-xs ml-auto" style={{backgroundColor: 'var(--color-primary)'}}>
                    <p className="text-sm">I have a question about breastfeeding</p>
                  </div>
                  <div className="bg-neutral-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm">Of course! Tell me more details, and I'll help with recommendations 🤱</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
                    <h2 className="heading-2 mb-4 lg:mb-6">Book a Consultation</h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Choose a convenient time for a free consultation. We'll discuss your needs and select the right support program.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Calendly inline widget с динамической высотой */}
            <div 
              key={calendlyKey}
              className="calendly-inline-widget" 
              data-url={calendlyUrl}
              style={{ 
                minWidth: '320px',
                height: calendlyHeight,
                width: '100%'
              }}
            />
            
            {/* Fallback если Calendly не загрузился */}
                    <div className="text-center mt-4 p-6 rounded-xl bg-accent">
              <p className="text-neutral-700 mb-4">
                Can't see the calendar? Book directly:
              </p>
              <a
                href="https://calendly.com/kosyanov080620042/30min"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary inline-block"
              >
                Open Booking Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--color-primary)'}}>
              <span className="text-white font-bold text-lg">D</span>
            </div>
                <span className="text-xl font-bold">DoulaDoo</span>
              </div>
              <p className="text-neutral-400">
                Professional doula care agency supporting families through birth, postpartum, and beyond.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Doula Services</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>Birth Doula Support</li>
                <li>Postpartum Care</li>
                <li>Home Birth Support</li>
                <li>Childbirth Education</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-neutral-400">
                <li>📞 +1 (555) 123-4567</li>
                <li>📧 info@momcare-ai.com</li>
                <li>📍 New York, NY</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-sm">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-sm">tw</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
            <p>&copy; 2024 DoulaDoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
