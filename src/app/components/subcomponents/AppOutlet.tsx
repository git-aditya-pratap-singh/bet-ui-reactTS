import { useSelector } from "react-redux";
import noDataImage from "../../../assets/img/no-match.png";
import "../../../assets/scss/_appoutlet.scss";

const AppOutlet = () => {
    
    const rouesState = useSelector((store: any) => store.centerliazedStore.app_outlet);
    return (
        <section className="app-outlet">
            <h3 className="heading">
                <span className={`${rouesState?.outletIcon}`}></span>
                <label>{rouesState?.outletName}</label>
            </h3>
            
            <div className="no-data">
                <img src={noDataImage} alt="no-data"/>
                <p>No Data Found</p>
            </div>
        </section>
    )
}
export default AppOutlet;