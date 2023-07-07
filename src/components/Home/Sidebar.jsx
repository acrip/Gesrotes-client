import { useState } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdDiamond } from 'react-icons/md'
import { BsCardChecklist } from 'react-icons/bs'
import { FiUserCheck } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { VscTools } from 'react-icons/vsc'
import { IoIosLogOut } from 'react-icons/io'

function Sidebar() {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Verificar estudiantes", icon: BsCardChecklist, to: "estudiantes/" },
    { title: "Verificar docentes", icon: FiUserCheck, to: "docentes/" },
    { title: "Asignaturas", icon: HiOutlineBookOpen, to: "asignaturas/" },
    { title: "Configuración", icon: VscTools, gap: true },
    { title: "Salir", icon: IoIosLogOut }
  ];
  const halfIndex = Math.ceil(Menus.length / 2);
  const firstHalf = Menus.slice(0, halfIndex);
  const secondHalf = Menus.slice(halfIndex);

  return (
    <div className={` ${open ? "w-80" : "w-20 "} bg-white-soft  h-[96vh] p-5 pt-8 m-5 border rounded-2xl relative`}>
      <div className="flex gap-x-4 items-center">
        <MdDiamond
          size={40}
          className='absolute cursor-pointer duration-500 -mt-3'
          onClick={() => setOpen(!open)}
        />
        <h1 className={`text-neutral-500 origin-left font-poppins text-xl duration-200 -mt-4 ml-12 ${!open && "scale-0"}`}>GESROTES</h1>
        <GiHamburgerMenu
          size={30}
          className={`absolute cursor-pointer right-7 top-4 ${!open && "scale-0"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className=" mt-4 border-t border-gray- "></div>
      <ul className="pt-6">
        <h1 className={`text-xl font-poppins font-bold mt-4 mb-4 ${!open && "scale-0"}`}>GESTIÓN</h1>
        {firstHalf.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-white-strong text-neutral-500 text- text-xl items-center gap-x-4 ${Menu.gap ? "mt-16" : "mt-7"}`}>
            {Menu.icon && <Menu.icon />}
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
            {Menu.icon && <Menu.icon />}
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