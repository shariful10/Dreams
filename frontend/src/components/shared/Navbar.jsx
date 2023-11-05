import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [active, setActive] = useState(null); // Initialize active state as null
	const location = useLocation();

	// Update active state when location changes
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
		</nav>
	);
};

export default Navbar;
