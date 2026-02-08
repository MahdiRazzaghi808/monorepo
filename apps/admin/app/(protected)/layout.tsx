'use client';
import { MainLayout } from '@repo/main/components/layout/index';
import { MENU_SIDEBAR } from '../components/layout/menu';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout sidebarMenuComp={MENU_SIDEBAR}>{children}</MainLayout>;
}
