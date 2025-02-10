import React, { useState } from "react";
import { SidebarState } from "../../../types/sidebar.interface";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { func_appOutlet } from "../../../redux/slices/StateSlice";
import sidebarData from "../../../json/sidebarjson";
import sidebarRoutes from "../../../json/sidebarRoutesjson";
import { sidebarRoutesImgClass } from "../../../json/sidebarRoutesjson";
import "../../../../assets/scss/_sidebar.scss";

const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sidebarState = useSelector((store: any) => store.centerliazedStore.open_sidebar);

    const [sidebar, setSidebar] = useState<SidebarState>({
        "All Sports": true,
        "Casino": true
    });

    const toggleSidebarItem = (itemName: string): void => {
        setSidebar((prevSidebar) => ({
            ...prevSidebar,
            [itemName]: !prevSidebar[itemName],
        }));
    };

    const redirectToPage = (name: string) => {
        const routeName = sidebarRoutes(name);
        const routesIcon = sidebarRoutesImgClass(name);
        dispatch(func_appOutlet({ name: name, outletIcon: routesIcon, apiData: null }));
        navigate(`/sport/${routeName}`)
    }

    const redirectToGamepage = (name: string) => {
        const routesIcon = sidebarRoutesImgClass(name);
        dispatch(func_appOutlet({ name: name, outletIcon: routesIcon, apiData: null }));
        navigate(`/sport/${name}`)
    }

    return (
        <section className={`sidebar-cover ${sidebarState && 'sidebar-close '} `}>
            <ul className="firstUl">
                {
                    sidebarData.map((items) => {
                        return (
                            <React.Fragment key={items?.id}>
                                <li key={`parent-${items?.id}`}
                                    onClick={(items?.id === 1 || items?.id === 2) ? () => redirectToPage(items?.name) : () => toggleSidebarItem(items?.name)}>
                                    <span></span>
                                    <label>{items?.name}</label>

                                    {(items?.id == 3 || items?.id == 4) && <svg 
                                        width="14" height="14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                                        className={`svg-inline--fa fa-chevron-down ${sidebar[items?.name] && 'rotate-180'}`} role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 
                                    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 
                                    32.8 0 45.3l192 192z"></path>
                                    </svg>}

                                </li>
                                {(items?.subMenu.length > 0 && sidebar[items?.name]) && <ul className="subMenuSide">
                                    {
                                        items?.subMenu.map((value) => {
                                            return (
                                                <li key={value?.id} onClick={() => redirectToGamepage(value?.subName)}>
                                                    <p className={`subIcon ${value.imageClass} ml-6`}></p>
                                                    <label>{value?.subName}</label>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </section>
    )
}
export default Sidebar;