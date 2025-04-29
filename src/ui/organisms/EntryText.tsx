import Button from "../atoms/Button";
import SwitchEmail from "../molecules/SwitchEmail";

export default function EntryText(){
    return (
      <div className="p-5 h-[86vh] flex flex-col justify-center gap-4">
        <div>
          <Button text="Exploring" />
        </div>
        <h1 className="text-[3rem] text-white md:w-[50%] leading-tight">
          Pack Your Bags, Let's Go SomeWhere Amazing
        </h1>
        <div className="text-white font-light">
          <p className="">
            Whether you're chasing adventure, relaxation, or something in
            between, your next{" "}
          </p>
          <p>incredible journey starts here. Let's make it happen!</p>
        </div>
        <SwitchEmail />
      </div>
    );
}