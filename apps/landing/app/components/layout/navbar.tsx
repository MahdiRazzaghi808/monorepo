"use client";

import { Button } from "@repo/main/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/main/components/ui/dropdown-menu";

import {
  ChevronDown,
  Clock,
  Globe,
  Menu,
  Smile,
  User,
  X,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "دوره‌ها", href: "#courses" },
    { name: "اساتید", href: "#teachers" },
    { name: "نظرات دانشجویان", href: "#testimonials" },
    { name: "تعرفه‌ها", href: "#pricing" },
  ];

  const features = [
    {
      title: "دوره‌های پروژه‌محور",
      description: "یادگیری عملی با انجام پروژه‌های واقعی بازار کار.",
      icon: BookOpen,
    },
    {
      title: "اساتید متخصص",
      description: "آموزش توسط افراد با تجربه صنعتی و تخصصی.",
      icon: User,
    },
    {
      title: "دسترسی آنلاین",
      description: "یادگیری در هر زمان و هر مکان بدون محدودیت.",
      icon: Globe,
    },
    {
      title: "پشتیبانی مستمر",
      description: "همراهی در طول مسیر یادگیری و پاسخ به سوالات شما.",
      icon: Clock,
    },
    {
      title: "مدرک پایان دوره",
      description: "دریافت گواهی معتبر پس از تکمیل دوره‌ها.",
      icon: GraduationCap,
    },
    {
      title: "رضایت دانشجویان",
      description: "بیش از ۹۵٪ رضایت کاربران از کیفیت آموزش.",
      icon: Smile,
    },
  ];

  return (
    <nav
      dir="rtl"
      className="container sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex justify-between items-center h-16">

        {/* موبایل منو */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.div>
          </Button>
        </div>

        {/* لوگو موبایل */}
        <div className="flex lg:hidden">
          <Link href="/" className="font-bold tracking-tight text-lg">
            آکادمی آوید
          </Link>
        </div>

        {/* دسکتاپ */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="font-bold tracking-tight text-2xl text-[#4b91aa]">
            آکادمی آوید
          </Link>

          {menuItems.map((item) => (
            <Button key={item.name} asChild variant="ghost" size="md">
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}

          {/* مگا منو امکانات */}
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="md" className="gap-1">
                امکانات
                <ChevronDown className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="w-[500px] p-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <DropdownMenuItem
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition hover:bg-muted/60"
                    >
                        <Icon style={{ width: 24, height: 24 }} />

                      <div>
                        <div className="font-semibold mb-1">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-300 leading-6">
                          {item.description}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ثبت نام */}
        <div className="flex items-center">
          <Button asChild size="md">
            <Link href="/register">
              ثبت‌نام / ورود
            </Link>
          </Button>
        </div>
      </div>

      {/* موبایل دراپ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
