import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center p-4">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-2xl">
            Привет! 👋
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-medium">
            Я — Юра, твой личный разработчик
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
          <p className="text-6xl font-bold text-white mb-4">{count}</p>
          <Button 
            size="lg"
            onClick={() => setCount(count + 1)}
            className="bg-white hover:bg-white/90 text-purple-600 font-bold text-xl px-10 py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all"
          >
            <Icon name="Sparkles" className="mr-2" size={24} />
            Нажми меня!
          </Button>
        </div>

        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Это простой пример сайта. Скажи мне, что ты хочешь создать, 
          и я сделаю это для тебя! 🚀
        </p>
      </div>
    </div>
  );
};

export default Index;
