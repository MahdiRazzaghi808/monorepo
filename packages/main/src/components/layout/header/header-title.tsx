import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/main/components/ui/breadcrumb';
import { UserDropdownMenu } from './user-dropdown-menu';

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}


interface HeaderTitleProps {
  title: string;
  breadcrumbs: BreadcrumbItemType[];
}

export function HeaderTitle({ title, breadcrumbs }: HeaderTitleProps) {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className="mb-5 flex flex-col items-start gap-0.5 lg:mb-0 lg:px-0">
        <h1 className="text-xl font-semibold text-white mb-2">{title}</h1>

        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <div key={index} className="flex items-center">
                  <BreadcrumbItem>
                    {isLast || !item.href ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && (
                    <BreadcrumbSeparator className="text-muted-foreground text-xs mx-1">
                      /
                    </BreadcrumbSeparator>
                  )}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

      </div>


      <div>
        <UserDropdownMenu trigger={<img
          className="w-9 h-9 rounded-full border border-border"
          src="/media/avatars/300-2.png"
          alt="آواتار کاربر"
        />} />
      </div>
    </div>
  );
}
