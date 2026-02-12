import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import {
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  const footerData = {
    brand: {
      description:
        "پلتفرم آموزشی ما با هدف ارائه دوره‌های کاربردی و مهارت‌محور برای رشد فردی و حرفه‌ای شما طراحی شده است.",
      developer: {
        name: "تیم توسعه پلتفرم آموزشی",
        url: "#",
      },
    },

    socials: [
      { icon: FaXTwitter, url: "#" },
      { icon: AiFillInstagram, url: "#" },
      { icon: FaYoutube, url: "#" },
      { icon: FaLinkedin, url: "#" },
      { icon: FaTiktok, url: "#" },
      { icon: FaPinterest, url: "#" },
    ],

    sections: [
      {
        title: "دوره‌ها",
        links: [
          { label: "برنامه‌نویسی", href: "#" },
          { label: "طراحی و گرافیک", href: "#" },
          { label: "دیجیتال مارکتینگ", href: "#" },
          { label: "هوش مصنوعی", href: "#" },
          { label: "مدیریت و کسب‌وکار", href: "#" },
        ],
      },
      {
        title: "یادگیری",
        links: [
          { label: "مسیرهای یادگیری", href: "#" },
          { label: "مدرک پایان دوره", href: "#" },
          { label: "اساتید برتر", href: "#" },
          { label: "پروژه‌های عملی", href: "#" },
          { label: "سوالات متداول", href: "#" },
        ],
      },
      {
        title: "درباره ما",
        links: [
          { label: "ماموریت ما", href: "#" },
          { label: "همکاری با ما", href: "#" },
          { label: "فرصت‌های شغلی", href: "#" },
          { label: "وبلاگ آموزشی", href: "#" },
          { label: "تماس با ما", href: "#" },
        ],
      },
      {
        title: "قوانین",
        links: [
          { label: "حریم خصوصی", href: "#" },
          { label: "شرایط استفاده", href: "#" },
          { label: "قوانین خرید دوره", href: "#" },
          { label: "پشتیبانی", href: "#" },
        ],
      },
    ],
  };

  return (
    <div className="border-t border-gray-700">
      <div className="flex flex-col md:flex-row py-16 gap-8 justify-between container">
        
        {/* برند */}
        <div className="flex flex-col gap-8 text-gray-300/85 max-w-[320px]">
          <Image src={Logo} alt="لوگو" className="cursor-pointer" />

          <div className="leading-7">
            {footerData.brand.description}
            <div className="font-semibold text-white hover:underline text-lg mt-3">
              <a href={footerData.brand.developer.url}>
                {footerData.brand.developer.name}
                <MdOutlineArrowOutward className="inline mr-1" />
              </a>
            </div>
          </div>

          <div className="flex gap-4 text-2xl">
            {footerData.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a key={index} href={social.url}>
                  <Icon className="hover:scale-125 transition cursor-pointer" />
                </a>
              );
            })}
          </div>
        </div>

        {/* سکشن‌ها */}
        {footerData.sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="font-bold text-lg">{section.title}</div>

            {section.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="cursor-pointer text-gray-300/85 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
