import { usePosts } from "../context/postContext";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { VscEmptyWindow } from "react-icons/vsc";
import {SideBar} from "../components/SideBar"; 
import {Menu} from "../components/Menu";
import { NavBar } from "../components/NavBar";
import { CardIzq } from "../components/Card/CardIzq";
import { CardMed } from "../components/Card/CardMed.js";
import {CardDer} from "../components/Card/CardDer";

const sidebar = document.querySelector("aside");
    const maxSidebar = document.querySelector(".max")
    const miniSidebar = document.querySelector(".mini")
    const roundout = document.querySelector(".roundout")
    const maxToolbar = document.querySelector(".max-toolbar")
    const logo = document.querySelector('.logo')
    const content = document.querySelector('.content')
    const moon = document.querySelector(".moon")
    const sun = document.querySelector(".sun")

    

    
export const HomePage = () => {
    return (
        <div>
             <NavBar/>
             
             <div className="mt-2">
                
                    
                    
                    <div className="flex justify-between flex-wrap m-1 p-1"> 
                        <div><SideBar/> </div>                                      
                        <div><CardIzq/></div>
                        <div><CardMed/></div>
                        <div><CardDer/></div>
                    </div>

             

            </div>



        </div>        
    





    
  )
}


