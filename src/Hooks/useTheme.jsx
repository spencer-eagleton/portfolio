import { useEffect, useState } from "react";

export function useTheme() {
	const [theme, setTheme] = useState("resourcery");
	const toggleTheme = () => {
		if (theme !== "friends") {
			localStorage.setItem("theme", "friends");
			setTheme("friends");
		} else if (theme !== "yahfood"){
			localStorage.setItem("theme", "yahfood");
			setTheme("yahfood");
        } else {
			localStorage.setItem("theme", "resourcery");
			setTheme("resourcery");
		}
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		}
	}, []);

	return {
		theme,
		toggleTheme
	};
};
