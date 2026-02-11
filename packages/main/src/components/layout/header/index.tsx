import { Button } from '@repo/main/components/ui/button';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@repo/main/components/ui/sheet';
import { useIsMobile } from '@repo/main/hooks/use-mobile';
import { toAbsoluteUrl } from '@repo/main/utils/toAbsoluteUrl';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SidebarMenu } from '../sidebar';
import { MenuConfig } from '../sidebar/types';
import { HeaderTitle } from './header-title';


function Header({ MENU_SIDEBAR, SIDEBAR_WIDTH }: { MENU_SIDEBAR: MenuConfig, SIDEBAR_WIDTH: number }) {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);


  return (
    <header className='my-4 pb-2.5 border-b border-gray-700 '>
      <div className="container-fluid flex grow items-center justify-between gap-2">
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
                    <SidebarMenu MENU_SIDEBAR={MENU_SIDEBAR} SIDEBAR_WIDTH={SIDEBAR_WIDTH} />
                  </SheetBody>
                </SheetContent>
              </Sheet>
            </div>

            <Link href={process.env.NEXT_PUBLIC_WEBSITE_FRONT_URL || ''}>
              <Image
                src={toAbsoluteUrl('/images/logo/mini.svg')}
                alt="Logo"
                width={35}
                height={35}
              />
            </Link>

            <div className="flex-1" />
          </div>
        )}

        {!isMobile && <HeaderTitle
          title="داشبورد"
          breadcrumbs={[
            { label: 'خانه', href: '/' },
            { label: 'حساب کاربری', href: '/account' },
            { label: 'کاربر' },
          ]}
        />
        }
      </div>
    </header>
  );
}

export default Header