import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF10_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-black text-primary drop-shadow-[0_0_30px_rgba(0,240,255,0.5)] mb-2 tracking-tight">
                GRAND MOBILE
              </h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Продажа мобильных телефонов с гарантией. Доставка по всей России.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Купить телефон
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 font-semibold text-lg px-8">
                <Icon name="Shield" className="mr-2" size={20} />
                Гарантия 2 года
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши преимущества</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm text-center p-6 border-primary/30">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия 2 года</h3>
              <p className="text-muted-foreground">Официальная гарантия на все устройства</p>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm text-center p-6 border-primary/30">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Repeat" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Обмен 14 дней</h3>
              <p className="text-muted-foreground">Не подошёл? Обменяем без вопросов</p>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm text-center p-6 border-primary/30">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Оригинал</h3>
              <p className="text-muted-foreground">Только сертифицированная техника</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm p-8 border-primary/30">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold">info@grandmobile.ru</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="text-lg font-semibold">Москва, ул. Тверская, д. 1</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Режим работы</p>
                  <p className="text-lg font-semibold">Пн-Вс: 10:00 - 21:00</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;