import bannerImg from "../assets/images/banner-img.png";

const Banner = () => {
	return (
		<div className="bg-bannerBg">
			<div className="grid md:grid-cols-2 items-center gap-6 w-5/6 mx-auto">
				<div className="">
					<h3 className="text-xl text-[#685f78] font-medium">
						The Leader in Online Learning
					</h3>
					<h1 className="text-[48px] text-[#002058] font-bold">
						Engaging & Accessible Online Courses For All
					</h1>
				</div>
				<img src={bannerImg} alt="" />
			</div>
		</div>
	);
};

export default Banner;
