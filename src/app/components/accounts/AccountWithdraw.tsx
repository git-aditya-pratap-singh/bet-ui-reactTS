import "../../../assets/scss/_accountWithdraw.scss";

const AccountWithdraw = () => {
    return (
        <section className="account-withdraw-section">
            <form className=" mx-auto w-[100%]">
                <div className="flex justify-center items-center gap-2 p-2">
                    <div className="w-[50%]">
                        <label className="text-white text-[0.8rem]">Bank Name</label>
                        <select
                            id="countries"
                            className="bg-[#212529] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                            <option selected="">Select an option</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="w-[50%]">
                        <label className="text-white text-[0.8rem]">Bank Account No.</label>
                        <input type="text" className="bg-[#212529] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 p-2">
                    <div className="w-[50%]">
                        <label className="text-white text-[0.8rem]">IFSC Code</label>
                        <input type="text" className="bg-[#212529] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    </div>

                    <div className="w-[50%]">
                        <label className="text-white text-[0.8rem]">Account Holder Name</label>
                        <input type="text" className="bg-[#212529] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    </div>
                </div>
                <div className="w-full flex justify-end px-2 mt-2"><button>Add Bank</button></div>
            </form>
        </section>
    )
}
export default AccountWithdraw;