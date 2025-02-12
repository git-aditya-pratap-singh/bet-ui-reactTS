import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../../assets/img/logo.png';
import headerNavigation from './headerNavigation';
import DropDownProfile from '../../subcomponents/DropDownProfile';
import SearchModels from "../../subcomponents/SearchModels";
import {sidebar, func_loginPopup, func_registrationPopup} from "../../../redux/slices/StateSlice";

import "../../../../assets/scss/_navBar.scss";
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const dispatch = useDispatch();
    const sidebarState = useSelector((store: any) => store.centerliazedStore.open_sidebar);

    const [toggle, setToggle] = useState(false);
    const [withdrawtoggle, setwithdrawToggle] = useState(false);
    const [searchToggle, setsearchToggle] = useState(false);
    const [active, setActive] = useState(1);
    const location = useLocation();
    console.log(location)

    return (
        <section className="app-header">

            { toggle && <DropDownProfile/>}
            {searchToggle && <SearchModels/>}

            <div className='nav-header'>
                <div className="nav-header-sectionA">
                    <button type="button" onClick={()=> dispatch(sidebar(!sidebarState))}
                    className="btn btn-sm ps-1 pe-2 me-2 fs-16 header-item vertical-menu-btn topnav-hamburger">
                        <span className={`hamburger-icon ${sidebarState && 'open'}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <div>
                        <img src={logo} width={120} height={120} alt="no avaliable images" />
                    </div>
                </div>

                <div className="nav-header-sectionB">
                    <ul>
                        {
                            headerNavigation.map((items) => {
                                return (
                                    <li key={items?.id} className={`${active == 1 ? 'active' : ''}`}>
                                        <span className="navIcon1" ></span>
                                        <label>{items?.name}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>

                <div className="nav-header-sectionC">

                    <button type="button" aria-haspopup="true" aria-expanded="false" onClick={()=>setwithdrawToggle(!withdrawtoggle)}
                        className="dropdown-toggle">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 9C14.25 9.41421 13.9142 9.75 13.5 9.75C13.0858 9.75 12.75 9.41421 12.75 9C12.75 8.58579 
                    13.0858 8.25 13.5 8.25C13.9142 8.25 14.25 8.58579 14.25 9Z" fill="white">
                            </path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.45769 2.4375H9.79231C11.1706 2.43749 12.2624 2.43748 13.1168 
                    2.55235C13.9961 2.67057 14.7078 2.91966 15.2691 3.48093C15.9624 4.17422 16.1833 5.10272 16.2635 6.30756C16.6964
                     6.49808 17.0233 6.90098 17.0594 7.41134C17.0626 7.45649 17.0625 7.50515 17.0625 7.55026C17.0625 7.55437 17.0625 
                     7.55845 17.0625 7.5625V10.4375C17.0625 10.4415 17.0625 10.4456 17.0625 10.4497C17.0625 10.4949 17.0626 10.5435 
                     17.0594 10.5887C17.0233 11.099 16.6964 11.5019 16.2635 11.6924C16.1833 12.8973 15.9624 13.8258 15.2691 
                     14.5191C14.7078 15.0803 13.9961 15.3294 13.1168 15.4476C12.2624 15.5625 11.1706 15.5625 9.79231 
                     15.5625H7.45769C6.07937 15.5625 4.98764 15.5625 4.13323 15.4476C3.25392 15.3294 2.54221 15.0803 1.98093 
                     14.5191C1.41966 13.9578 1.17057 13.2461 1.05235 12.3668C0.937479 11.5124 0.937488 10.4206 0.9375 
                     9.04231V8.95769C0.937488 7.57937 0.937479 6.48764 1.05235 5.63323C1.17057 4.75392 1.41966 4.04221 1.98093 
                     3.48093C2.5422 2.91966 3.25392 2.67057 4.13323 2.55235C4.98764 2.43748 6.07937 2.43749 7.45769 2.4375ZM15.1259 
                     11.8125H13.6731C12.0642 11.8125 10.6875 10.5918 10.6875 9C10.6875 7.40817 12.0642 6.1875 13.6731 
                     6.1875H15.1259C15.0406 5.18141 14.8475 4.65033 14.4736 4.27643C14.1562 3.95902 13.7214 3.76877 12.9669 
                     3.66732C12.1961 3.5637 11.1801 3.5625 9.75 3.5625H7.5C6.06988 3.5625 5.05388 3.5637 4.28314 3.66732C3.52857 
                     3.76877 3.09383 3.95902 2.77643 4.27643C2.45902 4.59384 2.26877 5.02857 2.16732 5.78314C2.0637 6.55389 2.0625 
                     7.56989 2.0625 9C2.0625 10.4301 2.0637 11.4461 2.16732 12.2169C2.26877 12.9714 2.45902 13.4062 2.77643 
                     13.7236C3.09384 14.041 3.52857 14.2312 4.28314 14.3327C5.05389 14.4363 6.06989 14.4375 7.5 14.4375H9.75C11.1801 
                     14.4375 12.1961 14.4363 12.9669 14.3327C13.7214 14.2312 14.1562 14.041 14.4736 13.7236C14.8475 13.3497 15.0406 
                     12.8186 15.1259 11.8125ZM3.9375 6C3.9375 5.68934 4.18934 5.4375 4.5 5.4375H7.5C7.81066 5.4375 8.0625 5.68934 
                     8.0625 6C8.0625 6.31066 7.81066 6.5625 7.5 6.5625H4.5C4.18934 6.5625 3.9375 6.31066 3.9375 6ZM15.6926 
                     7.31267C15.6774 7.31251 15.6574 7.3125 15.625 7.3125H13.6731C12.6055 7.3125 11.8125 8.10655 11.8125 9C11.8125 
                     9.89345 12.6055 10.6875 13.6731 10.6875H15.625C15.6574 10.6875 15.6774 10.6875 15.6926 10.6873C15.702 10.6872 
                     15.7069 10.6871 15.7093 10.687L15.711 10.6869C15.8656 10.6775 15.9321 10.5732 15.9371 10.5104C15.9371 10.5104 
                     15.9372 10.5057 15.9373 10.4989C15.9375 10.4856 15.9375 10.4679 15.9375 10.4375V7.5625C15.9375 7.53212 15.9375 
                     7.51438 15.9373 7.50107C15.9372 7.49429 15.9371 7.48957 15.9371 7.48957C15.932 7.42682 15.8655 7.32248 15.711 
                     7.31307C15.711 7.31307 15.7073 7.31282 15.6926 7.31267Z" fill="white">
                            </path>
                        </svg>
                        <span className="text-white">0.00</span>
                    </button>

                    { withdrawtoggle && <Withdrawl/>}

                    {/* <button className="theme-btn depositBtn">
                        <span className='icon1'></span>
                        <label>Deposit</label>
                    </button>
                    <button className="theme-btn withdrawalBtn">
                        <span className='icon2'></span>
                        <label>Withdrawal</label>
                    </button> */}

                    <button className="theme-btn login" onClick={()=>dispatch(func_loginPopup(true))}>
                        <span className='icon1'></span>
                        <label>Login</label>
                    </button>
                    <button className="theme-btn register" onClick={()=> dispatch(func_registrationPopup(true))}>
                        <span className='icon1'></span>
                        <label>Register</label>
                    </button>

                    <div className="svgIcon" onClick={()=> setsearchToggle(!searchToggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                            <path className="s-bg" d="M0 5.76562C0 2.58136 2.68629 0 6 0H24C27.3137 0 30 2.58136 30 5.76562V23.0625C30 26.2468 27.3137 28.8281 
                            24 28.8281H6C2.68629 28.8281 0 26.2468 0 23.0625V5.76562Z" fill="#1A1E24"></path><path d="M10.2319 8.876C11.8073 9.79842 13.8612 
                            8.98088 14.2964 7.25817L12.3528 6.80477C12.2372 7.26266 11.6913 7.47996 11.2725 7.23478L10.2319 8.876ZM9.23682 9.83217C8.84186 
                            9.20929 9.58366 8.49647 10.2319 8.876L11.2725 7.23478C8.83376 5.80688 6.04292 8.48869 7.52887 10.8322L9.23682 9.83217ZM7.55322 
                            13.7379C9.34596 13.3197 10.1967 11.346 9.23682 9.83217L7.52887 10.8322C7.78401 11.2346 7.5579 11.7592 7.08139 11.8703L7.55322 
                            13.7379ZM7.55322 15.0902C6.81558 14.9181 6.8156 13.91 7.55322 13.7379L7.08139 11.8703C4.3062 12.5177 4.3062 16.3104 7.08139 
                            16.9578L7.55322 15.0902ZM9.23682 18.9959C10.1967 17.482 9.34595 15.5084 7.55322 15.0902L7.08139 16.9578C7.5579 17.0689 7.78403 
                            17.5936 7.5289 17.996L9.23682 18.9959ZM10.2319 19.9521C9.58366 20.3316 8.84186 19.6189 9.23682 18.9959L7.5289 17.996C6.04294 20.3394 
                            8.83376 23.0213 11.2725 21.5933L10.2319 19.9521ZM14.2964 21.57C13.8612 19.8472 11.8073 19.0297 10.2319 
                            19.9521L11.2725 21.5933C11.6913 21.3482 12.2372 21.5655 12.3528 22.0233L14.2964 21.57ZM15.7036 21.57C15.5245 
                            22.2788 14.4755 22.2788 14.2964 21.57L12.3528 22.0233C13.0266 24.6901 16.9734 24.6901 17.6471 22.0233L15.7036 
                            21.57ZM19.7681 19.9521C18.1927 19.0297 16.1388 19.8472 15.7036 21.57L17.6471 22.0233C17.7628 21.5655 18.3088 
                            21.3482 18.7275 21.5933L19.7681 19.9521ZM20.7632 18.9959C21.1581 19.6189 20.4164 20.3316 19.7681 
                            19.9521L18.7275 21.5933C21.1662 23.0213 23.9571 20.3394 22.4711 17.996L20.7632 18.9959ZM22.4468 15.0902C20.654
                             15.5084 19.8033 17.482 20.7632 18.9959L22.4711 17.996C22.216 17.5936 22.4421 17.0689 22.9186 16.9578L22.4468
                              15.0902ZM22.4468 13.7379C23.1844 13.91 23.1844 14.9181 22.4468 15.0902L22.9186 16.9578C25.6938 16.3104
                               25.6938 12.5177 22.9186 11.8703L22.4468 13.7379ZM20.7632 9.83217C19.8033 11.346 20.654 13.3197 22.4468 
                               13.7379L22.9186 11.8703C22.4421 11.7592 22.216 11.2346 22.4711 10.8322L20.7632 9.83217ZM19.7681 
                               8.87601C20.4164 8.49647 21.1581 9.20928 20.7632 9.83217L22.4711 10.8322C23.9571 8.48869 21.1662 5.80688 
                               18.7275 7.23478L19.7681 8.87601ZM15.7036 7.25818C16.1388 8.98088 18.1927 9.79842 19.7681 8.87601L18.7275 
                               7.23478C18.3088 7.47996 17.7628 7.26267 17.6471 6.80477L15.7036 7.25818ZM17.6471 6.80477C16.9734 4.13799 
                               13.0266 4.13799 12.3528 6.80477L14.2964 7.25817C14.4755 6.54937 15.5245 6.54936 15.7036 7.25818L17.6471 
                               6.80477ZM17 14.4141C17 15.4755 16.1046 16.3359 15 16.3359V18.2578C17.2091 18.2578 19 16.5369 19 
                               14.4141H17ZM15 16.3359C13.8954 16.3359 13 15.4755 13 14.4141H11C11 16.5369 12.7909 18.2578 15 
                               18.2578V16.3359ZM13 14.4141C13 13.3526 13.8954 12.4922 15 12.4922V10.5703C12.7909 10.5703 11 12.2912 11 
                               14.4141H13ZM15 12.4922C16.1046 12.4922 17 13.3526 17 14.4141H19C19 12.2912 17.2091 10.5703 15 10.5703V12.4922Z"
                                fill="white">
                            </path>
                        </svg>
                    </div>

                    <div className='svgIcon' onClick={()=> setToggle(!toggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 
                   15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round"></path><path id="userhead" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 
                   3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                            </path>
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    )
}

const Withdrawl = ()=>{
    return(
        <section className='withdraw'>
            <div className='flex items-center gap-1 text-[0.75rem]'>
                <p>Withdrawal:</p>
                <span>0</span>
            </div>
            <div className='flex items-center gap-1 text-[0.75rem] mt-2'>
                <p>Exposure:</p>
                <span>0</span>
            </div>
        </section>
    )
}
export default Navbar;