import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../navigations/headerNavigation/Navbar";
import SidebarNavigation from "../navigations/sidebarNavigation/Sidebar";
import GameplayImageSlider from "../subcomponents/GamePlayImageSlider";
import Appfooter from "../subcomponents/Appfooter";
import LoginModels from "../Forms/LoginModels";
import RegistrationModels from "../Forms/RegistrationModels";
import "../../../assets/scss/_dashboard.scss";

const Dashboard = () => {

  const sidebarState = useSelector((store: any) => store.centerliazedStore.open_sidebar);
  const loginState = useSelector((store: any) => store.centerliazedStore.loginPopup);
  const registrationState = useSelector((store: any) => store.centerliazedStore.registrationPopup);

  return (
    <>
      { loginState && <LoginModels/> }
      { registrationState && <RegistrationModels/>}

      <section className="app-wrapper">
        <Navbar />
        <div className="main-wrapper w-[100%]">
          <SidebarNavigation />
          <div className={`w-[100vw] duration-400 ${sidebarState && '-ml-32'}`}>
            <div className="main-content-section">
              <div className="news-feed">
                <span className="news-title">News : </span>
                <marquee>
                  <div className="flex items-center gap-1.5">
                    <svg width={14} className="text-white" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle"
                      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                    </svg>
                    <label className="text-[0.75rem] font-semibold text-white">Check Bank Details First</label>
                  </div>
                </marquee>
              </div>
              <Outlet />
            </div>
            <GameplayImageSlider />
          </div>
        </div>
      </section>
      <Appfooter />
    </>
  )
}
export default Dashboard;