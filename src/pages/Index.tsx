import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: "Лечение акне",
      description: "Комплексная терапия угревой болезни с использованием современных методов",
      icon: "Stethoscope"
    },
    {
      title: "Удаление новообразований",
      description: "Безопасное удаление родинок, бородавок и других образований кожи",
      icon: "Scissors"
    },
    {
      title: "Косметическая дерматология",
      description: "Процедуры для улучшения состояния и внешнего вида кожи",
      icon: "Sparkles"
    },
    {
      title: "Лечение псориаза",
      description: "Современные методы терапии псориаза и других хронических заболеваний",  
      icon: "Shield"
    },
    {
      title: "Детская дерматология",
      description: "Специализированная помощь для детей с кожными заболеваниями",
      icon: "Baby"
    },
    {
      title: "Диагностика родинок",
      description: "Дерматоскопия и профилактические осмотры новообразований кожи",
      icon: "Search"
    }
  ];

  const reviews = [
    {
      name: "Мария К.",
      text: "Очень довольна результатом лечения! Доктор внимательная и профессиональная.",
      rating: 5
    },
    {
      name: "Андрей П.", 
      text: "Отличный специалист, быстро поставил диагноз и назначил эффективное лечение.",
      rating: 5
    },
    {
      name: "Елена С.",
      text: "Прекрасная атмосфера в клинике, современное оборудование. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream/10 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <h1 className="text-2xl font-heading font-bold text-gray-800">ДерматоКлиник</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['Главная', 'Услуги', 'О враче', 'Отзывы', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
              Записаться на прием
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-heading font-bold text-gray-800 mb-6">
              Забота о вашей коже — наша миссия
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Современная дерматология с индивидуальным подходом к каждому пациенту. 
              Опыт работы более 15 лет, тысячи довольных пациентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section id="о-враче" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/18bad8cc-3917-462b-b761-95af01c7b2eb.jpg" 
                  alt="Доктор дерматолог" 
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary">О враче</Badge>
                <h3 className="text-4xl font-heading font-bold text-gray-800 mb-6">
                  Доктор Анна Петрова
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Врач-дерматовенеролог высшей категории с 15-летним опытом работы. 
                  Кандидат медицинских наук, член Российского общества дерматовенерологов.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="GraduationCap" className="text-primary mr-3" size={24} />
                    <span className="text-gray-700">РНИМУ им. Н.И. Пирогова, 2008</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" className="text-primary mr-3" size={24} />
                    <span className="text-gray-700">Специализация: дерматология, косметология</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" className="text-primary mr-3" size={24} />
                    <span className="text-gray-700">Более 5000 довольных пациентов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="услуги" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Услуги</Badge>
              <h3 className="text-4xl font-heading font-bold text-gray-800 mb-4">
                Наши специализации
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Полный спектр дерматологических услуг с использованием современного оборудования
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={service.icon} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-xl font-heading font-semibold text-gray-800">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="отзывы" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Отзывы</Badge>
              <h3 className="text-4xl font-heading font-bold text-gray-800 mb-4">
                Что говорят наши пациенты
              </h3>
              <p className="text-xl text-gray-600">
                Мы гордимся доверием наших пациентов
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">"{review.text}"</p>
                    <p className="font-medium text-gray-800">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Appointment */}
      <section id="контакты" className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">Контакты</Badge>
            <h3 className="text-4xl font-heading font-bold text-gray-800 mb-8">
              Запишитесь на консультацию
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon name="Phone" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">Адрес</h4>
                <p className="text-gray-600">г. Москва, ул. Медицинская, д. 15</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 mb-8">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться онлайн
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xl font-heading font-semibold mb-6 text-gray-800">
              Следите за нами в социальных сетях
            </h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Instagram" className="text-primary" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="Facebook" className="text-primary" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" className="text-primary" size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="text-xl font-heading font-bold">ДерматоКлиник</span>
            </div>
            <p className="text-gray-400">
              © 2024 ДерматоКлиник. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}