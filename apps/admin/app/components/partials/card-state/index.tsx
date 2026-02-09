import { Fragment } from 'react';
import { Card, CardContent } from '@repo/main/components/ui/card';
import type { IChannelStatsItems, IChannelStatsItem } from './props';
import { toAbsoluteUrl } from '@repo/main/utils/toAbsoluteUrl'
interface ChannelStatsProps {
  items: IChannelStatsItems;
}

const ChannelStats = ({ items }: ChannelStatsProps) => {
  const renderItem = (item: IChannelStatsItem, index: number) => {
    return (
      <Card key={index}>
        <CardContent className="p-0 flex flex-col justify-between gap-6 h-full bg-cover rtl:bg-[left_top_-1.7rem] bg-[right_top_-1.7rem] bg-no-repeat channel-stats-bg">
          {item.logoDark ? (
            <>
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
                className="dark:hidden w-7 mt-4 ms-5"
                alt=""
              />
              <img
                src={toAbsoluteUrl(`/media/brand-logos/${item.logoDark}`)}
                className="light:hidden w-7 mt-4 ms-5"
                alt=""
              />
            </>
          ) : (
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
              className="w-7 mt-4 ms-5"
              alt=""
            />
          )}

          <div className="flex flex-col gap-1 pb-4 px-5">
            <span className="text-3xl font-semibold text-mono">
              {item.info}
            </span>
            <span className="text-sm font-normal text-muted-foreground">
              {item.desc}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Fragment>
      <style>
        {`
          .channel-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3.png')}');
          }
          .dark .channel-stats-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1600/bg-3-dark.png')}');
          }
        `}
      </style>

      {items.map(renderItem)}
    </Fragment>
  );
};

export { ChannelStats };
