import { OrderContent } from "@/components/OrderContent"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table } from "@/components/ui/table"
import { orders } from "@/utils/orders"

const page = () => {
    return(
        <div className="col-center pt-10 w-3/4 mx-auto gap-8">
            <div className="w-full flex items-center justify-between min-[2000px]:text-3xl">
                <div>Aplicar filtro:</div>

                <div className="flex gap-4">
                    <Input 
                        type="time"
                        placeholder="Horário"
                    />
                    <Input 
                        type="number"
                        placeholder="Mesa"
                    />
                    <Input 
                        type="number"
                        placeholder="Pesquisar comanda"
                    />

                    <Button className="bg-[#825734]">Filtrar</Button>
                </div>
                
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {orders.map((item) => (
                    <OrderContent 
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default page