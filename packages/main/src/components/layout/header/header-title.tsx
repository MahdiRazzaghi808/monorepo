import { UserDropdownMenu } from './user-dropdown-menu';
interface HeaderTitleProps {
  customHeader?: React.ReactNode;
}

export function HeaderTitle({ customHeader }: HeaderTitleProps) {
  return (
    <div className='w-full flex items-center justify-between'>
      {customHeader}
      <div>
        <UserDropdownMenu trigger={<img
          className="w-9 h-9 rounded-full border border-border cursor-pointer"
          src="https://avatars.githubusercontent.com/u/103171417?v=4"
          alt="آواتار کاربر"
        />} />
      </div>
    </div>
  );
}
