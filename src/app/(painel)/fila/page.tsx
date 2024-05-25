import { BoxContent } from "@/components/BoxContent"

const page = () => {
    return(
        <div className="col-center py-8 w-full h-full">
            <div className=" w-full flex flex-col items-center gap-20 md:flex-row md:gap-0 md:justify-evenly 2xl:h-2/3 2xl:justify-around">
                <div className="h-full min-[2000px]:w-1/4">
                    <h2 
                        className="text-center mb-5 text-2xl 2xl:text-4xl min-[2000px]:text-6xl"
                    >
                        Fila
                    </h2>

                    <div className="bg-white flex rounded h-full overflow-hidden font-semibold w-full">
                        <div className="w-36 overflow-y-auto 2xl:w-48  min-[2000px]:w-full">
                            <div className="bg-[#9DA6B9] p-1 pl-3 rounded-s text-white ">Esperando</div>
                            <div className="col-center gap-4 text-xl md:text-5xl py-3">
                                <p>666</p>
                                <p>666</p>
                            </div>
                        </div>

                        <div className="w-36 overflow-y-auto min-[2000px]:w-full">
                            <div className="bg-[#3E8658] p-1 pl-3 rounded-e text-white">Atendidos</div>
                            <div className="col-center gap-4 text-xl md:text-5xl py-3 text-[#3E8658]">
                                <p>666</p>
                                <p>666</p>
                                <p>666</p>
                                <p>666</p>
                                <p>666</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-center gap-4 min-[2000px]:grid min-[2000px]:grid-cols-2">
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

            <div className="mt-16 min-[2000px]:text-5xl">
                <h5 className="text-center mb-2">Cancelados: </h5>
                <div className="bg-white flex items-center gap-5 text-red-700 p-3 rounded text-xl font-bold min-[2000px]:text-4xl">
                    <span>234</span>
                    <span>265</span>
                    <span>765</span>
                </div>
            </div>
        </div>
    )
}

export default page