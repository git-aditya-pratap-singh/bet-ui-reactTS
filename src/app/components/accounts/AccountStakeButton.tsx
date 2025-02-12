
const AccountStakeButton = () => {
    return (
        <section className="flex flex-col gap-2">
            <label className="text-white uppercase p-2">Change Stake Button</label>
            <div className="flex justify-start items-center gap-2 p-3">

                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-white">Label</label>
                    <input type="text" value="10000" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    <input type="text" value="1000" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    <input type="text" value="500" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    <input type="text" value="100" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                </div>

                <div className="flex flex-col justify-start items-start gap-2">
                    <label className="text-white">Amount</label>
                    <input type="text" value="10000" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    <input type="text" value="1000" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    <input type="text" value="500" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                    <input type="text" value="100" className="text-white bg-[#212529] border border-[#495057] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                </div>
            </div>
            <div className="w-full flex justify-start px-2 mb-2">
                <button className="bg-[#ac73ff] py-2 px-4 rounded text-white text-[0.8rem]">Update</button>
            </div>
        </section>
    )
}
export default AccountStakeButton;