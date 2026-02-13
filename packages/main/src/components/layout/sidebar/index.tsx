'use client';

import { BuildSidebarMenuItem } from './build-menu';
import { MenuConfig } from './types';

export function SidebarMenu({ MENU_SIDEBAR, SIDEBAR_WIDTH, logoComponents }: { MENU_SIDEBAR: MenuConfig, SIDEBAR_WIDTH: number, logoComponents: React.ReactNode }) {


  return (
    <aside
      className="fixed top-0 right-0 h-screen  bg-background z-40"
      style={{ width: SIDEBAR_WIDTH }}
    >
      {/* Logo / Title */}
        {logoComponents}

      {/* Menu */}
      <div className="h-[calc(100%-4rem)] overflow-y-auto scrollbar-minimal p-4">
        <BuildSidebarMenuItem MENU_SIDEBAR={MENU_SIDEBAR} />
      </div>
    </aside>
  );
}
