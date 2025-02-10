import "../../../assets/scss/_searchmodels.scss";

const SearchModels = () => {
    return (
        <section className="bg-[#292929] p-3 rounded-2xl w-[250px] border-b-2 border-[#ac73ff] flex flex-col 
           absolute top-[5rem] z-10 right-[1.5rem]">
            <div className="p-5 bg-[#292929] absolute -top-2.5 right-4 rotate-45" />
            <div className="dropDown z-20">
                <input className="search-btn" type="text" placeholder="Search here..." />
                <label className="searchClose"></label>
            </div>
            <div className="flex flex-row justify-between items-center p-2 bg-[var(--input-bg)] mt-2 rounded-xl">
                <p className="text-white text-[0.7rem]">One Click Bet</p>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div> 
                </label>
            </div>
        </section>
    )
}
export default SearchModels;