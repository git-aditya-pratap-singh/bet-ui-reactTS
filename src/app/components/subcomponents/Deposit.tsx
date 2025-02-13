import { useState } from "react";
import "../../../assets/scss/_deposit.scss";

const Deposit = () => {
    const [amount, setAmount] = useState(0);
    return (
        <section className="deposit-section">
            <label>Enter Deposit Amount</label>
            <input type="number" value={amount}
            className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />

            <div className="flex justify-center items-center gap-2">
                <div className="deposit-amount-btn" onClick={()=>setAmount(100)}>100</div>
                <div className="deposit-amount-btn" onClick={()=>setAmount(200)}>200</div>
                <div className="deposit-amount-btn" onClick={()=>setAmount(500)}>500</div>
                <div className="deposit-amount-btn" onClick={()=>setAmount(1000)}>1000</div>
                <div className="deposit-amount-btn" onClick={()=>setAmount(2000)}>2000</div>
                <div className="deposit-amount-btn" onClick={()=>setAmount(5000)}>5000</div>
            </div>
            <button type="submit" className="primary-btn">Continue To Payment</button>
            <button type="button" className="cancel-btn">Cancel</button>
        </section>
    )
}
export default Deposit;