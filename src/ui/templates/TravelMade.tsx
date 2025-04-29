import { IImageTravelSimple } from "../../interfaces/image_travel_simple";
import { DATA_IMAGE_TRAVEL_SIMPLE } from "../../utils/constanst/dataImageTravelSimple";
import ContentImage from "../atoms/ContentImage";
import ContentText from "../molecules/ContentText";
import CardStress from "../organisms/CardStress";

export default function TravelMade(){
    return (
      <section className="p-2 flex justify-between gap-2">
        <div className="flex">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2 items-center text-center pt-10">
              <ContentText text="Our Service " />
              <h2 className="text-[1.9rem] md:w-[60%]">
                Travel Made Simple, Adventures Made Amazing
              </h2>
              <p className="w-[75%]">
                Wheter it's a relaxing getaway or an adrenaline-filled
                adventure, we make every moment unforgettable.
              </p>
            </div>
            <div className="flex gap-2">
              {DATA_IMAGE_TRAVEL_SIMPLE.map(
                (image: IImageTravelSimple, index: number) => (
                  <ContentImage url={image.url} number={index} />
                )
              )}
            </div>
          </div>
        </div>
        <div className="bg-[url('/images/strees-image.jpg')] w-[50vw] p-2 rounded-[var(--border-radius-min)] h-[500px] bg-cover bg-center flex items-end">
          <CardStress />
        </div>
      </section>
    );
}