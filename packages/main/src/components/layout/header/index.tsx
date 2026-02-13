import { Button } from '@repo/main/components/ui/button';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@repo/main/components/ui/sheet';
import { useIsMobile } from '@repo/main/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { MultiAppSwitcher } from '../multi-app-switcher';
import { SidebarMenu } from '../sidebar';
import { MenuConfig } from '../sidebar/types';
import { HeaderTitle } from './header-title';


function Header({ MENU_SIDEBAR, SIDEBAR_WIDTH, customHeader, logoComponents }: { MENU_SIDEBAR: MenuConfig, SIDEBAR_WIDTH: number, customHeader: React.ReactNode, logoComponents: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);


  return (
    <header className='my-4 pb-2.5 border-b border-gray-700 '>
      <div className="container-fluid flex grow items-center justify-between gap-2">
        <MultiAppSwitcher />

        {/* Mobile sidebar toggle */}
        {isMobile && (
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex-1">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" mode="icon" size="sm">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  className="gap-0 p-0"
                  style={{ width: SIDEBAR_WIDTH }}

                  side="left"
                  close={false}
                >
                  <SheetHeader className="space-y-0 p-0" />
                  <SheetBody className="">
                    <SidebarMenu MENU_SIDEBAR={MENU_SIDEBAR} SIDEBAR_WIDTH={SIDEBAR_WIDTH} logoComponents={logoComponents} />
                  </SheetBody>
                </SheetContent>
              </Sheet>
            </div>

            {logoComponents}

            <div className="flex-1" />
          </div>
        )}

        {!isMobile && <HeaderTitle customHeader={customHeader}
        />
        }
      </div>
    </header>
  );
}

export default Header