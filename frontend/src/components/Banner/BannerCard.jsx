const BannerCard = ({children, title}) => {
	return (
		<div className="flex flex-col justify-around">
			<h2 className="text-2xl 2xl:text-3xl font-bold text-[#002058]">
				{children}
			</h2>
			<h3 className="text-sm 2xl:text-[16px] text-textColor font-normal">
				{title}
			</h3>
		</div>
	);
};

export default BannerCard;
