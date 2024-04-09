import Logo from "../img/Logo.png";
import Loader from "../Loader";
import IconArrow from "../icons/CircleIcon.svg";
import SetaE from "../icons/SetaparaEsquerda.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registro() {
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
            <div className="bg-gradient-to-b from-[#1F303F] to-[#477194] h-screen w-full p-1">
              <Link to="/entrar">
                <img src={SetaE} alt="seta voltar" className=" flex flex-start h-8 ml-2" />
              </Link>
              <div className="h-[123.5px] flex justify-center items-center p-2">
                <img src={Logo} alt="Logo - BARBER SCHEDULE" className="h-28" />
              </div>
              <div className="h-96 flex-col items-center">
                <div className="flex flex-col items-center ">
                  <h1 className="w-full h-10 flex justify-center  font-bebas text-[1.8rem] text-[#E3C75F]">Faça seu cadastro</h1>
                  <form method="POST" className="flex flex-col text-white mt-4 w-full justify-center items-center">
                    <div className="w-52 flex flex-col">
                      <label htmlFor="Inome" className="text-[#E3C75F] font-bebas tracking-wider">
                        Nome completo
                      </label>
                      <input type="text" id="Inome" className="pl-1 mb-1 h-7 rounded text-black font-bebas tracking-wider"></input>

                      <label htmlFor="Itelefone" className="text-[#E3C75F] font-bebas tracking-wider">
                        Telefone
                      </label>
                      <input type="number" id="Itelefone" className="pl-1 mb-1 h-7 rounded text-black font-bebas tracking-wider"></input>

                      <label htmlFor="Iemail" className="text-[#E3C75F] font-bebas tracking-wider">
                        Email
                      </label>
                      <input type="email" id="Iemail" className="pl-1 mb-1 h-7 rounded text-black font-bebas tracking-wider"></input>

                      <label htmlFor="Isenha" className="text-[#E3C75F] font-bebas tracking-wider">
                        Senha
                      </label>
                      <input type="password" minLength={8} id="Isenha" className="pl-1 mb-1 h-7 rounded text-black font-bebas tracking-wider"></input>

                      <label htmlFor="Isenharep" className="text-[#E3C75F] font-bebas tracking-wider">
                        Repita a senha
                      </label>
                      <input type="password" id="Isenharep" className="pl-1 mb-1 h-7 rounded text-black font-bebas tracking-wider"></input>
                    </div>

                    <div className="flex flex-row mt-2">
                      <input type="checkbox" className="ml-2 mr-2"></input>
                      <div className="pt-0.5">
                        <div className="text-[0.7rem] w-full font-bebas tracking-wider">
                          Concordo com os <span className="text-[#E3C75F]">termos estabelecidos</span>.
                        </div>
                      </div>
                    </div>

                    <div className="h-28 mt-8 flex items-center justify-center w-full">
                      <div className="bg-[#16232E] h-full w-full max-w-5xl rounded-t-full flex justify-center items-center">
                        <div className="h-20 w-20 flex justify-center items-center">
                          <button type="submit" className="">
                            <img src={IconArrow} alt="Botão para enviar dados cadastrais" className="h-14" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Registro;
