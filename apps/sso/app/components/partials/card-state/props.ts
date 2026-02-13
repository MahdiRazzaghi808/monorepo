import { ReactNode } from "react";

export interface IChannelStatsItem {
  info: string;
  desc: string;
  icon?: ReactNode;
}
export type IChannelStatsItems = IChannelStatsItem[];
