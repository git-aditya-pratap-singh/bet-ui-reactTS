import { useDispatch } from "react-redux";
import { func_loginPopup, func_registrationPopup } from "../../redux/slices/StateSlice";
import AppIcons from "../../utils/AppIcons";
import loginBanner from "../../../assets/img/auth-modal.png";
import logo from "../../../assets/img/logo.png";
import "../../../assets/scss/_loginmodels.scss";

const RegistrationModels = () => {
    const dispatch = useDispatch();

    const redirectToLogin = ()=>{
        dispatch(func_registrationPopup(false));
        dispatch(func_loginPopup(true));
    }

    return (
        <section className="loginBackDiv">

            <div className="loginContainer">
                <div className="imageBanner">
                    <img src={loginBanner} alt="error" />
                </div>

                <span onClick={() => dispatch(func_registrationPopup(false))}>
                    <AppIcons iconType="crossIcon" iconSize={20} iconStyle="absolute top-5 right-5 text-white cursor-pointer" />
                </span>

                <form>
                    <div className="form-section">
                        <img src={logo} alt="error" />
                        <label className="mt-6">Make your app management easy and fun!</label>

                        <div className="mb-3 flex flex-col w-[100%] gap-1.5">
                            <label className="form-label">Mobile Number</label>
                            <input name="username" id="username-login" type="text" className="form-control form-control" aria-invalid="false" />
                        </div>

                        <div className="mb-3 flex flex-col w-[100%] gap-1.5">
                            <label className="form-label">User name</label>
                            <input name="username" id="username-login" type="text" className="form-control form-control" aria-invalid="false" />
                        </div>

                        <div className="mb-3 flex flex-col w-[100%] gap-1.5">
                            <label className="form-label">Password</label>
                            <input name="username" id="username-login" type="text" className="form-control form-control" aria-invalid="false" />
                            {/* <button className="position-absolute left-0 top-0 text-decoration-none text-muted" type="button" 
                        id="password-addon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" width={20}
                        className="svg-inline--fa fa-eye " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg></button> */}
                        </div>

                        <div className="text-[0.8rem] text-[#ac73ff]">Forgot Password?</div>
                        <button type="submit" className="primary-btn">Send OTP</button>
                        <div className="flex justify-center items-center gap-1.5 text-footer">
                            <p>Already have an account?</p>
                            <label className="cursor-pointer" onClick={redirectToLogin}>Sign in instead</label>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}
export default RegistrationModels;