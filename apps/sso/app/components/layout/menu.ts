"use client";

import {
  LayoutGrid,
  Settings,
  Shield,
  UserCog,
  Users
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
  {
    heading: "کاربران"
  },
  {
    title: "دانشجویان",
    icon: Users,
    children: [
      { title: "لیست دانشجویان", path: "/students/list" },
      { title: "ثبت‌نام جدید", path: "/students/create" },
      { title: "وضعیت پیشرفت", path: "/students/progress" },
      { title: "مدارک دانشجویان", path: "/students/certificates" }
    ]
  },
  {
    title: "مدرسین",
    icon: UserCog,
    children: [
      { title: "لیست مدرسین", path: "/instructors/list" },
      { title: "افزودن مدرس", path: "/instructors/create" },
      { title: "دروس ارائه‌شده", path: "/instructors/courses" },
      { title: "درآمد مدرسین", path: "/instructors/earnings" }
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
