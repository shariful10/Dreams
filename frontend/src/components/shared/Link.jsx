import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase().replace(/ /g, "");

	return (
		<AnchorLink
			href={`#${lowerCasePage}`}
			className={`${
				selectedPage === lowerCasePage ? "text-primary-500" : ""
			} transition duration-500 hover:text-primary-300`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

export default Link;