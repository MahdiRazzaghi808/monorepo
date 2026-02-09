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


function Header({ MENU_SIDEBAR }: { MENU_SIDEBAR: MenuConfig }) {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);


  return (
    <header className='my-4'>
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
                  className="w-96 gap-0 p-0"
                  side="left"
                  close={false}
                >
                  <SheetHeader className="space-y-0 p-0" />
                  <SheetBody className="flex grow p-0">
                    <SidebarMenu MENU_SIDEBAR={MENU_SIDEBAR} />
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
          title="به‌روزرسانی‌ها"
          breadcrumbs={[
            { label: 'خانه', href: '/' },
            { label: 'حساب کاربری', href: '/account' },
            { label: 'به‌روزرسانی‌ها' },
          ]}
        />
        }
      </div>
    </header>
  );
}

export default Header