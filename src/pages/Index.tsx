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
                GRAND EXCHANGE
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mt-4">
                Обмен имуществом между серверами
              </p>
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Активные обмены</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
<Card className="bg-card/50 backdrop-blur-sm p-6 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">artem kisilakov</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Сервер 27</span>
                  </div>
                  <p className="text-muted-foreground mb-3">Дом в Арзамасе + Кв в элит апартаментах</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="ArrowRightLeft" size={16} className="text-primary" />
                    <span className="text-muted-foreground">Ищет обмен на</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">Сервер 3</span>
                  </div>
                </div>
              </div>
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