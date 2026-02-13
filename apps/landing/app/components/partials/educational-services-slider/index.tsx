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
    <section className="w-full">
      {/* <h2 className="text-2xl lg:text-3xl pt-6 font-bold tracking-tighter text-center mb-10">خدمات آموزشی</h2> */}

      <Swiper
        modules={[Autoplay]}
        loop={true}
        allowTouchMove={false}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}

        className="px-6 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
      >
        {items.concat(items).map((item, index) => {
          const Icon = item.icon;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-muted hover:bg-muted/70 transition-all duration-300">
                <Icon size={28} className="text-primary" />
                <span className="text-sm font-medium text-center text-nowrap">{item.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
