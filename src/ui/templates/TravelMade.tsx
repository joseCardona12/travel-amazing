import { IImageTravelSimple } from "../../interfaces/image_travel_simple";
import {
  DATA_IMAGE_TRAVEL_SIMPLE,
  IMAGES_PUBLIC_PEXELS,
} from "../../utils/constanst/dataImageTravelSimple";
import ContentImage from "../atoms/ContentImage";
import ContentText from "../molecules/ContentText";
import CardStress from "../organisms/CardStress";

export default function TravelMade() {
  return (
    <section className="p-2 flex flex-col md:flex-row md:justify-between gap-10 md:gap-2">
      <div className="flex">
        <div className="flex flex-col justify-between md:p-0 gap-10">
          <div className="flex flex-col gap-2 items-center text-center pt-10">
            <ContentText text="Our Service " />
            <h2 className="text-[1.9rem] md:w-[60%]">
              Travel Made Simple, Adventures Made Amazing
            </h2>
            <p className="md:w-[75%]">
              Wheter it's a relaxing getaway or an adrenaline-filled adventure,
              we make every moment unforgettable.
            </p>
          </div>
          <div className="hidden md:flex md:flex-row md:gap-2">
            {DATA_IMAGE_TRAVEL_SIMPLE.map(
              (image: IImageTravelSimple, index: number) => (
                <ContentImage url={image.url} number={index} />
              )
            )}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${IMAGES_PUBLIC_PEXELS.image_stress}` }}
        className={` md:w-[50vw] p-2 rounded-[var(--border-radius-min)] h-[500px] bg-cover bg-center flex items-end`}
      >
        <CardStress />
      </div>
    </section>
  );
}
