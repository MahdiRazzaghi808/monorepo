"use client";

import { Separator } from "@repo/main/components/ui/separator";
import { Button } from "@repo/main/components/ui/button";
import { Card, CardContent, CardFooter } from "@repo/main/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "پلن مبتدی",
      desc: "شروع یادگیری با دوره‌های پایه",
      price: 0,
      isMostPop: false,
      features: [
        "دسترسی به دوره‌های مقدماتی",
        "تمرین‌ها و مثال‌های ساده",
        "آمار پیشرفت اولیه",
      ],
    },
    {
      name: "پلن حرفه‌ای",
      desc: "بهترین گزینه برای دانشجویان و علاقه‌مندان",
      price: 99,
      isMostPop: true,
      features: [
        "تمام امکانات پلن مبتدی",
        "دسترسی به دوره‌های پیشرفته",
        "تمرین‌های عملی و پروژه‌ای",
        "کلاس‌های آنلاین و وبینار",
        "پشتیبانی سریع و اولویت‌دار",
      ],
    },
    {
      name: "پلن پیشرفته",
      desc: "مناسب برای یادگیری کامل و پروژه واقعی",
      price: 90,
      isMostPop: false,
      features: [
        "تمام امکانات پلن حرفه‌ای",
        "دسترسی به پروژه‌های واقعی",
        "گواهینامه پایان دوره",
        "پشتیبانی اختصاصی",
        "ادغام با ابزارهای آموزشی دیگر",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full max-w-7xl mx-auto px-4 py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16 flex flex-col gap-3"
      >
        <h2 className="text-2xl lg:text-3xl pt-6 font-bold tracking-tighter text-center">
          انتخاب پلن آموزشی مناسب
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center">
          پلن مورد نظر خود را انتخاب کنید و مسیر یادگیری خود را شروع کنید. امکان ارتقا یا کاهش پلن در هر زمان وجود دارد.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-16 md:gap-6 lg:gap-8  max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${plan.isMostPop ? "scale-105" : ""}`}
          >
            <Card
              className={`relative h-full ${plan.isMostPop ? "border-2 border-primary shadow-xl" : ""}`}
            >
              {plan.isMostPop && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-card border-2 border-primary px-4 py-1 rounded-full text-sm font-medium">
                    پرطرفدارترین
                  </span>
                </div>
              )}

              <CardContent className="p-6 pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price === 0 ? "رایگان" : `$${plan.price}`}</span>
                    {plan.price !== 0 && <span className="text-muted-foreground ml-1">/ماه</span>}
                  </div>
                </div>

                <Separator className="my-6" />

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 ml-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full"
                  variant={plan.isMostPop ? "primary" : "outline"}
                  size="lg"
                >
                  {plan.price === 0 ? "شروع رایگان" : "انتخاب پلن"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
