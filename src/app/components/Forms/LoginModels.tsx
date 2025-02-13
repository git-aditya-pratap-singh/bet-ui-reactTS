import { useState } from "react";
import { useDispatch } from "react-redux";
import { func_loginPopup, func_registrationPopup } from "../../redux/slices/StateSlice";
import AppIcons from "../../utils/AppIcons";
import loginBanner from "../../../assets/img/auth-modal.png";
import logo from "../../../assets/img/logo.png";
import "../../../assets/scss/_loginmodels.scss";


const LoginModels = () => {
    const [loginWithOTP, setloginWithOTP] = useState(false);
    const dispatch = useDispatch();

    const redirectToRegistration = () => {
        dispatch(func_loginPopup(false));
        dispatch(func_registrationPopup(true));
    }

    const loginDemoModels = ()=>{
        localStorage.setItem('loginStatus',true);
    }

    return (
        <section className="loginBackDiv">

            <div className="loginContainer">
                <div className="imageBanner">
                    <img src={loginBanner} alt="error" />
                </div>

                <span onClick={() => dispatch(func_loginPopup(false))}>
                    <AppIcons iconType="crossIcon" iconSize={20} iconStyle="absolute top-5 right-5 text-white cursor-pointer" />
                </span>

                <form>
                    <div className="form-section">
                        <img src={logo} alt="error" />
                        <label>Please sign in to your account and start the adventure</label>
                        <div className="login-via-otp">
                            <span onClick={() => setloginWithOTP(!loginWithOTP)}>
                                <u>{`${loginWithOTP ? 'Click For: Login Via OTP' : 'Click For: Login Via Username'}`}</u>
                            </span>
                        </div>

                        {loginWithOTP ? (
                            <>
                                <label className="form-label">Mobile Number</label>
                                <input
                                    name="username"
                                    id="username-login"
                                    type="text"
                                    className="form-control"
                                    aria-invalid="false"
                                />
                            </>
                        ) : (
                            <>
                                <div className="mb-3 flex flex-col w-full gap-1.5">
                                    <label className="form-label">User Name</label>
                                    <input
                                        name="username"
                                        id="username-login"
                                        type="text"
                                        className="form-control"
                                        aria-invalid="false"
                                    />
                                </div>

                                <div className="mb-3 flex flex-col w-full gap-1.5 relative">
                                    <label className="form-label">Password</label>
                                    <input
                                        name="password"
                                        id="password-login"
                                        type="password"
                                        className="form-control"
                                        aria-invalid="false"
                                    />
                                    <button
                                        className="absolute left-0 top-0 text-muted"
                                        type="button"
                                        id="password-addon"
                                    >
                                     
                                    </button>
                                </div>
                            </>
                        )}
                        <div className="text-forgot">Forgot Password?</div>
                        <button type="submit" className="primary-btn">Sign In</button>
                        <button type="submit" className="primary-btn" onClick={loginDemoModels}>Sign In With Demo</button>
                        <div className="flex justify-center items-center gap-1.5 text-footer">
                            <p>New on our platform?</p>
                            <label className="cursor-pointer" onClick={redirectToRegistration}>Create an account</label>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default LoginModels;