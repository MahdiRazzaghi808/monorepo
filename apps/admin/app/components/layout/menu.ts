"use client";

import {
  Award,
  BookOpen,
  ClipboardList,
  FileText,
  Layers,
  LayoutGrid,
  LifeBuoy,
  Settings,
  Shield,
  UserCog,
  Users,
  Wallet
} from "lucide-react";

import { MenuConfig } from "@repo/main/components/layout/sidebar/types";

export const MENU_SIDEBAR: MenuConfig = [
  // ================= Dashboard =================
  {
    title: "داشبورد",
    icon: LayoutGrid,
    children: [
      { title: "آمار و تحلیل", path: "/admin" }
    ]
  },

  // ================= Users =================
  // {
  //   heading: "کاربران"
  // },
  // {
  //   title: "دانشجویان",
  //   icon: Users,
  //   children: [
  //     { title: "لیست دانشجویان", path: "/students/list" },
  //     { title: "ثبت‌نام جدید", path: "/students/create" },
  //     { title: "وضعیت پیشرفت", path: "/students/progress" },
  //     { title: "مدارک دانشجویان", path: "/students/certificates" }
  //   ]
  // },
  // {
  //   title: "مدرسین",
  //   icon: UserCog,
  //   children: [
  //     { title: "لیست مدرسین", path: "/instructors/list" },
  //     { title: "افزودن مدرس", path: "/instructors/create" },
  //     { title: "دروس ارائه‌شده", path: "/instructors/courses" },
  //     { title: "درآمد مدرسین", path: "/instructors/earnings" }
  //   ]
  // },

  // ================= Education =================
  {
    heading: "آموزش"
  },
  {
    title: "دروس",
    icon: BookOpen,
    children: [
      { title: "همه دروس", path: "/courses" },
      { title: "ایجاد درس جدید", path: "/courses/create" },
      { title: "دسته‌بندی دروس", path: "/courses/categories" },
      { title: "سرفصل‌ها", path: "/courses/chapters" }
    ]
  },
  {
    title: "دوره‌ها",
    icon: Layers,
    children: [
      { title: "لیست دوره‌ها", path: "/programs/list" },
      { title: "ساخت دوره", path: "/programs/create" },
      { title: "ثبت‌نام دوره‌ها", path: "/programs/enrollments" },
      { title: "ظرفیت و زمان‌بندی", path: "/programs/schedule" }
    ]
  },

  // ================= Exams =================
  {
    heading: "ارزیابی"
  },
  {
    title: "آزمون‌ها",
    icon: ClipboardList,
    children: [
      { title: "آزمون‌ها", path: "/exams/list" },
      { title: "ایجاد آزمون", path: "/exams/create" },
      { title: "نتایج آزمون‌ها", path: "/exams/results" },
      { title: "بانک سوالات", path: "/exams/questions" }
    ]
  },

  // ================= Certificates =================
  {
    title: "مدارک و گواهی‌ها",
    icon: Award,
    children: [
      { title: "مدارک صادر شده", path: "/certificates/list" },
      { title: "طراحی گواهی", path: "/certificates/templates" },
      { title: "اعتبارسنجی مدرک", path: "/certificates/verify" }
    ]
  },

  // ================= Finance =================
  {
    heading: "مالی"
  },
  {
    title: "مالی و پرداخت",
    icon: Wallet,
    children: [
      { title: "تراکنش‌ها", path: "/finance/transactions" },
      { title: "پرداخت‌ها", path: "/finance/payments" },
      { title: "تسویه مدرسین", path: "/finance/settlements" },
      { title: "کدهای تخفیف", path: "/finance/discounts" }
    ]
  },

  // ================= Content =================
  {
    heading: "محتوا"
  },
  {
    title: "مدیریت محتوا",
    icon: FileText,
    children: [
      { title: "مقالات", path: "/content/articles" },
      { title: "ویدیوها", path: "/content/videos" },
      { title: "نظرات کاربران", path: "/content/comments" },
      { title: "اعلان‌ها", path: "/content/notifications" }
    ]
  },

  // ================= Support =================
  {
    heading: "پشتیبانی"
  },
  {
    title: "پشتیبانی",
    icon: LifeBuoy,
    children: [
      { title: "تیکت‌ها", path: "/support/tickets" },
      { title: "سوالات متداول", path: "/support/faq" },
      { title: "گزارش مشکلات", path: "/support/issues" }
    ]
  },

  // ================= Settings & Security =================
  {
    heading: "سیستم"
  },
  {
    title: "تنظیمات",
    icon: Settings,
    children: [
      { title: "تنظیمات عمومی", path: "/settings/general" },
      { title: "تنظیمات آموزشی", path: "/settings/education" },
      { title: "اعلان‌ها", path: "/settings/notifications" }
    ]
  },
  {
    title: "امنیت",
    icon: Shield,
    children: [
      { title: "نقش‌ها و دسترسی‌ها", path: "/security/roles" },
      { title: "لاگ فعالیت‌ها", path: "/security/activity-log" },
      { title: "ورود دو مرحله‌ای", path: "/security/2fa" }
    ]
  }
];
