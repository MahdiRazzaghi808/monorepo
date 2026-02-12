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

  return (
    <nav
      dir="rtl"
      className="container sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div>
        <div className="flex justify-between items-center h-16">

          {/* موبایل - دکمه منو */}
          <div className="flex sm:hidden">
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
          <div className="flex sm:hidden">
            <Link href="/" className="font-bold tracking-tight text-lg">
              آکادمی نوآور
            </Link>
          </div>

          {/* دسکتاپ */}
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/" className="font-bold tracking-tight text-2xl">
              آکادمی نوآور
            </Link>

            {menuItems.map((item) => (
              <Button key={item.name} asChild variant="ghost" size="sm">
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}

            {/* دراپ‌داون امکانات */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  امکانات
                  <ChevronDown className="mr-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-80">

                <DropdownMenuItem>
                  <BookOpen className="ml-2 h-4 w-4" />
                  <div>
                    <div className="font-semibold">دوره‌های پروژه‌محور</div>
                    <div className="text-sm text-muted-foreground">
                      یادگیری عملی با انجام پروژه‌های واقعی بازار کار.
                    </div>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <User className="ml-2 h-4 w-4" />
                  <div>
                    <div className="font-semibold">اساتید متخصص</div>
                    <div className="text-sm text-muted-foreground">
                      آموزش توسط افراد با تجربه صنعتی و تخصصی.
                    </div>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Globe className="ml-2 h-4 w-4" />
                  <div>
                    <div className="font-semibold">دسترسی آنلاین</div>
                    <div className="text-sm text-muted-foreground">
                      یادگیری در هر زمان و هر مکان بدون محدودیت.
                    </div>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Clock className="ml-2 h-4 w-4" />
                  <div>
                    <div className="font-semibold">پشتیبانی مستمر</div>
                    <div className="text-sm text-muted-foreground">
                      همراهی در طول مسیر یادگیری و پاسخ به سوالات شما.
                    </div>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <GraduationCap className="ml-2 h-4 w-4" />
                  <div>
                    <div className="font-semibold">مدرک پایان دوره</div>
                    <div className="text-sm text-muted-foreground">
                      دریافت گواهی معتبر پس از تکمیل دوره‌ها.
                    </div>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Smile className="ml-2 h-4 w-4" />
                  <div>
                    <div className="font-semibold">رضایت دانشجویان</div>
                    <div className="text-sm text-muted-foreground">
                      بیش از ۹۵٪ رضایت کاربران از کیفیت آموزش.
                    </div>
                  </div>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* دکمه ثبت‌نام */}
          <div className="flex items-center">
            <Button asChild size="sm" className="hidden sm:flex">
              <Link href="/register">
                ثبت‌نام / ورود
              </Link>
            </Button>
          </div>
        </div>

        {/* منوی موبایل */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden overflow-hidden"
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

                <Link
                  href="/register"
                  className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ثبت‌نام / ورود
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
