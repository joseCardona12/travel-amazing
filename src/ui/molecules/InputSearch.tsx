import { Search } from "lucide-react";
import Input from "../atoms/Input";

export default function InputSearch() {
  return (
    <div className="hidden md:flex items-center p-[6px] pl-2 pr-2 text-white gap-2 border border-white/30 rounded-2xl bg-white/10">
      <Search className="w-4 h-4" />
      <Input type="search" value={"Search Destination"} />
    </div>
  );
}
