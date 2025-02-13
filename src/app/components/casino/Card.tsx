
const Card = () => {
    return (
        <section className="p-2 rounded flex flex-col justify-start gap-1 bg-[#1f1f1f]">
            <div className="overflow-hidden w-[180px] rounded">
                <img className="object-cover hover:scale-105 hover:grayscale duration-300 rounded" src="https://dev-gulfexchange-public.s3.amazonaws.com/casino/game/ezg_blackjackgold5.webp" alt="error" />
            </div>
            <label className="text-white text-[0.9rem] mt-2">BlackJack-5</label>
            <span className="text-white text-[0.8rem]">Ezugi</span>
        </section>
    )
}
export default Card;