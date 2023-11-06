import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FaBookReader, FaHome } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
	const location = useLocation();
	const [active, setActive] = useState(null);
	const [scrolling, setScrolling] = useState(false);
	const [isMenuToggle, setIsMenuToggle] = useState(false);

	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	const handleMenu = () => {
		setIsMenuToggle(!isMenuToggle);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (location.pathname === "/") {
			setActive("home");
		} else if (location.pathname === "/about") {
			setActive("about");
		} else if (location.pathname === "/dashboard") {
			setActive("dashboard");
		} else {
			setActive(null);
		}
	}, [location]);

	return (
		<div
			className={`${
				scrolling
					? "bg-bannerBg shadow-lg shadow-[#ff657439]"
					: "bg-transparent"
			} fixed top-0 w-full duration-500 z-20`}
		>
			<nav className="flex justify-between items-center w-5/6 mx-auto py-4 sticky">
				<Link
					to="/"
					className={`${
						isMenuToggle && "hidden transition-all duration-1000"
					}`}
				>
					<img src={logo} width={200} alt="" />
				</Link>
				{isAboveMediumScreens ? (
					<>
						<div className="flex justify-center items-center gap-4 list-none z-20">
							<Link
								to="/"
								onClick={() => setActive("home")}
								className={`font-medium group ${
									active === "home" ? "active" : "default"
								}`}
							>
								Home
								<span
									className={`${
										active === "home" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
							<Link
								to="/about"
								onClick={() => setActive("about")}
								className={`font-medium group ${
									active === "about" ? "active" : "default"
								}`}
							>
								About
								<span
									className={`${
										active === "about" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
							<Link
								to="/dashboard"
								onClick={() => setActive("dashboard")}
								className={`font-medium group ${
									active === "dashboard" ? "active" : "default"
								}`}
							>
								Dashboard
								<span
									className={`${
										active === "dashboard" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full list-none`}
								/>
							</Link>
						</div>
						<div>
							<button className="px-4 py-2 bg-[#ff6575] hover:bg-[#e72f41] rounded-md text-white font-medium transition-all duration-300">
								Login
							</button>
						</div>
					</>
				) : (
					<button
						className={`${
							isMenuToggle
								? "hidden transition-all duration-1000"
								: "rounded-full bg-[#ff6575] hover:bg-[#e72f41] p-2 transition-all duration-1000"
						}`}
						onClick={handleMenu}
					>
						<HiMiniBars3BottomRight className="h-6 w-6 text-white" />
					</button>
				)}
				{/* <==<<=== Mobile Menu ===>>==> */}
				{!isAboveMediumScreens && (
					<div
						className={`${
							isMenuToggle
								? "w-[300px] transition-all duration-500"
								: "w-0 transition-all duration-500"
						} fixed right-0 bottom-0 z-40 h-full bg-[#ff6575] shadow-2xl`}
					>
						{/* <==<<=== Close Icon ===>>==> */}
						<div className="flex justify-between px-8 pb-12 pt-7">
							<img src={logo} width={150} alt="" />
							<button onClick={() => setIsMenuToggle(!isMenuToggle)}>
								<AiOutlineClose className="h-8 w-8 text-white p-2 rounded-full bg-[#012159]" />
							</button>
						</div>
						{/* <==<<=== Menu Items ===>>==> */}
						<div className="flex flex-col justify-center gap-10 text-2xl px-8">
							<Link
								to="/"
								onClick={() => {
									setActive("home"), setIsMenuToggle(false);
								}}
								className={`font-medium group ${
									active === "home" ? "activeMob" : "defaultMob"
								}`}
							>
								<span className="flex items-center gap-4">
									<FaHome />
									Home
								</span>
								{/* <span
								className={`${
									active === "home" && "w-[110px]"
								} block w-0 group-hover:w-[105px] transition-all duration-700 h-1 bg-[#012159] mt-[1px] rounded-full`}
							/> */}
							</Link>
							<Link
								to="/about"
								onClick={() => {
									setActive("about"), setIsMenuToggle(false);
								}}
								className={`font-medium group ${
									active === "about" ? "activeMob" : "defaultMob"
								}`}
							>
								<span className="flex items-center gap-4">
									<FaBookReader />
									All Courses
								</span>
								{/* <span
								className={`${
									active === "about" && "w-[172px]"
								} block w-0 group-hover:w-[172px] transition-all duration-700 h-1 bg-[#012159] mt-[1px] rounded-full`}
							/> */}
							</Link>
							<Link
								to="/dashboard"
								onClick={() => {
									setActive("dashboard"), setIsMenuToggle(false);
								}}
								className={`font-medium group ${
									active === "dashboard" ? "activeMob" : "defaultMob"
								}`}
							>
								<span className="flex items-center gap-2">
									<MdDashboardCustomize />
									Dashboard
								</span>
								{/* <span
								className={`${
									active === "dashboard" && "w-[160px]"
								} block w-0 group-hover:w-[128px] transition-all duration-700 h-1 bg-[#012159] mt-[1px] rounded-full`}
							/> */}
							</Link>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
