export default function ChargedCard({ title, count }) {
    return (
        <div className="bg-sky-100 p-5 border-1 border-sky-200 rounded-md text-center w-200">
            <p>{title} : </p>
            <p className="font-extrabold text-2xl">{count}개</p>
        </div>
    )
}
