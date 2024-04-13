import React from "react";
import { useState, useEffect } from "react";

import Loader from "../Loader";
import { useNavigate } from "react-router-dom/dist";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 500);
		return () => clearTimeout(timer);
	}, []);

	function disconnectUser() {
		const authData = localStorage.getItem("BS_Auth");
		if (authData === "true") {
			localStorage.setItem("BS_Auth", "false");
			navigate("/");
		}
	}

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<section className="min-h-screen bg-[#16232E]">
					<div className="flex items-center justify-center h-screen max-lg:hidden">
						<h1 className="text-3xl tracking-wider text-center text-white font-bebas">
							A <span className="text-[#E3C75F]">resolução</span> da tela atual <span className="text-red-500">não é suportada</span> por este aplicativo.
						</h1>
					</div>

					<div className="max-w-3xl mx-auto lg:hidden">
						<main className="grid h-screen place-items-center bg-gradient-to-b from-[#1F303F] to-[#477194] px-6 py-24 sm:py-32">
							<h1 className="text-3xl text-white uppercase">página home</h1>
							<button onClick={disconnectUser} className="text-3xl text-white uppercase">
								DESCONECTAR
							</button>
						</main>
					</div>
				</section>
			)}
		</>
	);
}
