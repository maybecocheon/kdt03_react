

export default function ChargeStat({ title, chgerId}) {

    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate(`/festival/${contents.GUGUN_NM}`);
    // }

    return (
        <div className="font-bold hover:cursor-pointer hover:text-gray-300 p-5 border-1 border-black rounded-md">
            {title}({chgerId})
        </div>
    )
}
