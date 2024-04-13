import Logo from "../img/Logo.png";
import TitleApp from "../img/TitleApp.png";
import IconArrow from "../icons/CircleIcon.svg";
import IconVer from "../icons/Ver.png";

import { useState, useEffect } from "react";

import Loader from "../Loader";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom/dist";

function Login() {
	const [loading, setLoading] = useState(true);
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 500);
		return () => clearTimeout(timer);
	}, []);

	if (!localStorage.getItem("BS_Auth")) {
		localStorage.setItem("BS_Auth", "false");
	}

	const authData = localStorage.getItem("BS_Auth");
	if (authData === "true") {
		navigate("/home");
	}

	function checkAuth(event) {
		event.preventDefault();

		if (userName === "geam" && userPassword === "123456") {
			localStorage.setItem("BS_Auth", "true");
			navigate("/home");
		} else {
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
						<div className="bg-gradient-to-b from-[#1F303F] to-[#477194] h-screen w-full  pt-4">
							<div className="flex flex-col h-72">
								<div className="flex items-center justify-center h-36">
									<img src={Logo} alt="Logo - BARBER SCHEDULE" className="h-full" />
								</div>

								<div className="flex flex-col items-center justify-center h-24 mt-8 text-center text-white">
									<h2 translate="no" className="text-5xl text-white font-youngheart">
										BARBER SCHEDULE
									</h2>
									<p className="text-xs tracking-widest text-center uppercase w-60 font-bebas">A melhor aplicacação para gestão de negócios barbershop e clientes</p>
								</div>
							</div>

							<div className="flex flex-col items-center mt-4 h-72">
								<div className="flex items-center justify-center py-2">
									<h1 translate="no" className="text-[#E3C75F] font-bold uppercase text-3xl transform scale-y-150 font-bebas tracking-widest">
										LOGIN
									</h1>
								</div>

								<div className="pt-2">
									<form onSubmit={checkAuth} className="flex flex-col items-center justify-center space-y-4">
										<div>
											<label>
												<input className="flex w-64 pl-2 rounded h-9 font-bebas text-start" type="text" placeholder="Usuário..." value={userName} onChange={(e) => setUserName(e.target.value)}></input>
											</label>
										</div>
										<div>
											<label>
												<input className="w-64 pl-2 rounded h-9 font-bebas text-start font-" type="password" placeholder="Senha..." minLength={6} value={userPassword} onChange={(e) => setUserPassword(e.target.value)}></input>
											</label>
										</div>

										<a className="mt-2 text-[#E3C75F] font-bebas tracking-wider cursor-pointer" href="">
											Esqueceu sua senha?
										</a>

										<button type="submit" className="pt-4">
											<img src={IconArrow} alt="Botão de login" className="h-14" />
										</button>
									</form>
								</div>
							</div>

							<div className="flex justify-center items-center h-[56.6px]">
								<p className="text-sm tracking-widest text-white uppercase font-bebas">
									NOVO USUÁRIO?{" "}
									<Link to="/registrar">
										<span className="text-[#E3C75F] cursor-pointer">CLIQUE AQUI</span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default Login;
