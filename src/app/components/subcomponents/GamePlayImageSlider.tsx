import BetSlip from "./BetSlip";
import gamePlaySliderData from "../../json/gamePlaySliderjson";
import "../../../assets/scss/_gameplayslider.scss";

const GameplayImageSlider = () => {
    return (
        <section className="sideBanner-grid">
            <BetSlip/>
            <div className="gridSystem">
                {
                    gamePlaySliderData.map((items) => {
                        return (
                            <div className="content" key={items?.id}>
                                <div className="content-overlay"></div>
                                <img className="img" alt="AVIATOR" src={`${items.imagePath}`} />
                                <div className="content-details fadeIn-bottom">
                                    <p className="content-text">{items?.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default GameplayImageSlider;