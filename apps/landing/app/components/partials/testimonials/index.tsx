"use client";

import Image from "next/image";
import Avatar1 from "@/public/assets/avatar-1.png";
import Avatar2 from "@/public/assets/avatar-2.png";
import Avatar3 from "@/public/assets/avatar-3.png";
import Avatar4 from "@/public/assets/avatar-4.png";
import Avatar5 from "@/public/assets/avatar-5.png";
import Avatar6 from "@/public/assets/avatar-6.png";
import Avatar7 from "@/public/assets/avatar-7.png";
import Avatar8 from "@/public/assets/avatar-8.png";
import Avatar9 from "@/public/assets/avatar-9.png";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    text: "این دوره‌ها باعث شد مهارت برنامه‌نویسی من خیلی سریع پیشرفت کنه.",
    name: "سارا احمدی",
    handle: "@sara_dev",
    avatar: Avatar1,
  },
  {
    text: "روش تدریس اساتید فوق‌العاده بود و مفاهیم کاملا ساده توضیح داده شد.",
    name: "امیررضا حسینی",
    handle: "@amirreza.learn",
    avatar: Avatar2,
  },
  {
    text: "با این آموزش‌ها تونستم پروژه واقعی بسازم و تجربه عملی پیدا کنم.",
    name: "مهسا رضایی",
    handle: "@mahsa_projects",
    avatar: Avatar3,
  },
  {
    text: "دوره‌ها و تمرین‌ها خیلی سازماندهی شده و جذاب بودن.",
    name: "علیرضا کریمی",
    handle: "@alireza_study",
    avatar: Avatar4,
  },
  {
    text: "پشتیبانی و پاسخ به سوالات باعث شد هیچ وقت گیج نشم.",
    name: "فاطمه موسوی",
    handle: "@fateme_support",
    avatar: Avatar5,
  },
  {
    text: "این دوره‌ها به من اعتماد به نفس داد تا برنامه‌های خودم رو بسازم.",
    name: "حسین اکبری",
    handle: "@hossein_codes",
    avatar: Avatar6,
  },
  {
    text: "محتوا کاملا کاربردی بود و به راحتی تونستم توی پروژه‌های واقعی استفاده کنم.",
    name: "لیلا موسوی",
    handle: "@leila_projects",
    avatar: Avatar7,
  },
  {
    text: "اساتید پاسخگو و صبور بودن و همیشه سوالات ما رو جواب می‌دادن.",
    name: "مجید نادری",
    handle: "@majid_study",
    avatar: Avatar8,
  },
  {
    text: "با تمرین‌ها و پروژه‌ها، مفاهیم رو عمیقا یاد گرفتم.",
    name: "مهتاب جعفری",
    handle: "@mahtab_learn",
    avatar: Avatar9,
  },
  {
    text: "این آموزش‌ها باعث شد مسیر شغلی خودم رو سریع‌تر پیدا کنم.",
    name: "رضا کاظمی",
    handle: "@reza_career",
    avatar: Avatar1,
  },
  {
    text: "بهترین تجربه یادگیری آنلاین که داشتم.",
    name: "زهرا محمدی",
    handle: "@zahra_online",
    avatar: Avatar2,
  },
  {
    text: "پروژه‌های عملی باعث شد بعد از دوره آماده کار واقعی باشم.",
    name: "محمد حسین پور",
    handle: "@mhp_projects",
    avatar: Avatar3,
  },
  {
    text: "این پلتفرم انگیزه من برای یادگیری رو چند برابر کرد.",
    name: "نگین احمدی",
    handle: "@negin_motivation",
    avatar: Avatar4,
  },
  {
    text: "کلاس‌ها خیلی سازماندهی شده و مفاهیم با مثال‌های عملی توضیح داده شد.",
    name: "سعید رضایی",
    handle: "@saeid_examples",
    avatar: Avatar5,
  },
  {
    text: "اساتید با تجربه باعث شدند سریع‌تر درک عمیق پیدا کنم.",
    name: "بهناز کریمی",
    handle: "@behnaz_expert",
    avatar: Avatar6,
  },
  {
    text: "این آموزش‌ها به من کمک کرد مسیر تحصیلی و شغلی خودم رو مشخص کنم.",
    name: "نیما یوسفی",
    handle: "@nima_path",
    avatar: Avatar7,
  },
  {
    text: "تمرین‌ها و چالش‌ها باعث شد مفاهیم رو بهتر یاد بگیرم.",
    name: "الهام موسوی",
    handle: "@elham_challenges",
    avatar: Avatar8,
  },
  {
    text: "بعد از این دوره‌ها تونستم وارد بازار کار بشم و پروژه واقعی انجام بدم.",
    name: "امیر علیزاده",
    handle: "@amir_work",
    avatar: Avatar9,
  },
  {
    text: "یادگیری با این دوره‌ها واقعا لذت‌بخش و انگیزشی بود.",
    name: "نرگس احمدی",
    handle: "@narges_fun",
    avatar: Avatar1,
  },
  {
    text: "پشتیبانی قوی و آموزش باکیفیت باعث شد هیچ وقت انگیزه‌ام کم نشه.",
    name: "کامران حسینی",
    handle: "@kamran_support",
    avatar: Avatar2,
  },
];


const Testimonials = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center pb-16">
        <div className="text-2xl lg:text-3xl pt-6 font-bold tracking-tighter text-center">
          نظرات کاربران ما
        </div>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] h-[750px] mb-12 md:mb-28 lg:mb-36">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex items-center justify-center overflow-x-hidden pb-4 gap-4 flex-wrap">
            {testimonialsData.map((item, index) => (
              <div key={index} className="shadow-xl w-[310px] rounded-2xl p-8 my-4 bg-card">
                <div className="font-medium pb-4">{item.text}</div>
                <div className="flex items-center gap-3">
                  <Image src={item.avatar} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div dir="ltr">{item.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
