import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
	const location = useLocation();
	const [active, setActive] = useState(null);
	const [isMenuToggle, setIsMenuToggle] = useState(false);

	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
		<nav className="flex justify-between items-center w-5/6 mx-auto py-4">
			<Link to="/">
				<img src={logo} width={200} alt="" />
			</Link>
			{isAboveMediumScreens ? (
				<>
					<ul className="flex justify-center items-center gap-4">
						<li
							onClick={() => setActive("home")}
							className={`font-medium group ${
								active === "home" ? "active" : "default"
							}`}
						>
							<Link to="/">
								Home
								<span
									className={`${
										active === "home" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
						</li>
						<li
							onClick={() => setActive("about")}
							className={`font-medium group ${
								active === "about" ? "active" : "default"
							}`}
						>
							<Link to="/about">
								About
								<span
									className={`${
										active === "about" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
						</li>
						<li
							onClick={() => setActive("dashboard")}
							className={`font-medium group ${
								active === "dashboard" ? "active" : "default"
							}`}
						>
							<Link to="/dashboard">
								Dashboard
								<span
									className={`${
										active === "dashboard" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
						</li>
					</ul>
					<div className="">
						<button className="px-4 py-2 bg-[#ff6575] hover:bg-[#e72f41] rounded-md text-white font-medium transition-all duration-300">
							Login
						</button>
					</div>
				</>
			) : (
				<button
					className="rounded-full bg-[#ff6575] hover:bg-[#e72f41] p-2"
					onClick={() => setIsMenuToggle(!isMenuToggle)}
				>
					<Bars3Icon className="h-6 w-6 text-white" />
				</button>
			)}
			{/* <==<<=== Mobile Menu ===>>==> */}
			{!isAboveMediumScreens && isMenuToggle && (
				<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 shadow-2xl">
					{/* <==<<=== Close Icon ===>>==> */}
					<div className="flex justify-end px-12 pb-12 pt-7">
						<button onClick={() => setIsMenuToggle(!isMenuToggle)}>
							<XMarkIcon className="h-8 w-8 text-gray-400" />
						</button>
					</div>
					{/* <==<<=== Menu Items ===>>==> */}
					<div className="ml-[33%] flex flex-col gap-10 text-2xl">
						<li
							onClick={() => setActive("home")}
							className={`font-medium group ${
								active === "home" ? "active" : "default"
							}`}
						>
							<Link to="/">
								Home
								<span
									className={`${
										active === "home" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
						</li>
						<li
							onClick={() => setActive("about")}
							className={`font-medium group ${
								active === "about" ? "active" : "default"
							}`}
						>
							<Link to="/about">
								About
								<span
									className={`${
										active === "about" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
						</li>
						<li
							onClick={() => setActive("dashboard")}
							className={`font-medium group ${
								active === "dashboard" ? "active" : "default"
							}`}
						>
							<Link to="/dashboard">
								Dashboard
								<span
									className={`${
										active === "dashboard" && "w-full"
									} block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full`}
								/>
							</Link>
						</li>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
