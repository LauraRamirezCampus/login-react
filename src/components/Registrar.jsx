import React from "react";

export function Registrar() {

    const registro = async (e) =>{
      e.preventDefault();
      let correo = document.getElementById("correoR").value;
      let contraseña = document.getElementById("contraseñaR").value;
      let data = { correo, contraseña };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      let res = await fetch("http://127.10.10.9:5112/registrar", requestOptions);
      alert("usuario registrado")
      console.log("w");
      console.log(res);
      const jsonres = await res.json()
      console.log(jsonres);
      document.getElementById("modal").innerHTML=`<h1>Registrado correctamente</h1>`      
      
    }
    return(
       <div>
        <div id="registrar">
        <h1>Registrarse</h1>
        <form onSubmit={registro}>
        <label htmlFor="correo">correo</label>
        <input type="email" name='correo' id="correoR" /><br />
        <label htmlFor="contraseña">contraseña</label>
        <input type="password" name='contraseña' id="contraseñaR" /><br />
        <button type="submit">Registrarse</button>
      </form>
      </div>
       </div> 
        
    )
  } ;