import { MoveRight } from "lucide-react";

export default function LearnMore(){
    return (
        <div className="flex gap-2 items-center">
            <div className="bg-[var(--color-black)] rounded-full flex justify-center items-center p-[2px]">
                <MoveRight className="h-4 w-4 text-white" />
            </div>
            <p className="text-[.9rem]">Learn More</p>
        </div>
    )
}