//https://www.youtube.com/watch?v=MszSqhEw__8&t=833s siderbar por Pradip


import { useState } from "react";
import { FaArrowLeft, FaDragon, FaSistrix, FaReact, FaAngleDown} from "react-icons/fa";

export const SideBar = () => {
  const[open, setOpen] = useState(true);
  const[submenuOpen, setMenuOpen] = useState(false);

  const menus = [
    {title: "Paginas1", icon:<FaReact/>, spacing: true },
    {title: "Paginas2", icon:<FaReact/>},
    {title: "Paginas2", icon:<FaReact/>, spacing: true},
    {title: "Paginas2", icon:<FaReact/>},
    {title: "Paginas3", icon:<FaReact/>, spacing: true,
      submenu: true,
      submenuItems: [
        {title: "Paginas1"},
        {title: "Paginas2"},
        {title: "Paginas3"},
      ],
    },
  ];
  
  
  return (
    <div>
      
      <div className={`bg-indigo-900 h-screen p-5 pt-8 ${open ? "w-72" : "w-24" } 
            duration-300 relative`}>
          <FaArrowLeft className={`bg-indigo-100 text-indigo-900 text-3xl 
            rounded-full absolute top-9 
            -right-3 border border-indigo-900 p-1 
            cursor-pointer ${!open && "rotate-180"}`} 
            onClick={() => setOpen(!open)}
            />  
            <div className="justify-start">
              <FaDragon className={`bg-indigo-300 text-3xl rounded-full p-1 
              cursor-pointer block float-left mr-2 duration-500 ${!open && "rotate-[360deg]"}`}/></div>
              <h1 className={`text-indigo-500 origin-left text-2xl duration-300 font-semibold ${!open && "scale-0"}`}>
                Dashboard
                </h1> 


        <div className={`flex items-center rounded-md bg-indigo-100 mt-6 ${!open ? "p-2.5":"p-4"}`} >
          <FaSistrix className={`text-white text-lg block float-left cursor-pointer ${!open && 'mr-2'}`}/>
          <input 
            type={"search"} 
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
        </div>    

        <ul className="pt-2">
          {menus.map((menu,index) => (
            <>
              <li key={index} className={`text-indigo-300 text-sm 
                flex items-center gap-x-4 cursor-pointer p-2 
                  hover:bg-indigo-500 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                  <span>{menu.icon}</span>
                  <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                  {menu.submenu && (
                    <FaAngleDown className={`${submenuOpen && "rotate-180"}`} onClick={ () => setMenuOpen(!submenuOpen)}/>
                  )}
              </li>


                {menu.submenu  && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItems, index) =>(
                      <li key={index} className={`text-indigo-300 text-sm 
                      flex items-center gap-x-4 cursor-pointer p-2 px-7
                        hover:bg-indigo-200 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                        {submenuItems.title}
                      </li>
                    ))}
                  </ul>
                )}

            </>
          ))}
          
          
          
          
          
          </ul>    




      </div>
    </div>
  )
}

