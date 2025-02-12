import "../../../assets/scss/_transcation.scss";

const AccountTranscation = () => {
    return (
        <section>
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-white uppercase text-[0.95rem] font-normal">Transaction history</h2>
                <input type="search" className="table-search" placeholder="Search..." />
            </div>
            <div className="flex justify-center items-end gap-3 mt-5">
                <div className="flex flex-col justify-start items-start gap-2 w-1/2">
                    <label className="titleDate">From Date</label>
                    <input type="date" className="input-date bg-[#212529] border border-[#495057] px-2" />
                </div>

                <div className="flex flex-col justify-start items-start gap-2 w-1/2">
                    <label className="titleDate">To Date</label>
                    <input type="date" className="input-date bg-[#212529] border border-[#495057] px-2"  />
                </div>
                <button className="bg-[#ac73ff] text-white py-2 px-4 text-[0.8rem] rounded cursor-pointer">Search</button>
            </div>
            <div className="account-body">
                <p>There are no records to display</p>
            </div>
        </section>
    )
}
export default AccountTranscation;