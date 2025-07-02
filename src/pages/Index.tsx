import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const restaurants = [
  {
    name: "Burger King",
    cuisine: "Бургеры • Американская кухня",
    rating: 4.5,
    deliveryTime: "25-35 мин",
    deliveryFee: 0,
    image: "🍔",
    discount: "-20%",
  },
  {
    name: "Суши Мастер",
    cuisine: "Суши • Японская кухня",
    rating: 4.8,
    deliveryTime: "30-40 мин",
    deliveryFee: 150,
    image: "🍣",
  },
  {
    name: "Mama Mia",
    cuisine: "Пицца • Итальянская кухня",
    rating: 4.6,
    deliveryTime: "20-30 мин",
    deliveryFee: 0,
    image: "🍕",
    discount: "-15%",
  },
  {
    name: "Тбилиси",
    cuisine: "Хачапури • Грузинская кухня",
    rating: 4.7,
    deliveryTime: "35-45 мин",
    deliveryFee: 200,
    image: "🥟",
  },
  {
    name: "Wok Street",
    cuisine: "Лапша • Азиатская кухня",
    rating: 4.4,
    deliveryTime: "25-35 мин",
    deliveryFee: 100,
    image: "🍜",
  },
  {
    name: "KFC",
    cuisine: "Курица • Фаст-фуд",
    rating: 4.3,
    deliveryTime: "20-30 мин",
    deliveryFee: 0,
    image: "🍗",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Utensils" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-charcoal">FoodRush</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Рестораны
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Категории
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Мои заказы
            </a>
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
          </nav>
        </div>
      </header>

      <Hero />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-charcoal">
              Популярные рестораны
            </h2>
            <Button variant="outline">
              Все рестораны
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} {...restaurant} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Utensils" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">FoodRush</h3>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Быстрая доставка еды с системой бонусов для постоянных клиентов
          </p>
          <div className="flex justify-center gap-6">
            <Icon
              name="Instagram"
              size={24}
              className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
            />
            <Icon
              name="Facebook"
              size={24}
              className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
            />
            <Icon
              name="Twitter"
              size={24}
              className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
