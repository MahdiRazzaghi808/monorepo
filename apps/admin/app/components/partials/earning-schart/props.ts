export interface EarningsChartSeries {
    name: string;
    data: number[];
  }
  
  export interface EarningsChartProps {
    title: string;
    series: EarningsChartSeries[];
    categories: string[]; 
    yAxisFormatter?: (value: number) => string;
  }
  