import logo from "../../../assets/img/logo.png";
import upi1 from "../../../assets/img/upi-1.svg";
import upi2 from "../../../assets/img/upi-2.svg";
import "../../../assets/scss/_footer.scss";

const Appfooter = () => {
    return (
        <footer className="app-footer">
            <div className="footer-conatiner">
                <div className="row-1">
                    <img src={logo} width={120} height={120} alt="no avaliable images" />
                    <label className="title">Discover Asia's top gaming hub, featuring 350+ games and a variety of sports including Cricket, Tennis, Football, Basketball, Volleyball,
                        and popular Indian card games like Teen Patti and Andar Bahar. With an abundance of markets and competitive
                        odds, ramega.games offers the ultimate gaming experience. Elevate your play at the premier destination
                        for thrilling entertainment!</label>
                </div>
                <div className="row-2">
                    <h6>100% Safe & Instant Payments</h6>
                    <label className="title">Make seamless transactions with instant payments and withdrawals through your UPI ID,
                        ensuring the safety and security of your funds. We accept all UPI platforms for your
                        convenience. Experience hassle-free financial transactions at your fingertips!</label>
                </div>
                <div className="row-3">
                    <h6>Accepted Modes Of Payments </h6>
                    <div className="text-center">
                        <img src={upi1} alt="logo"
                            className="mb-3 mb-md-0" />
                    </div>
                    <div className="text-center">
                        <img src={upi2} alt="logo"
                            className="paymentLogo" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <label>Responsibile Gambling</label>
                <label>Terms And Conditions</label>
                <label>About Us</label>
            </div>
        </footer>
    )
}
export default Appfooter;