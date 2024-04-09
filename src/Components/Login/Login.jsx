import Logo from "../img/Logo.png";
import TitleApp from "../img/TitleApp.png";
import IconArrow from "../icons/CircleIcon.svg";
import IconVer from "../icons/Ver.png";

import { useState, useEffect } from "react";

import Loader from "../Loader";
import { Link } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="min-h-screen bg-[#16232E]">
          <div className="max-lg:hidden h-screen flex justify-center items-center">
            <h1 className="text-white text-center font-bebas tracking-wider text-3xl">
              A <span className="text-[#E3C75F]">resolução</span> da tela atual <span className="text-red-500">não é suportada</span> por este aplicativo.
            </h1>
          </div>
          <div className="max-w-3xl mx-auto lg:hidden">
            <div className="bg-gradient-to-b from-[#1F303F] to-[#477194] h-screen w-full  pt-4">
              <div className="flex h-72 flex-col">
                <div className="flex items-center justify-center h-36">
                  <img src={Logo} alt="Logo - BARBER SCHEDULE" className="h-full" />
                </div>

                <div className="flex flex-col items-center justify-center text-white text-center mt-8 h-24">
                  <h2 translate="no" className=" font-youngheart text-5xl text-white  ">
                    BARBER SCHEDULE
                  </h2>
                  <p className="w-60 font-bebas text-xs text-center uppercase tracking-widest">A melhor aplicacação para gestão de negócios barbershop e clientes</p>
                </div>
              </div>

              <div className="flex items-center h-72 flex-col mt-4">
                <div className="py-2 flex justify-center items-center">
                  <h1 translate="no" className="text-[#E3C75F] font-bold uppercase text-3xl transform scale-y-150 font-bebas tracking-widest">
                    LOGIN
                  </h1>
                </div>

                <div className="pt-2">
                  <form method="post" className="flex justify-center items-center flex-col space-y-4">
                    <div>
                      <label>
                        <input className="w-64 h-9 rounded pl-2 font-bebas text-start flex" type="text" placeholder="Usuário..." id="User"></input>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input className="w-64 h-9 rounded pl-2 font-bebas text-start font-" type="password" placeholder="Senha..." minLength={6} id="PassWord"></input>
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
                <p className="uppercase text-white text-sm font-bebas tracking-widest">
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
