import { useIsMobile } from '../../hooks/use-mobile';
import { MenuConfig } from './sidebar/types';
import { SidebarMenu } from './sidebar';
import Header from './header';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function MainLayout({
    children,
    sidebarMenuComp,
}: {
    children: React.ReactNode;
    sidebarMenuComp: MenuConfig;
}) {
    const isMobile = useIsMobile();
    console.log(isMobile);

    return (
        <div className="flex w-full [&_.container-fluid]:px-6 bg-background min-h-screen">
            {!isMobile &&

                <aside className="w-90 h-screen flex flex-col">
                    <div className="py-4 w-full flex items-center justify-center text-muted-foreground F">
                        <GraduationCap className="w-10 h-10 " />
                        <p className='font-bold text-xl text-center '>
                            سامانه آموزش
                        </p>
                    </div>
                    <div className="flex-1 overflow-y-auto  scrollbar-minimal">
                        <SidebarMenu MENU_SIDEBAR={sidebarMenuComp} />
                    </div>
                </aside>

            }

            <div className="w-full px-6" >
                <Header MENU_SIDEBAR={sidebarMenuComp} />


                <main
                    className="grow-full flex-1 pt-(--header-height-mobile) pb-5 lg:ps-(--sidebar-width) lg:pt-(--header-height) "
                    role="content"
                >
                    {children}
                </main>
            </div>
        </div>
    );
}