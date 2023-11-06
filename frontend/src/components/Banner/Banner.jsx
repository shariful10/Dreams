import CountUp from "react-countup";
import { AiFillStar } from "react-icons/ai";
import bannerImg from "../../assets/images/banner-img.png";
import Pencil from "../Icons/Pencil";
import Tutor from "../Icons/Tutor";
import BannerCard from "./BannerCard";
import CourceIcon from "../Icons/CourceIcon";
import OnlineCourceIcon from "../Icons/OnlineCourceIcon";

const Banner = () => {
	return (
		<>
			<div className="bg-bannerBg py-28">
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
								<CountUp start={0} end={290} duration={5} />
								<span className="text-[#ff6575]">+</span>
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
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-2 justify-center items-center my-10 md:my-0 w-5/6 mx-auto">
				<div className="flex gap-4 p-6 lg:p-2 2xl:p-6 bg-white shadow rounded-lg md:-mt-[18%] lg:-mt-[15%] hover:lg:-mt-[22%] transition-all duration-500">
					<Pencil />
					<BannerCard title="Online Courses">
						<CountUp start={0} end={10} duration={5} />
						k+
					</BannerCard>
				</div>
				<div className="flex gap-4 p-6 lg:p-2 2xl:p-6 bg-white shadow rounded-lg md:-mt-[18%] lg:-mt-[15%] hover:lg:-mt-[22%] transition-all duration-500">
					<Tutor />
					<BannerCard title="Expert Tutors">
						<CountUp start={0} end={186} duration={5} />+
					</BannerCard>
				</div>
				<div className="flex gap-4 p-6 lg:p-2 2xl:p-6 bg-white shadow rounded-lg md:mt-1 lg:-mt-[15%] hover:lg:-mt-[22%] transition-all duration-500">
					<CourceIcon />
					<BannerCard title="Ceritified Courses">
						<CountUp start={0} end={5} duration={5} />
						k+
					</BannerCard>
				</div>
				<div className="flex gap-4 p-6 lg:p-2 2xl:p-6 bg-white shadow rounded-lg md:mt-1 lg:-mt-[15%] hover:lg:-mt-[22%] transition-all duration-500">
					<OnlineCourceIcon />
					<BannerCard title="Ceritified Students">
						<CountUp start={0} end={55} duration={5} />
						k+
					</BannerCard>
				</div>
			</div>
		</>
	);
};

export default Banner;
