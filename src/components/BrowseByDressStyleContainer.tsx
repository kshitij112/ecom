import { FunctionComponent } from "react";

const BrowseByDressStyleContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[2417px] left-[100px] rounded-21xl bg-whitesmoke-100 w-[1239px] h-[866px] overflow-hidden text-left text-17xl text-black font-satoshi">
      <b className="absolute top-[70px] left-[calc(50%_-_343.5px)] text-29xl font-integral-cf text-center">
        BROWSE BY dress STYLE
      </b>
      <div className="absolute top-[192px] left-[64px] rounded-xl bg-white w-[407px] h-[289px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[407px] h-[289px] object-cover"
          alt=""
          src="/image-11@2x.png"
        />
        <b className="absolute top-[25px] left-[36px]">Casual</b>
      </div>
      <div className="absolute top-[501px] left-[768px] rounded-xl bg-white w-[407px] h-[289px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[53px] w-[452px] h-[677px] object-cover"
          alt=""
          src="/image-14@2x.png"
        />
        <b className="absolute top-[25px] left-[36px]">Gym</b>
      </div>
      <div className="absolute top-[192px] left-[491px] rounded-xl bg-white w-[684px] h-[289px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[1306px] h-[870px] object-cover"
          alt=""
          src="/image-13@2x.png"
        />
        <b className="absolute top-[25px] left-[36px]">Formal</b>
      </div>
      <div className="absolute top-[501px] left-[64px] rounded-xl bg-white w-[684px] h-[289px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[42px] w-[770px] h-[616px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
        <b className="absolute top-[25px] left-[36px]">Party</b>
      </div>
    </div>
  );
};

export default BrowseByDressStyleContainer;
