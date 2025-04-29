import EntryText from "../organisms/EntryText";
import Header from "../organisms/Header";
export default function Hero(){
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
        </div>
      </div>
    );
}