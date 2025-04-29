import { PhoneCall } from "lucide-react";
import Button from "../atoms/Button";
import InputSearch from "../molecules/InputSearch";
import Nav from "../molecules/Nav";
import SelectLanguage from "../molecules/SelectLanguage";


export default function     Header(){
    return (
        <header className="flex items-center justify-between p-4 pl-6 pr-6 text-white">
            <div className="flex items-center gap-15">
                <h2 className="font-medium">Logo</h2>
                <Nav />
            </div>
            <InputSearch />
            <div className="flex gap-2 items-center">
                <SelectLanguage />
                <Button text="Contact Us" icon={<PhoneCall className="w-4 h-4" />} />
            </div>
        </header>
    )
}