import ActivePage from "../atoms/activePage";
import LearnMore from "../molecules/LearnMore";
import Pagination from "../molecules/Pagination";

export default function CardStress(){
    return (
      <div className="flex flex-col gap-6 bg-white rounded-[var(--border-radius-min)] p-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-[1.2rem]">
            Stress? Not on Or Watch!
          </h2>
          <p className="text-[.8rem] w-[94%]">
            Say goodbye to trip-planning headaches. We take carte of every
            little detail-from finding the best.
          </p>
          <LearnMore />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <ActivePage isActive />
            <ActivePage />
            <ActivePage />
            <ActivePage />
          </div>
          <Pagination />
        </div>
      </div>
    );
}