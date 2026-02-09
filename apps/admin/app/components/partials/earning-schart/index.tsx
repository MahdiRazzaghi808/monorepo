'use client';

import { ApexOptions } from 'apexcharts';
import ApexChart from 'react-apexcharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/main/components/ui/card';
import { Label } from '@repo/main/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@repo/main/components/ui/select';
import { Switch } from '@repo/main/components/ui/switch';
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
          : (val) => `${val.toLocaleString('fa-IR')} هزار`,
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
            <div class="text-sm text-secondary-foreground">
              ${month} ${title}
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
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>

        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <Label htmlFor="ref-only" className="text-sm">
              فقط ارجاع‌ها
            </Label>
            <Switch id="ref-only" size="sm" />
          </div>

          <Select defaultValue="12">
            <SelectTrigger className="w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 ماه</SelectItem>
              <SelectItem value="3">3 ماه</SelectItem>
              <SelectItem value="6">6 ماه</SelectItem>
              <SelectItem value="12">12 ماه</SelectItem>
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
