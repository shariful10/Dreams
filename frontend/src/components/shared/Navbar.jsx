import { useState } from "react";
import Logo from "../../assets/images/logo.svg"
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggle, setIsMenuToggle] = useState(false);

	const flexBetween = "flex items-center justify-between";
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

	return (
		<nav>
			<div
				className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
			>
				<div className={`${flexBetween} mx-auto w-5/6`}>
					<div className={`${flexBetween} w-full gap-16`}>
						{/* <==<<=== Left Side ===>>==> */}
						<a href="/">
							<img src={Logo} alt="Logo" />
						</a>
						{/* <==<<=== Right Side ===>>==> */}
						{isAboveMediumScreens ? (
							<div className={`${flexBetween} w-full`}>
								<div
									className={`${flexBetween} gap-8 text-base font-medium`}
								>
									<Link
										page="Home"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Benefits"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Our Classes"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
									<Link
										page="Contact Us"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div className={`${flexBetween} gap-8 font-medium`}>
									<p>Sign In</p>
									<ActionButton setSelectedPage={setSelectedPage}>
										Become a Member
									</ActionButton>
								</div>
							</div>
						) : (
							<button
								className="rounded-full bg-secondary-500 p-2"
								onClick={() => setIsMenuToggle(!isMenuToggle)}
							>
								<Bars3Icon className="h-6 w-6 text-white" />
							</button>
						)}
					</div>
				</div>
			</div>
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
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Benefits"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Our Classes"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page="Contact Us"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
