"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@repo/main/components/ui/button";
import scholarship from "@/public/assets/education_certificate.png";
import certificate from "@/public/assets/education_scholarship.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      dir="rtl"
      className="flex flex-col items-center overflow-x-clip mb-20"
    >
      <div className="max-w-[600px] flex flex-col items-center relative">
        <motion.img
          src={scholarship.src}
          alt="بورسیه"
          className="absolute -right-80 -top-20 w-80 h-80 hidden lg:block"
          style={{ translateY }}
        />

        <motion.img
          src={certificate.src}
          alt="گواهینامه"
          className="absolute -left-80 -top-4 w-80 h-80 hidden lg:block"
          style={{ translateY }}
        />


        <div className="text-2xl mx-auto md:text-4xl lg:text-6xl text-pretty py-6 font-bold tracking-tight text-center">
          یادگیری را همین امروز شروع کن
        </div>

        <div className="text-center text-lg mb-8 md:text-xl leading-8 text-muted-foreground">
          با دوره‌های کاربردی و پروژه‌محور مهارت‌های جدید یاد بگیر،
          پیشرفتت را دنبال کن و مسیر حرفه‌ای خودت را بساز.
        </div>

        <div className="flex items-center gap-4 mt-4 text-lg">
          

          <div className="font-semibold cursor-pointer hover:underline">
            مشاهده دوره‌ها
            <ArrowLeft className="h-4 w-4 inline mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
