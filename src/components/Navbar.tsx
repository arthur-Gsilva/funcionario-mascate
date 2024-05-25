import { FaClock } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { Button } from "./ui/button";

import { MdMicrowave } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

export const Navbar = () => {
    return(
        <div className="bg-[#825734] h-screen w-40 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-10 ">
                <div>
                    <Button variant='secondary' size='lg'>
                        <MdMicrowave className="text-2xl"/>
                    </Button>
                    
                </div>
                <div>
                    <Button variant='secondary' size='lg'>
                        <FaClock className="text-2xl"/>
                    </Button>
                    
                </div>
                <div>
                    <Button variant='secondary' size='lg'>
                        <GrUserManager className="text-2xl"/>
                    </Button>
                    
                </div>
                <div>
                    <Button variant='secondary' size='lg'>
                        <IoIosRestaurant className="text-2xl"/>
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}