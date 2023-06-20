import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from 'react'

function Sidebar() {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Verificar estudiantes", src: "verify", to: "estudiantes/" },
    { title: "Verificar docentes", src: "verify", to: "docentes/" },
    { title: "Asignaturas", src: "book", to: "asignaturas/" },
    { title: "Configuración ", src: "tool", gap: true },
    { title: "Salir", src: "out" },
  ];
  const halfIndex = Math.ceil(Menus.length / 2);
  const firstHalf = Menus.slice(0, halfIndex);
  const secondHalf = Menus.slice(halfIndex);

  const activeStyle = 'bg-gray-700'

  return (
    <div className={` ${open ? "w-80" : "w-20 "} bg-white-soft h-screen p-5 pt-8 m-5 mb-20 border rounded-3xl relative duration-300`}>
      <img
        src="./src/assets/sidebarControl.png"
        className={`absolute cursor-pointer right-7 top-9 w-7 border-dark-purple border-2 rounded-sm  ${!open && "opacity-0"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img src="./src/assets/logo2.png" className={`cursor-pointer duration-500 rounded-full -mt-3 ${open && "-[3rotate60deg scale-50]"}`} />
        <h1 className={`text-neutral-500 origin-left font-poppins text-xl duration-200 -mt-4 ${!open && "scale-0"}`}> GESROTES </h1>
      </div>
      <div className=" mt-4 border-t border-gray- "></div>
      <ul className="pt-6">
        <h1 className={`text-xl font-poppins font-bold mt-4 mb-4 ${!open && "scale-0"}`}>GESTIÓN</h1>
        {firstHalf.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white-strong text-neutral-500 text- text-xl items-center gap-x-4 
              ${Menu.gap ? "mt-16" : "mt-7"}
              `}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <NavLink
                to={Menu.to}
                >
                {Menu.title}
              </NavLink>
            </span>

          </li>
        ))}
        <h1 className={`text-xl font-bold mt-20 -mb-10 ${!open && "scale-0"}`}>MI PERFIL</h1>
        {secondHalf.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-neutral-500 text- text-xl items-center gap-x-4 
              ${Menu.gap ? "mt-16" : "mt-7"} ${index === 0 && "bg-light-white"} 
              `}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Sidebar }