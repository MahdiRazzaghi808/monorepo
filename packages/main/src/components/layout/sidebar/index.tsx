'use client';

import { GraduationCap } from 'lucide-react';
import { BuildSidebarMenuItem } from './build-menu';
import { MenuConfig } from './types';

export function SidebarMenu({ MENU_SIDEBAR, SIDEBAR_WIDTH }: { MENU_SIDEBAR: MenuConfig, SIDEBAR_WIDTH: number }) {


  return (
    <aside
      className="fixed top-0 right-0 h-screen  bg-background z-40"
      style={{ width: SIDEBAR_WIDTH }}
    >
      {/* Logo / Title */}
      <div className="h-16 flex items-center justify-center gap-2">
        <GraduationCap className="w-8 h-8 text-primary" />
        <p className="font-bold text-lg">
          سامانه آموزش
        </p>
      </div>

      {/* Menu */}
      <div className="h-[calc(100%-4rem)] overflow-y-auto scrollbar-minimal p-4">
        <BuildSidebarMenuItem MENU_SIDEBAR={MENU_SIDEBAR} />
      </div>
    </aside>
  );
}
