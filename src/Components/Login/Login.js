import Logo from "../img/Logo.png";
import TitleApp from "../img/TitleApp.png";
import IconArrow from "../icons/CircleIcon.svg"

function Login() {
  return (
    <>
      <section className="h-screen bg-[#16232E] pt-4">
        <div className="flex h-72 flex-col">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo - BARBER SCHEDULE" class="h-36" />
          </div>

          <div className="flex flex-col items-center justify-center text-white text-center mt-8">
            <img src={TitleApp} alt="Paragraph - BARBER SCHEDULE" class="h-24" />
          </div>
        </div>

        {/*  */}

        <div className="flex h-80 flex-col">
          <div className="py-2 flex justify-center items-center">
            <h1 className="text-yellow-500 font-bold uppercase text-3xl">LOGIN</h1>
          </div>

          <div>
            <form method="post" action="#">
              <div>
                <label>
                  <input type="text" placeholder="Usuário" id="User"></input>
                </label>
              </div>
              <div>
                <label>
                  <input type="password" placeholder="Senha" minLength={6} id="PassWord"></input>
                </label>
              </div>

              <button type="submit" className="">
                <img src={IconArrow} alt="Botão de login"   />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );

}

export default Login;
