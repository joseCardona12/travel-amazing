interface ICardTestimonialProps {
  url_image: string;
  alt_image: string;
  name: string;
  addres: string;
  description: string;
}
export default function CardTestimonial({
  url_image,
  alt_image,
  name,
  addres,
  description,
}: ICardTestimonialProps) {
  return (
    <div className="bg-gray-100 rounded-[var(--border-radius-min)] p-4 flex flex-row md:flex-col md:justify-between w-full md:w-[25%] gap-6 md:gap-2">
      <div className="w-15 h-15">
        <img
          className="rounded-full object-cover w-full h-full"
          src={url_image}
          alt={alt_image}
        />
      </div>
      <div>
        <h3 className="font-medium text-[1.1rem]">{name}</h3>
        <h5 className="font-medium text-[.8rem]">{addres}</h5>
        <p className="text-[.8rem] text-gray-500">{description}</p>
      </div>
    </div>
  );
}
