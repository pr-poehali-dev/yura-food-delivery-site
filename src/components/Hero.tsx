import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            🎉 Система бонусов для постоянных клиентов
          </Badge>
          <h1 className="text-5xl font-bold text-charcoal mb-6 leading-tight">
            Быстрая доставка <br />
            <span className="text-primary">любимой еды</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Заказывайте из лучших ресторанов города. Копите бонусы с каждым
            заказом и получайте скидки до 20%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Начать заказ
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name="Clock" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Быстро</h3>
            <p className="text-gray-600">
              Доставка за 30-45 минут в любую точку города
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name="Gift" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Бонусы</h3>
            <p className="text-gray-600">
              Кэшбек 3-5% с каждого заказа и специальные акции
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Icon name="Shield" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Надёжно</h3>
            <p className="text-gray-600">
              Только проверенные рестораны и курьеры
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🔥 Станьте VIP-клиентом!
          </h2>
          <p className="text-orange-100 text-lg mb-6">
            При заказе от 2000₽ получите статус VIP и скидку 15% на все
            последующие заказы
          </p>
          <div className="flex justify-center items-center gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">2000₽</div>
              <div className="text-orange-200 text-sm">Сумма заказа</div>
            </div>
            <Icon name="ArrowRight" size={32} />
            <div className="text-center">
              <div className="text-2xl font-bold">15%</div>
              <div className="text-orange-200 text-sm">Постоянная скидка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
