import React from "react";
import MyButton from "./components/myButton";
import WelcomeText from "./components/welcomeText";
import ListFruts from "./components/fruts/listFruts";
import ButtonState from "./components/buttonState";
import Register from "./components/form/register";
import RegisterUser from "./components/users/registerUser";

const App = () => {

  const title = "Registrate";
  const user = false;
  const fruts = ['frutilla', 'banana', 'palta'];

  return (

    <>
    <div className="container p-2">

      {/* <ButtonState/> */}
      <h1 className="text-center">{title.toUpperCase()}</h1>
      {/* <MyButton text="boton1" />
      <WelcomeText user={user} />
      <ListFruts fruts={fruts}/> */}
      {/* <Register/> */}
      <RegisterUser/>
    </div>
    </>
  );
}

export default App