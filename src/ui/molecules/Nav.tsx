import { INavHeader } from "../../interfaces/nav_header";
import { DATA_NAV_HEADER } from "../../utils/constanst/dataNavHeader";
import ItemNav from "../atoms/ItemNav";

export default function Nav(){
    return (
        <nav>
            <ul className="hidden md:flex gap-4 text-[.9rem] font-normal">
                {DATA_NAV_HEADER.map((item: INavHeader)=>(
                    <ItemNav name={item.name} />
                ))}
            </ul>
        </nav>
    )
}