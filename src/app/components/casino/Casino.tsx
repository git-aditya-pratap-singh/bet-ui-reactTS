import { useState } from "react";
import Card from "../casino/Card";
import "../../../assets/scss/_casino.scss";

const Casino = () => {
    const [state, setState] = useState("All")
    return (
        <section className="py-3 px-2">
            <div className="flex justify-start items-center gap-3">
                <span className="header-logo"></span>
                <label className="header-title">Casino</label>
            </div>

            <div className="flex justify-between items-center gap-2 py-5">
                <div className="flex items-center gap-2">
                    <button className={`${state === "All" ? 'bg-[#ac73ff]' : 'bg-[#292929]'} btnTavb`}>All</button>
                    <button className={`${state === "Favourite" ? 'bg-[#ac73ff]' : 'bg-[#292929]'} btnTavb`}>Favourite</button>
                    <button className={`${state === "New" ? 'bg-[#ac73ff]' : 'bg-[#292929]'} btnTavb`}>New</button>
                    <button className={`${state === "Popular" ? 'bg-[#ac73ff]' : 'bg-[#292929]'} btnTavb`}>Popular</button>
                    <button className={`${state === "Live" ? 'bg-[#ac73ff]' : 'bg-[#292929]'} btnTavb`}>Live</button>
                </div>

                <div className="flex items-center gap-2">
                    <select
                        id="countries"
                        className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                        <option selected="">All Provider</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select
                        id="countries"
                        className="bg-[#212529] border border-[#495057] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                        <option selected="">All Games</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-evenly items-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}
export default Casino;