import { Badge } from '@repo/main/components/ui/badge';
import { Button } from '@repo/main/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@repo/main/components/ui/dropdown-menu';
import {
  BetweenHorizontalStart,
  Coffee,
  CreditCard,
  FileText,
  Settings,
  Shield,
  User,
  UserCircle,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

const t = {

  publicProfile: 'پروفایل عمومی',
  myProfile: 'پروفایل من',

  myAccount: 'حساب کاربری',
  getStarted: 'شروع کار',
  billing: 'صورتحساب',
  security: 'امنیت',
  membersAndRoles: 'اعضا و نقش‌ها',
  integrations: 'یکپارچه‌سازی‌ها',

  devForum: 'انجمن توسعه‌دهندگان',
  logout: 'خروج از حساب'
};

export function UserDropdownMenu({ trigger }: { trigger: ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 text-right"
        side="bottom"
        align="end"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <img
              className="w-9 h-9 rounded-full border border-border"
              src="/media/avatars/300-2.png"
              alt="آواتار کاربر"
            />

            <div className="flex flex-col">
              <Link
                href="/account/home/get-started"
                className="text-sm text-mono hover:text-primary font-semibold"
              >
                مهدی رزاقی
              </Link>

              <Link
                href="mailto:razzaghi.mahdi80@gmail.com"
                className="text-xs text-muted-foreground hover:text-primary"
              >
                razzaghi.mahdi80@gmail.com
              </Link>
            </div>
          </div>

        
        </div>

        <DropdownMenuSeparator />

        {/* Menu Items */}
        <DropdownMenuItem asChild>
          <Link
            href="/public-profile/profiles/default"
            className="flex items-center gap-2"
          >
            <UserCircle className="ml-2" />
            {t.publicProfile}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/account/home/user-profile"
            className="flex items-center gap-2"
          >
            <User className="ml-2" />
            {t.myProfile}
          </Link>
        </DropdownMenuItem>

        {/* My Account Submenu */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center gap-2">
            <Settings className="ml-2" />
            {t.myAccount}
          </DropdownMenuSubTrigger>

          <DropdownMenuSubContent className="w-48 text-right" >
            <DropdownMenuItem asChild>
              <Link
                href="/account/home/get-started"
                className="flex items-center gap-2"
              >
                <Coffee className="ml-2" />
                {t.getStarted}
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/account/home/user-profile"
                className="flex items-center gap-2"
              >
                <FileText className="ml-2" />
                {t.myProfile}
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/account/billing/basic"
                className="flex items-center gap-2"
              >
                <CreditCard className="ml-2" />
                {t.billing}
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/account/security/overview"
                className="flex items-center gap-2"
              >
                <Shield className="ml-2" />
                {t.security}
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/account/members/teams"
                className="flex items-center gap-2"
              >
                <Users className="ml-2" />
                {t.membersAndRoles}
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/account/integrations"
                className="flex items-center gap-2"
              >
                <BetweenHorizontalStart className="ml-2" />
                {t.integrations}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuItem asChild>
          <Link
            href="https://devs.keenthemes.com"
            className="flex items-center gap-2"
          >
            <FileText className="ml-2" />
            {t.devForum}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Footer */}
        <div className="p-2 mt-1">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => console.log('logout')}
          >
            {t.logout}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
