import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@repo/main/components/ui/breadcrumb';

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}


interface HeaderTitleProps {
  title: string;
  breadcrumbs: BreadcrumbItemType[];
}

export function Header({ title, breadcrumbs }: HeaderTitleProps) {
  return (
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

  );
}
