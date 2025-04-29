
interface IContentImageProps{
    url:string,
    number:number,
}
export default function ContentImage({
    url,
    number,
}: IContentImageProps){
    return (
      <div>
        <span className="text-[.7rem] flex items-start text-gray-400">/{number}</span>
        <div
          className={`bg-[url('/images/${url}')] w-[165px] h-[150px] rounded-[var(--border-radius-min)] bg-cover bg-center`}
        ></div>
      </div>
    );
}