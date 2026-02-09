import { useIsMobile } from '../../hooks/use-mobile';
import { MenuConfig } from './sidebar/types';
import { SidebarMenu } from './sidebar';
import Header from './header';

export function MainLayout({
    children,
    sidebarMenuComp,
}: {
    children: React.ReactNode;
    sidebarMenuComp: MenuConfig;
}) {
    const isMobile = useIsMobile();

    return (
        <div className="flex h-screen w-full [&_.container-fluid]:px-6 bg-background">
            {!isMobile &&

                <div className='w-90'>
                    <SidebarMenu MENU_SIDEBAR={sidebarMenuComp} />
                </div>
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