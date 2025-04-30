import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ContentIcon from "../atoms/ContentIcon";
import EntryText from "../organisms/EntryText";
import Header from "../organisms/Header";
import Button from "../atoms/Button";
import { ArrowDown } from "lucide-react";
export default function Hero() {
  return (
    <div className="m-2 ">
      <div className="relative h-screen bg-[url('/images/image-hero.jpg')] bg-cover bg-center rounded-[6px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent rounded-[6px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent rounded-[6px]"></div>
        <div className="relative z-10">
          <Header />
          <hr className="w-[94vw] m-auto border-white/30" />
          <EntryText />
        </div>
        <div className="absolute right-4 top-120 flex flex-col gap-2 z-12">
          <ContentIcon icon={<FaWhatsapp />} />
          <ContentIcon icon={<FaYoutube />} />
          <ContentIcon icon={<FaInstagram />} />
        </div>
        <div className="absolute right-4 bottom-6">
          <Button
            text="Explore More"
            icon={<ArrowDown className="w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  );
}
