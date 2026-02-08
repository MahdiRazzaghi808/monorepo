"use client";
import { LayoutGrid, Users, Settings, Shield } from "lucide-react";
import { MenuConfig } from "@repo/main/components/layout/sidebar-base/types";

export const MENU_SIDEBAR: MenuConfig = [
  {
    title: "داشبورد",
    icon: LayoutGrid,
    children: [
      { title: "صفحه اصلی", path: "/dashboard" },
      { title: "گزارش‌ها", path: "/dashboard/reports" },
    ],
  },
  {
    heading: "کاربران",
  },
  {
    title: "مدیریت کاربران",
    icon: Users,
    children: [
      { title: "لیست کاربران", path: "/users/list" },
      { title: "نقش‌ها", path: "/users/roles" },
    ],
  },
  {
    title: "حساب کاربری",
    icon: Settings,
    children: [
      { title: "پروفایل", path: "/account/profile" },
      { title: "تنظیمات", path: "/account/settings" },
    ],
  },
  {
    title: "احراز هویت",
    icon: Shield,
    children: [
      { title: "ورود", path: "/auth/signin" },
      { title: "ثبت نام", path: "/auth/signup" },
    ],
  },
];
