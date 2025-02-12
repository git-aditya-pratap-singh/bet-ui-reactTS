import "../../../assets/scss/_accountstatement.scss";

const AccountStatements = ()=>{
    return(
        <section className="acount-banner">
            <div className="acoount-header">
                <h2>Account Statement</h2>
                <div className="flex justify-center items-center gap-3">

                    <div className="flex justify-center items-center gap-2">
                        <label className="titleDate">From Date</label>
                        <input type="date" className="input-date" value="11/02/2025" />
                    </div>

                    <div className="flex justify-center items-center gap-2">
                        <label className="titleDate">To Date</label>
                        <input type="date" className="input-date" value="11/02/2025" />
                    </div>

                    <input type="search" className="table-search" placeholder="Search..."/>
                    <button>Search</button>
                </div>
            </div>

            <div className="account-body">
                <p>There are no records to display</p>
            </div>
        </section>
    )
}
export default AccountStatements;