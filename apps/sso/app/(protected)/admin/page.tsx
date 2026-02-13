"use client"
import { EarningsChart } from '../../components/partials/earning-schart';

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

    </div>
  )
}

export default page