import { Outlet } from "react-router-dom";
import "../../../assets/scss/_account.scss";
import { NavLink, useLocation } from "react-router-dom";

const Accounts = () => {
    const location = useLocation()?.pathname.split('/').at(-1);
    return (
        <section className="account-container">
            <div className="account-section">

                <div className="account-section-itemA">
                    <div className="profile-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path id="userhead" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div>
                        <label className="text-white text-[0.9rem]">demo user</label>
                        <div className="mt-3 text-[0.8rem] text-white flex items-center justify-start gap-2">
                            <span><svg  width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" fill="#ac73ff"></path></svg></span>
                            <label>9876543210</label>
                        </div>
                        <div className="mt-3 text-[0.8rem] text-white flex items-center justify-start gap-2">
                            <span><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.25 16C9.25 14.4812 10.4812 13.25 12 13.25C13.5188 13.25 14.75 14.4812 14.75 16C14.75 17.5188 13.5188 18.75 12 18.75C10.4812 18.75 9.25 17.5188 9.25 16ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25C12.6904 17.25 13.25 16.6904 13.25 16C13.25 15.3096 12.6904 14.75 12 14.75Z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.25 9.30277V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V9.30277C18.9768 9.31872 19.1906 9.33948 19.3918 9.36652C20.2919 9.48754 21.0497 9.74643 21.6517 10.3483C22.2536 10.9503 22.5125 11.7081 22.6335 12.6082C22.75 13.4752 22.75 14.5775 22.75 15.9451V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6516C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6516C1.74643 21.0497 1.48754 20.2919 1.36652 19.3918C1.24996 18.5248 1.24998 17.4225 1.25 16.0549V15.9451C1.24998 14.5775 1.24996 13.4752 1.36652 12.6082C1.48754 11.7081 1.74643 10.9503 2.34835 10.3483C2.95027 9.74643 3.70814 9.48754 4.60825 9.36652C4.80938 9.33948 5.02317 9.31872 5.25 9.30277ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V9.25344C16.8765 9.24999 16.4784 9.24999 16.0549 9.25H7.94513C7.52161 9.24999 7.12353 9.24999 6.75 9.25344V8ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z" fill="#ac73ff"></path></svg></span>
                            <label>Change Password</label>
                        </div>
                    </div>
                </div>

                <div className="account-section-itemB">
                    <div className="flex flex-col">
                        <div className="statistics-box borderRed">
                            <p>Today Profit</p>
                            <div className="statistics-digit">0</div>
                        </div>
                        <div className="flex">
                            <div className="statistics-box borderRed2">
                                <p>In sport</p>
                                <div className="statistics-digit">0</div>
                            </div>
                            <div className="statistics-box borderRed3">
                                <p>In casino</p>
                                <div className="statistics-digit">0</div>
                            </div>
                        </div>
                    </div>

                    <div className="statistics-box">
                        <p>Bonus Subscription</p>
                        <div className="statistics-digit">Not Available.</div>
                    </div>

                    <div className="statistics-box">
                        <p>Today total deposit</p>
                        <div className="statistics-digit">0</div>
                    </div>

                </div>
            </div>

            <div className="account-tab-section">
                <span>
                    <NavLink to="/account/user-profile">
                        <div className={`account-tab ${(location == 'user-profile') ? 'bg-[#ac73ff]' : 'active2'}`}>
                            <label><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path id="userhead" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></label>
                            <p>User Profile</p>
                        </div>
                    </NavLink>
                </span>


                <span>
                    <NavLink to="/account/account-withdraw">
                        <div className={`account-tab ${(location == 'account-withdraw') ? 'bg-[#ac73ff]' : 'active2'}`}>
                            <label><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0.9375 1.5C0.9375 1.18934 1.18934 0.9375 1.5 0.9375H16.5C16.8107 0.9375 17.0625 1.18934 17.0625 1.5C17.0625 1.81066 16.8107 2.0625 16.5 2.0625H15.5625V9.20249C15.5625 9.24211 15.5625 9.2812 15.5625 9.31979C15.563 10.2099 15.5633 10.8289 15.3111 11.3844C15.0589 11.9398 14.5925 12.3471 13.9219 12.9329C13.8928 12.9583 13.8634 12.984 13.8335 13.0101L12.305 14.3466C11.6233 14.9427 11.0715 15.4251 10.5832 15.7537C10.0749 16.0958 9.57725 16.3125 9 16.3125C8.42275 16.3125 7.92506 16.0958 7.41677 15.7537C6.92847 15.4251 6.3767 14.9427 5.695 14.3466L4.16647 13.0101C4.13663 12.984 4.10718 12.9583 4.07811 12.9329C3.40746 12.3471 2.94112 11.9398 2.68891 11.3844C2.43668 10.8289 2.437 10.2099 2.43746 9.31978C2.43748 9.2812 2.4375 9.24211 2.4375 9.20249V2.0625H1.5C1.18934 2.0625 0.9375 1.81066 0.9375 1.5ZM3.5625 2.0625V9.20249C3.5625 10.2576 3.57426 10.6132 3.71324 10.9192C3.85226 11.2254 4.11239 11.4684 4.90699 12.1632L6.40699 13.4747C7.12403 14.1017 7.62263 14.5363 8.04484 14.8204C8.45385 15.0956 8.73184 15.1875 9 15.1875C9.26816 15.1875 9.54615 15.0956 9.95516 14.8204C10.3774 14.5363 10.876 14.1017 11.593 13.4747L13.093 12.1632C13.8876 11.4684 14.1477 11.2254 14.2868 10.9192C14.4257 10.6132 14.4375 10.2576 14.4375 9.20249V2.0625H3.5625ZM5.8125 6C5.8125 5.68934 6.06434 5.4375 6.375 5.4375H11.625C11.9357 5.4375 12.1875 5.68934 12.1875 6C12.1875 6.31066 11.9357 6.5625 11.625 6.5625H6.375C6.06434 6.5625 5.8125 6.31066 5.8125 6ZM5.8125 9.75C5.8125 9.43934 6.06434 9.1875 6.375 9.1875H11.625C11.9357 9.1875 12.1875 9.43934 12.1875 9.75C12.1875 10.0607 11.9357 10.3125 11.625 10.3125H6.375C6.06434 10.3125 5.8125 10.0607 5.8125 9.75Z" fill="white"></path></svg></label>
                            <p>Withdraw</p>
                        </div>
                    </NavLink>
                </span>

                <span>
                    <NavLink to="/account/change-stakeButton">
                        <div className={`account-tab ${(location == 'change-stakeButton') ? 'bg-[#ac73ff]' : 'active2'}`}>
                            <label> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M0.9375 1.5C0.9375 1.18934 1.18934 0.9375 1.5 0.9375H16.5C16.8107 0.9375 17.0625 1.18934 17.0625 1.5C17.0625 1.81066 16.8107 2.0625 16.5 2.0625H15.5625V9.20249C15.5625 9.24211 15.5625 9.2812 15.5625 9.31979C15.563 10.2099 15.5633 10.8289 15.3111 11.3844C15.0589 11.9398 14.5925 12.3471 13.9219 12.9329C13.8928 12.9583 13.8634 12.984 13.8335 13.0101L12.305 14.3466C11.6233 14.9427 11.0715 15.4251 10.5832 15.7537C10.0749 16.0958 9.57725 16.3125 9 16.3125C8.42275 16.3125 7.92506 16.0958 7.41677 15.7537C6.92847 15.4251 6.3767 14.9427 5.695 14.3466L4.16647 13.0101C4.13663 12.984 4.10718 12.9583 4.07811 12.9329C3.40746 12.3471 2.94112 11.9398 2.68891 11.3844C2.43668 10.8289 2.437 10.2099 2.43746 9.31978C2.43748 9.2812 2.4375 9.24211 2.4375 9.20249V2.0625H1.5C1.18934 2.0625 0.9375 1.81066 0.9375 1.5ZM3.5625 2.0625V9.20249C3.5625 10.2576 3.57426 10.6132 3.71324 10.9192C3.85226 11.2254 4.11239 11.4684 4.90699 12.1632L6.40699 13.4747C7.12403 14.1017 7.62263 14.5363 8.04484 14.8204C8.45385 15.0956 8.73184 15.1875 9 15.1875C9.26816 15.1875 9.54615 15.0956 9.95516 14.8204C10.3774 14.5363 10.876 14.1017 11.593 13.4747L13.093 12.1632C13.8876 11.4684 14.1477 11.2254 14.2868 10.9192C14.4257 10.6132 14.4375 10.2576 14.4375 9.20249V2.0625H3.5625ZM5.8125 6C5.8125 5.68934 6.06434 5.4375 6.375 5.4375H11.625C11.9357 5.4375 12.1875 5.68934 12.1875 6C12.1875 6.31066 11.9357 6.5625 11.625 6.5625H6.375C6.06434 6.5625 5.8125 6.31066 5.8125 6ZM5.8125 9.75C5.8125 9.43934 6.06434 9.1875 6.375 9.1875H11.625C11.9357 9.1875 12.1875 9.43934 12.1875 9.75C12.1875 10.0607 11.9357 10.3125 11.625 10.3125H6.375C6.06434 10.3125 5.8125 10.0607 5.8125 9.75Z" fill="white"></path></svg></label>
                            <p>Change Stake Button</p>
                        </div>
                    </NavLink>
                </span>

                <span>
                    <NavLink to="/account/transaction-history">
                        <div className={`account-tab ${(location == 'transaction-history') ? 'bg-[#ac73ff]' : 'active2'}`}>
                            <label><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M6.09505 2.67029C5.82698 2.43201 5.42302 2.43201 5.15495 2.67029C4.49081 3.26064 3.50463 3.28629 2.8125 2.74725V15.2526C3.50463 14.7136 4.49081 14.7392 5.15495 15.3296C5.42302 15.5679 5.82698 15.5679 6.09505 15.3296C6.78936 14.7124 7.83564 14.7124 8.52995 15.3296C8.79802 15.5679 9.20198 15.5679 9.47005 15.3296C10.1644 14.7124 11.2106 14.7124 11.905 15.3296C12.173 15.5679 12.577 15.5679 12.845 15.3296C13.5092 14.7392 14.4954 14.7136 15.1875 15.2526V2.74725C14.4954 3.28629 13.5092 3.26064 12.845 2.67029C12.577 2.43201 12.173 2.43201 11.905 2.67029C11.2106 3.28746 10.1644 3.28746 9.47005 2.67029C9.20198 2.43201 8.79802 2.43201 8.52995 2.67029C7.83564 3.28746 6.78936 3.28746 6.09505 2.67029ZM4.40755 1.82945C5.10186 1.21229 6.14814 1.21229 6.84245 1.82945C7.11052 2.06773 7.51448 2.06773 7.78255 1.82945C8.47686 1.21229 9.52314 1.21229 10.2175 1.82945C10.4855 2.06773 10.8895 2.06773 11.1575 1.82945C11.8519 1.21229 12.8981 1.21229 13.5925 1.82945C13.8605 2.06773 14.2645 2.06773 14.5325 1.82945C15.2222 1.2164 16.3125 1.706 16.3125 2.62877V15.3711C16.3125 16.2939 15.2222 16.7835 14.5325 16.1704C14.2645 15.9321 13.8605 15.9321 13.5925 16.1704C12.8981 16.7876 11.8519 16.7876 11.1575 16.1704C10.8895 15.9321 10.4855 15.9321 10.2175 16.1704C9.52314 16.7876 8.47686 16.7876 7.78255 16.1704C7.51448 15.9321 7.11052 15.9321 6.84245 16.1704C6.14814 16.7876 5.10186 16.7876 4.40755 16.1704C4.13948 15.9321 3.73552 15.9321 3.46745 16.1704C2.77777 16.7835 1.6875 16.2939 1.6875 15.3711V2.62877C1.6875 1.706 2.77776 1.2164 3.46745 1.82945C3.73552 2.06773 4.13948 2.06773 4.40755 1.82945ZM5.0625 6.375C5.0625 6.06434 5.31434 5.8125 5.625 5.8125H12.375C12.6857 5.8125 12.9375 6.06434 12.9375 6.375C12.9375 6.68566 12.6857 6.9375 12.375 6.9375H5.625C5.31434 6.9375 5.0625 6.68566 5.0625 6.375ZM5.0625 9C5.0625 8.68934 5.31434 8.4375 5.625 8.4375H12.375C12.6857 8.4375 12.9375 8.68934 12.9375 9C12.9375 9.31066 12.6857 9.5625 12.375 9.5625H5.625C5.31434 9.5625 5.0625 9.31066 5.0625 9ZM5.0625 11.625C5.0625 11.3143 5.31434 11.0625 5.625 11.0625H12.375C12.6857 11.0625 12.9375 11.3143 12.9375 11.625C12.9375 11.9357 12.6857 12.1875 12.375 12.1875H5.625C5.31434 12.1875 5.0625 11.9357 5.0625 11.625Z" fill="white"></path></svg></label>
                            <p>Transaction History</p>
                        </div>
                    </NavLink>
                </span>

                <span>
                    <NavLink to="/account/bonus">
                        <div className={`account-tab ${(location == 'bonus') ? 'bg-[#ac73ff]' : 'active2'}`}>
                            <label> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M7.45769 2.4375H10.5423C11.9206 2.43749 13.0124 2.43748 13.8668 2.55235C14.7461 2.67057 15.4578 2.91966 16.0191 3.48093C16.5803 4.0422 16.8294 4.75392 16.9476 5.63323C17.0155 6.13788 17.0433 6.72532 17.0546 7.40571C17.0598 7.43637 17.0625 7.46787 17.0625 7.5C17.0625 7.52644 17.0607 7.55245 17.0571 7.57792C17.0625 8.00222 17.0625 8.46138 17.0625 8.95769V9C17.0625 9.31066 16.8107 9.5625 16.5 9.5625C16.1893 9.5625 15.9375 9.31066 15.9375 9C15.9375 8.66558 15.9374 8.35379 15.936 8.0625H2.06399C2.06257 8.35379 2.0625 8.66558 2.0625 9C2.0625 10.4301 2.06369 11.4461 2.16732 12.2169C2.26877 12.9714 2.45902 13.4062 2.77643 13.7236C3.09383 14.041 3.52857 14.2312 4.28314 14.3327C5.05388 14.4363 6.06988 14.4375 7.5 14.4375H10.5C10.8107 14.4375 11.0625 14.6893 11.0625 15C11.0625 15.3107 10.8107 15.5625 10.5 15.5625H7.45769C6.07937 15.5625 4.98764 15.5625 4.13323 15.4476C3.25392 15.3294 2.5422 15.0803 1.98093 14.5191C1.41966 13.9578 1.17057 13.2461 1.05235 12.3668C0.937479 11.5124 0.937488 10.4206 0.9375 9.04231V8.95769C0.937496 8.46137 0.937492 8.00221 0.942852 7.57791C0.939324 7.55244 0.937501 7.52644 0.937501 7.5C0.937501 7.46787 0.940194 7.43638 0.945367 7.40572C0.956731 6.72533 0.984502 6.13789 1.05235 5.63323C1.17057 4.75392 1.41966 4.04221 1.98093 3.48093C2.5422 2.91966 3.25392 2.67057 4.13323 2.55235C4.98764 2.43748 6.07937 2.43749 7.45769 2.4375ZM2.08206 6.9375H15.9179C15.9033 6.49745 15.8776 6.11725 15.8327 5.78314C15.7312 5.02857 15.541 4.59384 15.2236 4.27643C14.9062 3.95902 14.4714 3.76877 13.7169 3.66732C12.9461 3.5637 11.9301 3.5625 10.5 3.5625H7.5C6.06988 3.5625 5.05388 3.5637 4.28314 3.66732C3.52857 3.76877 3.09383 3.95902 2.77643 4.27643C2.45902 4.59384 2.26877 5.02857 2.16732 5.78314C2.1224 6.11725 2.09673 6.49745 2.08206 6.9375ZM14.25 9.9375C14.5607 9.9375 14.8125 10.1893 14.8125 10.5V13.642L15.3522 13.1023C15.5719 12.8826 15.9281 12.8826 16.1477 13.1023C16.3674 13.3219 16.3674 13.6781 16.1477 13.8977L14.6477 15.3977C14.4281 15.6174 14.0719 15.6174 13.8522 15.3977L12.3523 13.8977C12.1326 13.6781 12.1326 13.3219 12.3523 13.1023C12.5719 12.8826 12.9281 12.8826 13.1477 13.1023L13.6875 13.642V10.5C13.6875 10.1893 13.9393 9.9375 14.25 9.9375ZM3.9375 12C3.9375 11.6893 4.18934 11.4375 4.5 11.4375H7.5C7.81066 11.4375 8.0625 11.6893 8.0625 12C8.0625 12.3107 7.81066 12.5625 7.5 12.5625H4.5C4.18934 12.5625 3.9375 12.3107 3.9375 12ZM8.8125 12C8.8125 11.6893 9.06434 11.4375 9.375 11.4375H9.75C10.0607 11.4375 10.3125 11.6893 10.3125 12C10.3125 12.3107 10.0607 12.5625 9.75 12.5625H9.375C9.06434 12.5625 8.8125 12.3107 8.8125 12Z" fill="white"></path></svg></label>
                            <p>Bonus List</p>
                        </div>
                    </NavLink>
                </span>

                <span>
                    <NavLink to="/account/open-bets">
                        <div className={`account-tab ${(location == 'open-bets') ? 'bg-[#ac73ff]' : 'active2'}`}>
                            <label><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><g clipPath="url(#clip0_318_7494)"><path fillRule="evenodd" clipRule="evenodd" d="M8.42873 2.09916C7.96819 2.16002 7.39951 2.29065 6.59055 2.47733L5.66941 2.6899C4.98615 2.84758 4.51561 2.95689 4.15621 3.08023C3.80924 3.19932 3.61295 3.31671 3.46483 3.46483C3.31671 3.61295 3.19932 3.80924 3.08023 4.15621C2.95689 4.51561 2.84758 4.98615 2.6899 5.66941L2.47733 6.59055C2.29065 7.39951 2.16002 7.96819 2.09916 8.42873C2.03987 8.87738 2.05354 9.18095 2.13268 9.45691C2.21183 9.73287 2.36112 9.99754 2.64919 10.3466C2.94488 10.7049 3.35705 11.1179 3.94411 11.7049L5.31634 13.0771C6.33595 14.0968 7.06149 14.8206 7.68525 15.2965C8.29603 15.7625 8.74266 15.9375 9.19674 15.9375C9.65082 15.9375 10.0974 15.7625 10.7082 15.2965C11.332 14.8206 12.0575 14.0968 13.0771 13.0771C14.0968 12.0575 14.8206 11.332 15.2965 10.7082C15.7625 10.0974 15.9375 9.65082 15.9375 9.19674C15.9375 8.74266 15.7625 8.29603 15.2965 7.68525C14.8206 7.06149 14.0968 6.33595 13.0771 5.31634L11.7049 3.94411C11.1179 3.35705 10.7049 2.94488 10.3466 2.64919C9.99754 2.36112 9.73287 2.21183 9.45691 2.13268C9.18095 2.05354 8.87738 2.03987 8.42873 2.09916ZM8.28133 0.983857C8.81932 0.912759 9.29106 0.914766 9.76705 1.05128C10.243 1.18779 10.6441 1.43611 11.0627 1.78154C11.4673 2.11546 11.9179 2.56605 12.4808 3.12898L13.9026 4.55081C14.8856 5.53376 15.6638 6.31199 16.1909 7.00285C16.7333 7.7137 17.0625 8.39778 17.0625 9.19674C17.0625 9.9957 16.7333 10.6798 16.1909 11.3906C15.6638 12.0815 14.8856 12.8597 13.9026 13.8427L13.8427 13.9026C12.8597 14.8856 12.0815 15.6638 11.3906 16.1909C10.6798 16.7333 9.9957 17.0625 9.19674 17.0625C8.39778 17.0625 7.7137 16.7333 7.00285 16.1909C6.31198 15.6638 5.53375 14.8856 4.55078 13.9026L3.12897 12.4808C2.56605 11.9179 2.11545 11.4673 1.78154 11.0627C1.43611 10.6441 1.18779 10.243 1.05128 9.76705C0.914766 9.29106 0.912759 8.81932 0.983857 8.28133C1.05259 7.76126 1.19588 7.14036 1.37489 6.36467L1.60039 5.38751C1.74976 4.74017 1.87157 4.2123 2.01616 3.79101C2.16716 3.35104 2.35735 2.98133 2.66934 2.66934C2.98133 2.35735 3.35104 2.16716 3.79101 2.01616C4.2123 1.87157 4.74017 1.74976 5.38751 1.60039L6.36466 1.37489C7.14035 1.19588 7.76126 1.05259 8.28133 0.983857ZM7.1182 5.99636C6.75209 5.63024 6.15849 5.63024 5.79238 5.99636C5.42626 6.36247 5.42626 6.95607 5.79238 7.32218C6.15849 7.6883 6.75209 7.6883 7.1182 7.32218C7.48432 6.95607 7.48432 6.36247 7.1182 5.99636ZM4.99688 5.20086C5.80234 4.39541 7.10824 4.39541 7.9137 5.20086C8.71915 6.00632 8.71915 7.31222 7.9137 8.11768C7.10824 8.92313 5.80234 8.92313 4.99688 8.11768C4.19143 7.31222 4.19143 6.00632 4.99688 5.20086ZM14.2883 8.24263C14.508 8.46229 14.508 8.81845 14.2883 9.03812L9.05407 14.2726C8.8344 14.4922 8.47824 14.4922 8.25857 14.2726C8.0389 14.0529 8.03889 13.6967 8.25856 13.4771L13.4928 8.24264C13.7125 8.02297 14.0686 8.02296 14.2883 8.24263Z" fill="white"></path></g><defs><clipPath id="clip0_318_7494"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg></label>
                            <p>Open Bets</p>
                        </div>
                    </NavLink>
                </span>
            </div>

            <div className="bg-[#1f1f1f] p-1.5 rounded">
                <Outlet />
            </div>
        </section>
    )
}
export default Accounts;