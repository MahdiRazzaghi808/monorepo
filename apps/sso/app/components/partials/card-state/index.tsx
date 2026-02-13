import { Fragment, ReactNode } from 'react';
import { Card, CardContent } from '@repo/main/components/ui/card';
import type { IChannelStatsItem, IChannelStatsItems } from './props';

interface ChannelStatsProps {
  items: IChannelStatsItems;
}

const ChannelStats = ({ items }: ChannelStatsProps) => {
  const renderStatItem = (item: IChannelStatsItem, index: number) => (
    <Card
      key={index}
      className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden"
    >
      <CardContent
        className="
          py-6 
          flex 
          items-center 
          justify-between 
          gap-6 
          h-full 
          bg-cover 
          bg-no-repeat 
          channel-stats-bg
        "
      >
        {/* Info Section */}
        <div className="flex flex-col gap-1 pb-4 px-5">
          <span className="text-3xl font-semibold text-mono">{item.info}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {item.desc}
          </span>
        </div>

        {/* Icon Section */}
        {item.icon && (
          <div className="w-10 h-10 scale-125">{item.icon as ReactNode}</div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Fragment>
      <style>{`
        .channel-stats-bg {
          background-image: url('/bg-3-dark.png');
        }
      `}</style>

      {items.map(renderStatItem)}
    </Fragment>
  );
};

export { ChannelStats };