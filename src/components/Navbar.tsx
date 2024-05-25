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
        <div className="bg-[#825734] min-h-screen w-40 flex flex-col justify-center items-center min-[2000px]:w-1/5">
            <div className="flex flex-col gap-10 ">
                <div>
                    <Button 
                        variant='secondary' 
                        size='lg' 
                        onClick={() => router.push('/fila')}
                        style={{backgroundColor: pathname === '/fila' ? '#D2BD75' : '#fff'}}
                        className="p-10"
                    >
                        <MdMicrowave className="text-2xl min-[2000px]:text-6xl" />
                    </Button>
                    
                </div>
                <div>
                    <Button 
                        variant='secondary' 
                        size='lg' 
                        onClick={() => router.push('/reservas')}
                        style={{backgroundColor: pathname === '/reservas' ? '#D2BD75' : '#fff'}}
                        className="p-10"
                    >
                        <FaClock className="text-2xl min-[2000px]:text-6xl"/>
                    </Button>
                    
                </div>
                <div>
                    <Button 
                        variant='secondary' 
                        size='lg' 
                        onClick={() => router.push('/pedidos')}
                        style={{backgroundColor: pathname === '/pedidos' ? '#D2BD75' : '#fff'}}
                        className="p-10"
                    >
                        <GrUserManager className="text-2xl min-[2000px]:text-6xl"/>
                    </Button>
                    
                </div>
                <div>
                    <Button variant='secondary' size='lg' className="p-10">
                        <IoIosRestaurant className="text-2xl min-[2000px]:text-6xl"/>
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}