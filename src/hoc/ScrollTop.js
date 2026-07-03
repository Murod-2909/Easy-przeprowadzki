import React, {useEffect} from "react";

// Sahifa komponenti mount bo'lganda skrollni tepaga qaytaradi.
const ScrollTop = (Component) => {
	const Wrapped = (props) => {
		useEffect(() => {
			window.scrollTo({left: 0, top: 0, behavior: "auto"});
		}, []);

		return <Component {...props} />;
	};

	return Wrapped;
};

export default ScrollTop;
