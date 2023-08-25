import { FunctionComponent } from "react";

const ShopCoContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[230px] left-[101px] w-[1240px] flex flex-row items-start justify-between text-left text-base text-black font-satoshi">
      <div className="flex flex-col items-start justify-start gap-[35px] text-[33.45px] font-integral-cf">
        <div className="flex flex-col items-start justify-start gap-[25px]">
          <b className="relative">SHOP.CO</b>
          <div className="relative text-sm leading-[22px] font-satoshi text-gray-300 inline-block w-[248px]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </div>
        </div>
        <img className="relative w-[148px] h-7" alt="" src="/social.svg" />
      </div>
      <div className="flex flex-col items-start justify-start gap-[26px]">
        <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
          Company
        </div>
        <div className="relative leading-[19px] text-gray-300 whitespace-pre-wrap">
          <p className="m-0">{`About          `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Features          `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Works          `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Career  `}</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[26px]">
        <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
          Help
        </div>
        <div className="relative leading-[19px] text-gray-300">
          <p className="m-0">Customer Support</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Delivery Details</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Terms & Conditions`}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[26px]">
        <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
          FAQ
        </div>
        <div className="relative leading-[19px] text-gray-300 inline-block w-[149px]">
          <p className="m-0">Account</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Manage Deliveries</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Orders</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Payments</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[26px]">
        <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
          Resources
        </div>
        <div className="relative leading-[19px] text-gray-300">
          <p className="m-0">Free eBooks</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Development Tutorial</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">How to - Blog</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Youtube Playlist</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCoContainer;
