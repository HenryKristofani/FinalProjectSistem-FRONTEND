"use client";

import * as React from "react";
import Image from "next/image";
import { use } from "react";

export default function ProfileCard() {
	const [email, setEmail] = React.useState("");

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			const userStr = localStorage.getItem("user");
			if (userStr) {
				try {
					const userObj = JSON.parse(userStr);
					setEmail(userObj.email || "");
				} catch {}
			}
		}
	}, []);

	return (
		<div className="flex flex-col items-center justify-center pt-2 pb-2">
			<div className="w-28 h-28 rounded-full overflow-hidden  shadow-lg mb-2" style={{ background: '#5e8d89' }}>
				<Image
					src="/images/profile.jpg"
					alt="Profile"
					width={112}
					height={112}
					className="object-cover w-full h-full"
				/>
			</div>
			<h2 className="text-xl font-semibold text-black">Welcome {email || "User"}</h2>
		</div>
	);
}
