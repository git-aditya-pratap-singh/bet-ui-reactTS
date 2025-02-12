
import { useState } from "react";
import "../../../assets/scss/_accountbets.scss";

const AccountOpenBets = () => {
    const [openToggle, setOpenToggle] = useState(false);
    return (
        <section>
            <div className="flex justify-between p-2">
                <label className="text-white font-bold text-[0.9rem] uppercase">open Bets</label>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenToggle(!openToggle)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" className="h-[1rem] text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"></path></svg>
                    <span className="text-white text-[0.8rem] font-bold">Filters</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="h-[1rem] text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
                </div>
            </div>
            {
                openToggle && (
                    <div className="bets-body">
                        <div className="">
                            <label className="text-white text-[0.8rem]">Sports</label>
                            <select
                                id="countries"
                                className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                <option selected="">All</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Tennis">Tennis</option>
                                <option value="FootBall">FootBall</option>
                                <option value="JackPot">JackPot</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Cricket Casino">Cricket Casino</option>
                                <option value="Election">Election</option>
                            </select>
                        </div>

                        <div className="">
                            <label className="text-white text-[0.8rem]">Tournaments</label>
                            <select
                                id="countries"
                                className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                <option selected="">All</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Tennis">Tennis</option>
                                <option value="FootBall">FootBall</option>
                                <option value="JackPot">JackPot</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Cricket Casino">Cricket Casino</option>
                                <option value="Election">Election</option>
                            </select>
                        </div>

                        <div className="">
                            <label className="text-white text-[0.8rem]">Matches</label>
                            <select
                                id="countries"
                                className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                <option selected="">All</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Tennis">Tennis</option>
                                <option value="FootBall">FootBall</option>
                                <option value="JackPot">JackPot</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Cricket Casino">Cricket Casino</option>
                                <option value="Election">Election</option>
                            </select>
                        </div>

                        <div className="">
                            <label className="text-white text-[0.8rem]">Bets Type</label>
                            <select
                                id="countries"
                                className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                <option selected="">All</option>
                                <option value="Lay">Lay</option>
                                <option value="Back">Back</option>
                            </select>
                        </div>

                        <div className="">
                            <label className="text-white text-[0.8rem]">From Date</label>
                            <input type="date" className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                        </div>

                        <div className="">
                            <label className="text-white text-[0.8rem]">To Date</label>
                            <input type="date" className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                        </div>


                    </div>
                )
            }

            <div className="account-body">
                <p>There are no records to display</p>
            </div>
        </section>
    )
}
export default AccountOpenBets;