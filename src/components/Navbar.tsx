"use client"

import { FaClock } from "react-icons/fa6";
import { IoIosRestaurant } from "react-icons/io";
import { Button } from "./ui/button";

import { MdMicrowave } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { useRouter, usePathname } from "next/navigation";

export const Navbar = () => {

    const router = useRouter()
    const pathname = usePathname()

    return(
        <div className="bg-[#825734] fixed left-0 top-0 bottom-0  w-20 md:w-40  min-[2000px]:w-1/5">
            <div className=" col-center h-full">
                <div className="flex flex-col items-center gap-10 ">
                    <div>
                        <Button 
                            variant='secondary' 
                            onClick={() => router.push('/fila')}
                            style={{backgroundColor: pathname === '/fila' ? '#D2BD75' : '#fff'}}
                            className="md:p-10"
                        >
                            <MdMicrowave className="text-2xl min-[2000px]:text-6xl" />
                        </Button>
                        
                    </div>
                    <div>
                        <Button 
                            variant='secondary' 
                            onClick={() => router.push('/reservas')}
                            style={{backgroundColor: pathname === '/reservas' ? '#D2BD75' : '#fff'}}
                            className="md:p-10"
                        >
                            <FaClock className="text-2xl min-[2000px]:text-6xl"/>
                        </Button>
                        
                    </div>
                    <div>
                        <Button 
                            variant='secondary' 
                            onClick={() => router.push('/pedidos')}
                            style={{backgroundColor: pathname === '/pedidos' ? '#D2BD75' : '#fff'}}
                            className="md:p-10"
                        >
                            <GrUserManager className="text-2xl min-[2000px]:text-6xl"/>
                        </Button>
                        
                    </div>
                    <div>
                        <Button variant='secondary' className="md:p-10">
                            <IoIosRestaurant className="text-2xl min-[2000px]:text-6xl"/>
                        </Button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}