import { BoxContent } from "@/components/BoxContent"

const page = () => {
    return(
        <div className="col-center">
            <h1 className="mb-8 text-xl min-[2000px]:text-5xl">Reservas</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-8">
                <BoxContent 
                    title="Clientes Presentes"
                    number={23}
                />
                <BoxContent 
                    title="Mesas ocupadas"
                    number={9}
                />
                <BoxContent 
                    title="Clientes Presentes"
                    number={23}
                />
            </div>

            <div className="my-8 text-center bg-[#928C74] text-white p-5 rounded-md w-full">
                <h2 className="text-xl mb-3 min-[2000px]:text-4xl">Mesas reservadas</h2>
                <p className="text-3xl min-[2000px]:text-6xl">1</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-8">
                <BoxContent 
                    title="Cadeiras disponíveis"
                    number={23}
                />
                <BoxContent 
                    title="Mesas vazias"
                    number={9}
                />
                <BoxContent 
                    title="cadeiras vazias"
                    number={23}
                />
            </div>
        </div>
    )
}

export default page