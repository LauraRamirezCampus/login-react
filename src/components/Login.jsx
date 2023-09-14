import React from 'react';


export function Login() {

  const envio = async (e) => {
    e.preventDefault();
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let data = { correo, contraseña };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    let res = await fetch("http://127.10.10.9:5112/login", requestOptions);
    const jsonres = await res.json();
    console.log(jsonres);
  
    document.getElementById("modal").innerHTML=`<h1>Inicia sesion</h1>`
  
  
    const token = jsonres.jwt
    
  console.log(jsonres)

  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={envio}>
        <label htmlFor="correo">correo</label>
        <input type="email" name='correo' id="correo" /><br />
        <label htmlFor="contraseña">contraseña</label>
        <input type="password" name='contraseña' id="contraseña" /><br />
        <button type="submit">iniciar sesion</button>
        <a href="http://localhost:5173/registrar"><p>registrar</p></a>
      </form>
     
    </div>
  )
}
