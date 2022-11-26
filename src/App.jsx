import React from "react";
import MyButton from "./components/myButton";
import WelcomeText from "./components/welcomeText";
import ListFruts from "./components/fruts/listFruts";
import ButtonState from "./components/buttonState";
import Register from "./components/form/register";
import RegisterUser from "./components/form/registerUser";

const App = () => {

  const title = "Hola soy react";
  const user = false;
  const fruts = ['frutilla', 'banana', 'palta'];

  return (

    <>
    <div className="container p-2">

      <ButtonState/>
      <h1 className="text-center">{title.toUpperCase()}</h1>
      <MyButton text="boton1" />
      <MyButton text="boton2" />
      <MyButton text="boton3" />
      <WelcomeText user={user} />
      <ListFruts fruts={fruts}/>
      <MyButton text="Registrate !" />
      {/* <Register/> */}
      <RegisterUser/>
    </div>
    </>
  );
}

export default App