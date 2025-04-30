import { ArrowRight } from "lucide-react";
import { LIST_FOOTER_DATA } from "../../utils/constanst/listFooterData";

export default function Footer() {
  return (
    <footer className="p-2">
      <div className="bg-[var(--color-black)] text-white p-6 flex flex-col gap-15 rounded-[var(--border-radius-min)] pt-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-6">
            <h2 className="text-[1.8rem] w-[80%] md:text-[2.3rem] md:w-[40%]">
              Ready to pack your bags? We've got the best deals waiting for you
            </h2>
            <div className="flex justify-between items-center gap-2 bg-white rounded-3xl pl-4 pr-4 p-2 text-[var(--color-black)] md:w-[150px]">
              <p>Get in touch</p>
              <span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="flex gap-20">
            <nav>
              <ul className="flex flex-col gap-2 text-[.9rem]">
                <li className="font-normal text-[1.4rem]">Explore</li>
                {LIST_FOOTER_DATA.explore.map((item) => (
                  <li className="font-normal">{item.name}</li>
                ))}
              </ul>
            </nav>
            <nav>
              <ul className="flex flex-col gap-2 text-[.9rem]">
                <li className="font-normal text-[1.4rem]">Support</li>
                {LIST_FOOTER_DATA.support.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </nav>
            <nav>
              <ul className="flex flex-col gap-2 text-[.9rem]">
                <li className="font-normal text-[1.4rem]">Special Offers</li>
                {LIST_FOOTER_DATA.special_offers.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <hr className="text-white" />
        <div className="flex justify-between text-[.8rem] font-normal">
          <span>@2025 All rights reserved. Bi</span>
          <span>privacy % Policy</span>
          <span>Tearms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
