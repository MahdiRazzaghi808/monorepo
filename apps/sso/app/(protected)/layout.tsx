'use client';
import { MainLayout } from '@repo/main/components/layout/index';
import { MENU_SIDEBAR } from '../components/layout/menu';
import { Header } from '../components/layout/header';
import { GraduationCap } from 'lucide-react';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout
    sidebarMenuComp={MENU_SIDEBAR}
    logoComponents={
      <div className="h-16 flex items-center justify-center gap-2">
        <GraduationCap className="w-8 h-8 text-primary" />
        <p className="font-bold text-lg">
          سامانه مدیریت کاربران
        </p>
      </div>

    }
    customHeader={
      <Header title="داشبورد کاربران"
        breadcrumbs={[{ label: 'خانه', href: '/' }, { label: 'حساب کاربری', href: '/account' }, { label: 'کاربر' }]}
      />}
  >
    {children}
  </MainLayout>;
}
