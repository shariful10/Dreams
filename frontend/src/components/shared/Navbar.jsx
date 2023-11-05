import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center w-5/6 mx-auto py-4">
			<Link to="/">
				<img src={logo} width={200} alt="" />
			</Link>
			<ul className="flex justify-center items-center gap-4">
				<li className="font-medium group">
					<Link to="/">Home</Link>
					<span className="block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full" />
				</li>
				<li className="font-medium group">
					<Link to="/about">
						About
						<span className="block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full" />
					</Link>
				</li>
				<li className="font-medium group">
					<Link to="/dashboard">Dashboard</Link>
					<span className="block w-0 group-hover:w-full transition-all duration-700 h-1 bg-[#ff6575] mt-[1px] rounded-full" />
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
