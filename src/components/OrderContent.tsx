import { order } from "@/types/order"
import { MdPeopleAlt } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { Button } from "./ui/button";

type Props = {
    data: order
}

export const OrderContent = ({ data }: Props) => {


    const idFormat = (n: number) => {
        if(n.toString().length === 1){
            return '00'+ n
        } else if (n.toString().length === 2){
            return '0'+ n
        } else{
            return n
        }
    }

    return(
        <div 
            className="flex items-center justify-around p-1 border-2 border-[#825734] min-[2000px]:text-3xl min-[2000px]:p-3"
            style={{color: data.status === 'Reservado' ? '#7175D4' : 'initial'}}
        >
            <div>
                <div className="mb-2 cursor-pointer hover:underline">{idFormat(data.id)}</div>

                <div className="flex items-center gap-4">
                    <div>
                        <MdPeopleAlt /> {data.people}
                    </div>
                    <div>
                        <MdTableBar /> {data.tables}
                    </div>
                </div>
            </div>

            <div>
                {data.status === 'Reservado' &&
                    <p>Reservado</p>
                }

                {data.status === 'A fazer' &&
                    <div className="flex items-center gap-3">
                        <FaEdit className="cursor-pointer text-yellow-600" />
                        <FaRegCheckCircle className="cursor-pointer text-[#00A144]"/>
                        <IoIosCloseCircleOutline className="cursor-pointer text-red-600"/>
                    </div>
                }

                {data.status === 'Feito' &&
                    <Button size='sm' className="bg-[#825734] p-3">Finalizar</Button>
                }
            </div>
        </div>
    )
}