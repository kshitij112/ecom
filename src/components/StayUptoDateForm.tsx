import { FunctionComponent } from "react";

const StayUptoDateForm: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[101px] rounded-xl bg-black w-[1240px] overflow-hidden flex flex-row py-9 px-16 box-border items-center justify-between text-left text-21xl text-white font-integral-cf">
      <b className="relative leading-[45px] inline-block w-[551px] h-[94px] shrink-0">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </b>
      <div className="flex flex-col items-start justify-start gap-[14px] text-base text-gray-200 font-satoshi">
        <div className="rounded-43xl bg-white w-[349px] overflow-hidden flex flex-row py-3 px-4 box-border items-start justify-start gap-[12px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame6.svg"
          />
          <div className="relative">Enter your email address</div>
        </div>
        <div className="rounded-43xl bg-white w-[349px] overflow-hidden flex flex-row py-3 px-4 box-border items-center justify-center text-black">
          <div className="relative font-medium">Subscribe to Newsletter</div>
        </div>
      </div>
    </div>
  );
};

export default StayUptoDateForm;
