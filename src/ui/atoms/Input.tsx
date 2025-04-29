import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    type:string
}
export default function Input({
    type,
    ...props
}: IInputProps){
    return (
        <input 
            className="outline-none"
            type={type}
        {...props}
        />
    )
}