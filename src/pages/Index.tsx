import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: Review[];
  image: string;
  specs: string[];
}

const Index = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 119990,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1695048064468-42dde2369e97?w=400',
      specs: ['A17 Pro', '256GB', '6.7"', '48MP'],
      reviews: [
        { id: 1, author: 'Алексей', rating: 5, text: 'Отличный телефон, камера просто космос!', date: '15.10.2024' },
        { id: 2, author: 'Мария', rating: 4, text: 'Хороший, но дорогой. Качество на высоте.', date: '12.10.2024' }
      ]
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 109990,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
      specs: ['Snapdragon 8 Gen 3', '512GB', '6.8"', '200MP'],
      reviews: [
        { id: 3, author: 'Дмитрий', rating: 5, text: 'S Pen - это нечто! Очень доволен покупкой.', date: '18.10.2024' }
      ]
    },
    {
      id: 3,
      name: 'Xiaomi 14 Pro',
      price: 79990,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
      specs: ['Snapdragon 8 Gen 3', '256GB', '6.73"', '50MP'],
      reviews: [
        { id: 4, author: 'Ольга', rating: 5, text: 'Лучшее соотношение цена-качество!', date: '20.10.2024' },
        { id: 5, author: 'Игорь', rating: 4, text: 'Быстрый, красивый, но греется при играх.', date: '17.10.2024' }
      ]
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newReview, setNewReview] = useState({ author: '', rating: 5, text: '' });

  const handleAddReview = () => {
    if (selectedProduct && newReview.author && newReview.text) {
      const updatedProduct = {
        ...selectedProduct,
        reviews: [
          ...selectedProduct.reviews,
          {
            id: Date.now(),
            ...newReview,
            date: new Date().toLocaleDateString('ru-RU')
          }
        ]
      };
      setSelectedProduct(updatedProduct);
      setNewReview({ author: '', rating: 5, text: '' });
    }
  };

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
              Официальные смартфоны с гарантией. Доставка по всей России.
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
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наши смартфоны</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group overflow-hidden border-primary/30">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-black font-semibold">
                    <Icon name="Star" size={14} className="mr-1 fill-current" />
                    {product.rating}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-2">
                  {product.specs.map((spec, idx) => (
                    <Badge key={idx} variant="outline" className="border-primary/30">
                      {spec}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">{product.price.toLocaleString('ru-RU')}</span>
                  <span className="text-muted-foreground">₽</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MessageSquare" size={16} />
                  <span>{product.reviews.length} отзывов</span>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Купить
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-primary/30"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Icon name="Star" size={18} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-card border-primary/30 max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Отзывы: {selectedProduct?.name}</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {selectedProduct?.reviews.map((review) => (
                          <div key={review.id} className="border-b border-border pb-4">
                            <div className="flex items-start gap-4">
                              <Avatar>
                                <AvatarFallback className="bg-primary/20 text-primary">
                                  {review.author[0]}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-semibold">{review.author}</span>
                                  <span className="text-sm text-muted-foreground">{review.date}</span>
                                </div>
                                <div className="flex gap-1 mb-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Icon
                                      key={i}
                                      name="Star"
                                      size={16}
                                      className={i < review.rating ? 'fill-primary text-primary' : 'text-muted'}
                                    />
                                  ))}
                                </div>
                                <p className="text-muted-foreground">{review.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        <div className="space-y-4 pt-4">
                          <h3 className="font-semibold text-lg">Оставить отзыв</h3>
                          <Input
                            placeholder="Ваше имя"
                            value={newReview.author}
                            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                          />
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                onClick={() => setNewReview({ ...newReview, rating })}
                                className="transition-transform hover:scale-110"
                              >
                                <Icon
                                  name="Star"
                                  size={20}
                                  className={rating <= newReview.rating ? 'fill-primary text-primary' : 'text-muted'}
                                />
                              </button>
                            ))}
                          </div>
                          <Textarea
                            placeholder="Ваш отзыв о товаре"
                            value={newReview.text}
                            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                            rows={4}
                          />
                          <Button onClick={handleAddReview} className="w-full bg-primary hover:bg-primary/90 text-black">
                            <Icon name="Send" className="mr-2" size={18} />
                            Отправить отзыв
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
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