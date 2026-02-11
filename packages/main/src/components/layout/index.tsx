import { useIsMobile } from '../../hooks/use-mobile';
import Header from './header';
import { SidebarMenu } from './sidebar';
import { MenuConfig } from './sidebar/types';

const SIDEBAR_WIDTH = 360; // px

export function MainLayout({
    children,
    sidebarMenuComp,
}: {
    children: React.ReactNode;
    sidebarMenuComp: MenuConfig;
}) {
    const isMobile = useIsMobile();

    return (
        <div className="flex w-full min-h-screen bg-background">

            {/* ===== Sidebar (Desktop Only) ===== */}
            {!isMobile && (
                <SidebarMenu MENU_SIDEBAR={sidebarMenuComp} SIDEBAR_WIDTH={SIDEBAR_WIDTH} />
            )}

            {/* ===== Content Wrapper ===== */}
            <div
                className="flex flex-col flex-1 w-full  px-6"
                style={{
                    marginRight: !isMobile ? SIDEBAR_WIDTH : 0,
                }}
            >
                {/* Header */}
                <Header MENU_SIDEBAR={sidebarMenuComp}  SIDEBAR_WIDTH={SIDEBAR_WIDTH} />

                {/* Main Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
