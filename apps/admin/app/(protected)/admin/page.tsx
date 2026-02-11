"use client"
import React from 'react'
import { IChannelStatsItems } from '../../components/partials/card-state/props';
import { ChannelStats } from '../../components/partials/card-state';
import { EarningsChart } from '../../components/partials/earning-schart';

import { Users, GraduationCap, BookOpen, Video } from 'lucide-react';
import { Integrations } from '../../components/partials/integrations';

const statsItems: IChannelStatsItems = [
  {
    icon: <Users />,
    info: '450',
    desc: 'دانشجویان ثبت‌نام شده',
  },
  {
    icon: <GraduationCap />,
    info: '35',
    desc: 'دوره‌های معتبر',
  },
  {
    icon: <BookOpen />,
    info: '120',
    desc: 'درس‌های منتشر شده',
  },
  {
    icon: <Video />,
    info: '1.2K',
    desc: 'بازدید ویدیوها',
  },
];



const jalaliMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

function page() {
  return (
    <div className='flex flex-col gap-4'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <ChannelStats items={statsItems} />
      </div>

      <div>
        <EarningsChart
          title="فروش"
          categories={jalaliMonths}
          series={[
            {
              name: 'فروش',
              data: [58, 64, 52, 45, 42, 38, 45, 53, 56, 65, 75, 85],
            },
          ]}
        />
      </div>


      <div>
        <Integrations />
      </div>
    </div>
  )
}

export default page