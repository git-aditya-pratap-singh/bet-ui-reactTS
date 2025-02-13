import noDataImage from "../../../assets/img/no-match.png";
import "../../../assets/scss/_promotion.scss";
const Promotion = ()=>{
    return(
        <section>
             <div className="flex justify-start items-center gap-3">
                <span className="promo-logo"></span>
                <label className="header-title">Promotions</label>
            </div>
            <div className="no-data">
                <img src={noDataImage} alt="no-data"/>
                <p>No Data Found</p>
            </div>
        </section>
    )
}
export default Promotion;