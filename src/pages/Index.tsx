import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    attendance: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Спасибо за ответ! Свяжитесь с нами по номеру 28-005 для подтверждения.`,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <img
            src="/img/349b75fe-a6ba-48b3-96fb-7d82cf6b14e9.jpg"
            alt="Wedding decoration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="mb-8">
              <Icon
                name="Heart"
                className="mx-auto mb-4 text-amber-600"
                size={60}
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-6 tracking-wide">
              Александра
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-amber-600 w-16"></div>
              <span className="mx-4 text-2xl text-amber-600">&</span>
              <div className="h-px bg-amber-600 w-16"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-8 tracking-wide">
              Михаил
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 font-light">
              Приглашают вас разделить радость
            </p>
            <div className="space-y-2 text-lg text-gray-700">
              <p className="flex items-center justify-center gap-2">
                <Icon name="Calendar" size={20} className="text-amber-600" />
                05 июля 2025 года
              </p>
              <p className="flex items-center justify-center gap-2">
                <Icon name="Clock" size={20} className="text-amber-600" />
                14:00
              </p>
              <p className="flex items-center justify-center gap-2">
                <Icon name="MapPin" size={20} className="text-amber-600" />
                Московский ЗАГС
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Детали торжества
            </h2>
            <div className="w-20 h-px bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Clock"
                  className="mx-auto mb-4 text-amber-600"
                  size={40}
                />
                <CardTitle className="text-2xl font-light text-gray-800">
                  Время и место
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="text-lg text-gray-700">
                  <p className="font-medium">5 июля 2025 года</p>
                  <p>14:00</p>
                </div>
                <Separator className="my-4" />
                <div className="text-lg text-gray-700">
                  <p className="font-medium">Московский ЗАГС</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Торжественная регистрация брака
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Shirt"
                  className="mx-auto mb-4 text-amber-600"
                  size={40}
                />
                <CardTitle className="text-2xl font-light text-gray-800">
                  Дресс-код
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="text-lg text-gray-700">
                  <p className="font-medium">Торжественный</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Классический костюм для мужчин
                  </p>
                  <p className="text-sm text-gray-600">
                    Коктейльное платье для женщин
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-gray-500">
                  <p>Цветовая гамма: золотой, кремовый, бежевый</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Подтверждение присутствия
            </h2>
            <div className="w-20 h-px bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Пожалуйста, подтвердите ваше присутствие до 20 июня 2025 года
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-lg font-medium text-gray-700"
                  >
                    Ваше имя
                  </Label>
                  <Input
                    id="name"
                    value={rsvpData.name}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, name: e.target.value })
                    }
                    className="h-12 text-lg"
                    placeholder="Введите ваше полное имя"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-medium text-gray-700">
                    Присутствие
                  </Label>
                  <RadioGroup
                    value={rsvpData.attendance}
                    onValueChange={(value) =>
                      setRsvpData({ ...rsvpData, attendance: value })
                    }
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-lg">
                        Да, с удовольствием приду
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-lg">
                        К сожалению, не смогу присутствовать
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="guests"
                    className="text-lg font-medium text-gray-700"
                  >
                    Количество гостей
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="5"
                    value={rsvpData.guests}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, guests: e.target.value })
                    }
                    className="h-12 text-lg"
                    placeholder="Включая вас"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-lg font-medium text-gray-700"
                  >
                    Пожелания (необязательно)
                  </Label>
                  <Textarea
                    id="message"
                    value={rsvpData.message}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, message: e.target.value })
                    }
                    className="min-h-24 text-lg"
                    placeholder="Ваши пожелания молодоженам"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-gray-800">Вопросы?</h3>
            <p className="text-lg text-gray-600">Свяжитесь с нами по номеру:</p>
            <div className="flex items-center justify-center gap-2 text-xl font-medium text-amber-600">
              <Icon name="Phone" size={20} />
              <a href="tel:28-005" className="hover:underline">
                28-005
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <Icon name="Heart" className="mx-auto text-amber-600" size={30} />
          </div>
          <p className="text-lg font-light">С любовью, Александра и Михаил</p>
          <p className="text-sm text-gray-400 mt-2">05.07.2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
