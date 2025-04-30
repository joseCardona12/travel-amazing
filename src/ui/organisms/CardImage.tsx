import { MoveUpRight } from "lucide-react";
import Button from "../atoms/Button";

interface ICarImageProps {
  url: string;
  height: string;
  title: string;
  paragraph: string;
  textButton: string;
}
export default function CardImage({
  url,
  height,
  title,
  paragraph,
  textButton,
}: ICarImageProps) {
  return (
    <div
      style={{ backgroundImage: `url(${url})`, height }}
      className={`rounded-[var(--border-radius-min)] relative bg-center bg-cover w-full md:50% lg:33.33%`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent rounded-[6px]"></div>
      <div className="cursor-pointer bg-white w-6 h-6 p-5 rounded-full text-[var(--color-black)] flex justify-center items-center absolute right-5 top-5 z-10">
        <span className="text-black">
          <MoveUpRight className="w-4 h-4" />
        </span>
      </div>
      <div className="text-white flex  h-full p-6 relative z-10 flex-col gap-2 justify-end">
        <h3 className="text-[1.3rem]">{title}</h3>
        <p>{paragraph}</p>
        <div className="flex gap-2 items-center">
          <Button text={textButton} />
          <Button text={textButton} />
        </div>
      </div>
    </div>
  );
}
