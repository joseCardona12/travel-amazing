import Input from "../atoms/Input";

export default function SwitchEmail(){
    return (
      <div className="bg-white rounded-3xl flex justify-between gap-2 w-[350px] mt-5">
        <Input
          type="text"
          placeholder="Enter Your Email Here..."
          className="pl-4 outline-none"
        />
        <div className="bg-[var(--color-black)] p-3 rounded-3xl m-[2px] text-white pl-6 pr-6 cursor-pointer">
          Suscribe
        </div>
      </div>
    );
}