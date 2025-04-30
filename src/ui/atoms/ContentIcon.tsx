import { ReactElement } from "react";

interface IContenIconProps {
  icon: ReactElement;
}
export default function ContentIcon({ icon }: IContenIconProps) {
  return (
    <div className="w-7 h-7 bg-white/20 text-white rounded-full border border-white/30 p-2 flex justify-center items-center cursor-pointer hover:bg-white/30">
      <span>{icon}</span>
    </div>
  );
}
