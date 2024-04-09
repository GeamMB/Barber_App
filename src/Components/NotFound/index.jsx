import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader";

export default function NotFound() {
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
          <h1 className="text-white text-center font-bebas tracking-wider text-3xl">A <span className="text-[#E3C75F]">resolução</span> da tela atual <span className="text-red-500">não é suportada</span> por este aplicativo.</h1>
        </div>
        <div className="max-w-3xl mx-auto lg:hidden">
          <main className="grid h-screen place-items-center bg-gradient-to-b from-[#1F303F] to-[#477194] px-6 py-24 sm:py-32">
            <div className="text-center">
                <p className="text-base font-semibold text-[#E3C75F]">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">Página não encontrada</h1>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/entrar" className="rounded-md bg-[#CC8D1A] px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#CC8D1A]">Voltar</Link>
                </div>
            </div>
          </main>
        </div>
      </section>
      )}
    </>
  );
}
