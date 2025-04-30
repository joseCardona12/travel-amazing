interface IContentImageProps {
  url: string;
  number: number;
}
export default function ContentImage({ url, number }: IContentImageProps) {
  return (
    <div className=" ml-0">
      <span className="text-[.7rem] flex items-start text-gray-400">
        /{number}
      </span>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className={` w-[94vw] h-[200px] md:w-[165px] md:h-[150px] rounded-[var(--border-radius-min)] bg-cover bg-center`}
      ></div>
    </div>
  );
}
