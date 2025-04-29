
interface IContenTextProps{
    text:string
}
export default function ContentText({
    text
}: IContenTextProps){
    return (
        <div className="border border-[var(--color-black)]/50 rounded-2xl p-1 pl-3 pr-3">
            {text}
        </div>
    )
}