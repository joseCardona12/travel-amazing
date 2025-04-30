import { IImageCard } from "../../interfaces/image_card";
import { DATA_IMAGE_CARD } from "../../utils/constanst/dataImageTravelSimple";
import CardImage from "../organisms/CardImage";

export default function Images() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-2 p-2">
        {DATA_IMAGE_CARD.map((image: IImageCard) => (
          <CardImage
            url={image.url}
            height="300px"
            title={image.title}
            paragraph={image.paragraph}
            textButton={image.button}
          />
        ))}
      </div>
    </section>
  );
}
