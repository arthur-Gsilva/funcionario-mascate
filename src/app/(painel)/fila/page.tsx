import { BoxContent } from "@/components/BoxContent"

const page = () => {
    return(
        <div className="col-center py-8 w-full h-full">
            <div className=" w-full flex items-center justify-evenly 2xl:h-2/3">
                <div className="h-full">
                    <h2 
                        className="text-center mb-5 text-2xl 2xl:text-4xl"
                    >
                        Fila
                    </h2>

                    <div className="bg-white flex rounded h-full overflow-hidden font-semibold ">
                        <div className="w-36 overflow-y-auto 2xl:w-48">
                            <div className="bg-[#9DA6B9] p-1 pl-3 rounded-s text-white ">Esperando</div>
                            <div className="col-center gap-4 text-3xl py-3">
                                <p>666</p>
                                <p>666</p>
                            </div>
                        </div>

                        <div className="w-36 overflow-y-auto">
                            <div className="bg-[#3E8658] p-1 pl-3 rounded-e text-white">Atendidos</div>
                            <div className="col-center gap-4 text-3xl py-3 text-[#3E8658]">
                                <p>666</p>
                                <p>666</p>
                                <p>666</p>
                                <p>666</p>
                                <p>666</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-center gap-4">
                    <BoxContent 
                        title="Clientes Presentes"
                        number={43}
                    />
                    <BoxContent 
                        title="Mesas Ocupadas"
                        number={9}
                    />
                    <BoxContent 
                        title="Mesas Vazias"
                        number={6}
                    />
                </div>
            </div>

            <div className="mt-16">
                <h5 className="text-center">Cancelados: </h5>
                <div className="bg-white flex items-center gap-5 text-red-700 p-3 rounded text-xl font-bold">
                    <span>234</span>
                    <span>265</span>
                    <span>765</span>
                </div>
            </div>
        </div>
    )
}

export default page