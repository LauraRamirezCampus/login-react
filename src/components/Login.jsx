import React,{useState}from 'react';


export function Login() {
const [correo,setCorreo]=useState("")
const [contraseña,setContraseña]=useState("")

  const envio = async (e) => {
    e.preventDefault();
    
    let data = { correo, contraseña };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    try {
      let res = await fetch("http://127.10.10.9:5112/login", requestOptions);
      const jsonres = await res.json();
      if (jsonres===200) {
        
        setCorreo("");
        setPassword("");
      }
      console.log(jsonres);
    } catch (error) {
      
    }
    alert("inicia sesion correctamente")
  
    document.getElementById("modal").innerHTML=`<h1>Inicia sesion</h1>`
  
  
    

  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={envio}>
        <label htmlFor="correo">correo</label>
        <input type="email" name='correo' id="correo" value={correo} onChange={(e)=>setCorreo(e.target.value)}/><br />
        <label htmlFor="contraseña">contraseña</label>
        <input type="password" name='contraseña' id="contraseña" value={contraseña} onChange={(e)=>setContraseña(e.target.value)} /><br />
        <button type="submit">iniciar sesion</button>
        <a href="http://localhost:5173/registrar"><p>registrar</p></a>
      </form>
     
    </div>
  )
}
