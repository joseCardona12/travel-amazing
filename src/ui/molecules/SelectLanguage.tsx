import { ChevronDown, Globe } from "lucide-react";

export default function SelectLanguage(){
    return (
        <div className="flex items-center gap-2 bg-white/10 p-[6px] pl-3 pr-3 rounded-2xl border border-white/30 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
            <Globe className="h-4 w-4" />
            ENG
            <ChevronDown className="w-4 h-4" />
        </div>
    )
}