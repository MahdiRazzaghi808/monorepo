"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  GraduationCap,
  BookOpen,
  Video,
  Users,
  FileText,
  ClipboardList,
} from "lucide-react";

export default function EducationalServicesSlider() {
  const items = [
    { name: "دوره‌های آموزشی", icon: BookOpen },
    { name: "کلاس‌های آنلاین", icon: Video },
    { name: "اساتید و مدرسین", icon: Users },
    { name: "آزمون و ارزیابی", icon: ClipboardList },
    { name: "محتوای درسی", icon: FileText },
    { name: "مدیریت آموزش", icon: GraduationCap },
  ];

  return (
    <section className="w-full py-14">
      <h2 className="text-center text-2xl font-bold mb-10">خدمات آموزشی</h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        speed={10000} // خیلی زیاد → حرکت نرم
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        spaceBetween={20}
        slidesPerView={5} // یا breakpoints مثل قبلی
        className="px-6"
      >
        {items.concat(items).map((item, index) => {
          const Icon = item.icon;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-muted hover:bg-muted/70 transition-all duration-300">
                <Icon size={28} className="text-primary" />
                <span className="text-sm font-medium text-center">{item.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
