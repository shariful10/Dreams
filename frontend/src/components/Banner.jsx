import { AiFillStar } from "react-icons/ai";
import bannerImg from "../assets/images/banner-img.png";

const Banner = () => {
	return (
		<div className="bg-bannerBg py-20">
			<div className="grid md:grid-cols-2 items-center gap-6 w-5/6 mx-auto">
				<div>
					<h3 className="text-xl text-[#685f78] font-medium">
						The Leader in Online Learning
					</h3>
					<h1 className="text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] text-[#002058] font-bold mb-5">
						Engaging & Accessible Online Courses For All
					</h1>
					<h3 className="text-xl text-[#685f78] font-medium">
						Trusted by over 15K Users worldwide since 2022
					</h3>
					<div className="flex items-center gap-6">
						<h1 className="text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] text-[#002058] font-bold">
							290+
						</h1>
						<div className="flex items-center gap-4">
							<h1 className="text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] 2xl:text-[48px] text-[#002058] font-bold">
								4.5
							</h1>
                     <div className="flex gap-2">
                        <AiFillStar className="text-xl text-[#ffb54a]" />
                        <AiFillStar className="text-xl text-[#ffb54a]" />
                        <AiFillStar className="text-xl text-[#ffb54a]" />
                        <AiFillStar className="text-xl text-[#ffb54a]" />
                        <AiFillStar className="text-xl text-[#ffb54a]" />
                     </div>
						</div>
					</div>
				</div>
				<img src={bannerImg} alt="" />
			</div>
		</div>
	);
};

export default Banner;
