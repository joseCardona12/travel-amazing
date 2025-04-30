import LearnMore from "./LearnMore";

interface ICardProps {
  title: string;
  description: string;
  number: number;
}
export default function Card({ title, description, number }: ICardProps) {
  return (
    <div className="bg-gray-100 rounded-[var(--border-radius-min)] p-3 md:w-[33.33%] flex flex-col justify-between gap-4">
      <h6 className="text-gray-600 text-[.9rem]">/{number}</h6>
      <div>
        <h2 className="font-medium text-[1.1rem]">{title}</h2>
        <p className="text-[.8rem] text-gray-600">{description}</p>
      </div>
      <LearnMore />
    </div>
  );
}
