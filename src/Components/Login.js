import Logo from "./img/Logo.png";

function Login() {
  return (
    <>
      <div className="Header">
        <img src={Logo} alt="logo" />
        <h1>BARBER SCHEDULE</h1>
        <p>A melhor aplicação para gestão de negocios e clientes</p>
      </div>
      <div className="ContainerLogin">
        <h1>LOGIN</h1>
        <form method="post" action="">
          <label>
            <input type="text" placeholder="USUÁRIO"></input>
          </label>
          <label>
            <input type="password" placeholder="SENHA"></input>
          </label>
          <a href="#">Esqueceu sua senha</a>

        </form>
      </div>
    </>
  );
}

export default Login;
