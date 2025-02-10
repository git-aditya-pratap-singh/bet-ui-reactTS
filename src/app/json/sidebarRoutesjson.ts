import "../../assets/scss/_appOutletBarIcon.scss";

const sidebarRoutes = ( routesName : string): string | null => {
    const routesFetch: Record<string, string> = {
        'Live Events': 'Inplay',
        'Upcoming Events': 'upcoming'
    };
    return routesFetch[routesName] || null;
};

const sidebarRoutesImgClass = (routesName: string): string | null => {
    const routesFetch: Record<string, string> = {
        'Live Events': 'liveEvents',
        'Upcoming Events': 'upcoming',
        'Cricket': 'iconCricket',
        'Tennis': 'iconTennis',
        'FootBall': 'icon-football',
        'Jackpot': 'icon-jackpot',
        'Cricket Casino': 'icon-casino',
        'Election': 'icon-election',
    };
    return routesFetch[routesName] || null;
}

export default sidebarRoutes;
export {sidebarRoutesImgClass}
