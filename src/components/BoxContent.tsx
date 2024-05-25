type Props = {
    title: string,
    number: number
}

export const BoxContent = ({ title, number }: Props) => {
    return(
        <div className="bg-[#825734] text-white border-black border w-36 h-36 flex flex-col items-center justify-center text-center gap-4 px-2 rounded-md">
            <h3>{title}</h3>
            <h4>{number}</h4>
        </div>
    )
}