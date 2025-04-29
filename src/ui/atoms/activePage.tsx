
interface IActivePageProps{
    isActive?:boolean,
}
export default function ActivePage({
    isActive
}:IActivePageProps){
    return <div className={`w-6 h-1 ${isActive ? "bg-[var(--color-black)]" : "bg-gray-300"} rounded-2xl`}></div>;
}