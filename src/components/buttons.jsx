export const Button1 = ({Count, msg}) => {
    return (
        <button className="bg-[#E6E6E6] text-[#808080] rounded-full px-4 py-[6px]">
            {msg}({Count})
        </button>

    )
}

export const Button2 = ({Count, msg}) => {
    return (
        <button className="bg-[#146EB4] text-white rounded-full px-4 py-[6px]">
            {msg}({Count})
        </button>

    )
}