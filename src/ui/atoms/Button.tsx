import { HTMLAttributes, ReactElement } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    icon?:ReactElement,
    text:string,
}
export default function Button({
    icon,
    text,
    ...props
}: IButtonProps){
    return (
      <button
        {...props}
        className="border border-white/30 p-[6px] pl-4 pr-4 rounded-2xl text-white flex gap-2 items-center bg-white/10 hover:bg-white/20 transition-colors duration-100 cursor-pointer"
      >
        {icon && <span>{icon}</span>}
        {text}
      </button>
    );
}