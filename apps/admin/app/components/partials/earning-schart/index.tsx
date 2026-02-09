'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/main/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/main/components/ui/select';
import { ApexOptions } from 'apexcharts';
import ApexChart from 'react-apexcharts';
import type { EarningsChartProps } from './props';

const EarningsChart = ({
  title,
  series,
  categories,
  yAxisFormatter,
}: EarningsChartProps) => {
  const options: ApexOptions = {
    series,
    chart: {
      height: 250,
      type: 'area',
      toolbar: { show: false },
      fontFamily: 'inherit',
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['var(--color-primary)'],
    },
    xaxis: {
      categories,
      labels: {
        style: {
          fontSize: '12px',
          colors: 'var(--color-secondary-foreground)',
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: yAxisFormatter
          ? yAxisFormatter
          : (val) => `\u200E${val.toLocaleString('fa-IR')}\u200E هزار`,
        style: {
          fontSize: '12px',
          colors: 'var(--color-secondary-foreground)',
        },
      },




    },
    tooltip: {
      custom({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex] * 1000;
        const month = categories[dataPointIndex];

        return `
  <div class="flex flex-col gap-2 p-3">
    <div class="text-sm opacity-70">
      ${month} 
    </div>
    <div class="font-semibold text-base">
      ${value.toLocaleString('fa-IR')} تومان
    </div>
  </div>
`;

      },
    },
    markers: {
      size: 0,
      strokeWidth: 4,
      strokeColors: 'var(--color-primary)',
      hover: { size: 7 },
    },
    fill: {
      gradient: {
        opacityFrom: 0.3,
        opacityTo: 0,
      },
    },
    grid: {
      borderColor: 'var(--color-border)',
      strokeDashArray: 5,
    },
  };

  return (
    <Card className="h-full" >
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>

        <div className="flex gap-5">

          <Select defaultValue="12">
            <SelectTrigger className="w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">
                ماه <span dir="ltr">1</span>
              </SelectItem>

              <SelectItem value="3">
                ماه <span dir="ltr">3</span>
              </SelectItem>

              <SelectItem value="6">
                ماه  <span dir="ltr">6</span>
              </SelectItem>

              <SelectItem value="12">
                ماه <span dir="ltr">12</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="px-3 py-1">
        <ApexChart
          options={options}
          series={series}
          type="area"
          height={250}
        />
      </CardContent>
    </Card>
  );
};

export { EarningsChart };

