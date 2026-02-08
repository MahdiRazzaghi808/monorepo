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
        <div className="flex h-screen w-full [&_.container-fluid]:px-6">
            {!isMobile &&

                <div className='w-90'>
                    <SidebarMenu MENU_SIDEBAR={sidebarMenuComp} />
                </div>
            }

            <div className="flex w-full min-w-0 flex-1 flex-col">
                <Header MENU_SIDEBAR={sidebarMenuComp} />

                
                <main
                    className="grow-full flex-1 pt-(--header-height-mobile) pb-5 lg:ps-(--sidebar-width) lg:pt-(--header-height)"
                    role="content"
                >
                    {children}
                </main>
            </div>
        </div>
    );
}