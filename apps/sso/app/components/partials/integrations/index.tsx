import Link from 'next/link';
import { Settings } from 'lucide-react';
import { Button } from '@repo/main/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/main/components/ui/card';
import { Switch } from '@repo/main/components/ui/switch';
import { toAbsoluteUrl } from '@repo/main/utils/toAbsoluteUrl';

interface IIntegrationsItem {
  logo: string;
  title: string;
  email: string;
  description: string;
  checkbox: boolean;
}

type IIntegrationsItems = Array<IIntegrationsItem>;

const Integrations = () => {
  const items: IIntegrationsItems = [
    {
      logo: 'google-classroom.svg',
      title: 'Google Classroom',
      email: 'classroom@academy.com',
      description: 'اتصال به گوگل کلاس‌روم برای مدیریت کلاس‌ها و تکالیف دانشجویان.',
      checkbox: true,
    },
    {
      logo: 'zoom.svg',
      title: 'Zoom',
      email: 'live@academy.com',
      description: 'برگزاری کلاس‌های آنلاین، جلسات رفع اشکال و وبینارها.',
      checkbox: true,
    },
    {
      logo: 'telegram.svg',
      title: 'تلگرام',
      email: 'notify@academy.com',
      description: 'ارسال اطلاعیه‌ها و اعلان‌های دوره برای دانشجویان.',
      checkbox: false,
    },
    {
      logo: 'payment.svg',
      title: 'درگاه پرداخت',
      email: 'billing@academy.com',
      description: 'مدیریت پرداخت شهریه و خرید دوره‌های آموزشی.',
      checkbox: true,
    },
  ];

  const renderItem = (item: IIntegrationsItem, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between flex-wrap border border-border dark:bg-secondary-clarity rounded-xl gap-2 p-3.5"
      >
        <div className="flex items-center flex-wrap gap-3.5">
          <img
            src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
            className="size-8 shrink-0"
            alt={item.title}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 flex-wrap">
              <Link
                href="#"
                className="text-sm font-medium text-mono hover:text-primary-active"
              >
                {item.title}
              </Link>
              <span className="text-sm text-secondary-foreground">
                {item.email}
              </span>
            </div>
            <span className="text-sm font-medium text-secondary-foreground">
              {item.description}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-5">
          <Switch
            id={`integration-${index}`}
            size="sm"
            defaultChecked={item.checkbox}
          />
          <Button variant="ghost" mode="icon">
            <Settings size={18} />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader id="educational_integrations">
        <CardTitle>مدیریت سرویس‌های متصل</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-5 lg:gap-7.5 lg:py-7.5 py-5">
        <div className="grid gap-5">
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </CardContent>
    </Card>
  );
};

export { Integrations, type IIntegrationsItem, type IIntegrationsItems };
