import {SideBar} from "../components/SideBar"; 
import {Home} from './Home';



    
export const HomePage = () => {
    
    return (
        <div className="flex">
            <SideBar/>
            
            
              
            <div className="p-7">
                
                <h1 className="text-2xl font-semibold"><Home/> </h1>
                
                </div>       
        </div>




    
  )
}


