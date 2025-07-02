import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  discount?: string;
}

export default function RestaurantCard({
  name,
  cuisine,
  rating,
  deliveryTime,
  deliveryFee,
  image,
  discount,
}: RestaurantCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
          <div className="text-6xl">{image}</div>
        </div>
        {discount && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
            {discount}
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Icon
            name="Star"
            size={14}
            className="text-yellow-500 fill-current"
          />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{cuisine}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Icon name="Clock" size={14} className="mr-1" />
            {deliveryTime}
          </div>
          <div className="flex items-center text-gray-600">
            <Icon name="Truck" size={14} className="mr-1" />
            {deliveryFee === 0 ? "Бесплатно" : `${deliveryFee}₽`}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t flex items-center justify-between">
          <div className="flex items-center text-primary text-sm font-medium">
            <Icon name="Gift" size={14} className="mr-1" />+
            {Math.floor(rating * 10)} бонусов
          </div>
          <Icon
            name="ArrowRight"
            size={16}
            className="text-gray-400 group-hover:text-primary transition-colors"
          />
        </div>
      </CardContent>
    </Card>
  );
}
