import React from 'react'
import { IChannelStatsItems } from '../../components/partials/card-state/props';
import { ChannelStats } from '../../components/partials/card-state';
import { EarningsChart } from '../../components/partials/earning-schart';

const statsItems: IChannelStatsItems = [
  {
    logo: 'linkedin-2.svg',
    info: '9.3K',
    desc: 'همکاران فوق‌العاده',
  },
  {
    logo: 'youtube-2.svg',
    info: '24K',
    desc: 'بازدید آموزش‌ها',
  },
  {
    logo: 'instagram-03.svg',
    info: '608',
    desc: 'دنبال‌کننده جدید',
  },
  {
    logo: 'tiktok.svg',
    logoDark: 'tiktok-dark.svg',
    info: '2.5K',
    desc: 'مخاطبان لایو',
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
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <ChannelStats items={statsItems} />
      </div>

      <div className='mt-6'>
        <EarningsChart
          title="درآمد"
          categories={jalaliMonths}
          series={[
            {
              name: 'درآمد',
              data: [58, 64, 52, 45, 42, 38, 45, 53, 56, 65, 75, 85],
            },
          ]}
        />
      </div>

    </div>
  )
}

export default page