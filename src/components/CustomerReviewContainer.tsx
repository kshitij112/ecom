import { FunctionComponent, useMemo, type CSSProperties } from "react";

type CustomerReviewContainerType = {
  starIconId?: string;
  starIconId2?: string;
  starIconId3?: string;
  starRatingId?: string;
  starIconId4?: string;
  reviewerName?: string;
  imageSrc?: string;
  testimonialText?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propFilter?: CSSProperties["filter"];
  propHeight?: CSSProperties["height"];
};

const CustomerReviewContainer: FunctionComponent<
  CustomerReviewContainerType
> = ({
  starIconId,
  starIconId2,
  starIconId3,
  starRatingId,
  starIconId4,
  reviewerName,
  imageSrc,
  testimonialText,
  propLeft,
  propFilter,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      filter: propFilter,
      height: propHeight,
    };
  }, [propLeft, propFilter, propHeight]);

  return (
    <div
      className="absolute top-[3461px] left-[100px] rounded-xl box-border w-[400px] h-60 overflow-hidden flex flex-row flex-wrap py-7 px-8 items-start justify-start text-left text-xl text-black font-satoshi border-[1px] border-solid border-gray-100"
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-row items-start justify-between">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
          <div className="flex flex-row items-start justify-start gap-[6.49px]">
            <img
              className="relative w-[22.58px] h-[22.58px]"
              alt=""
              src={starIconId}
            />
            <img
              className="relative w-[22.58px] h-[22.58px]"
              alt=""
              src={starIconId2}
            />
            <img
              className="relative w-[22.58px] h-[22.58px]"
              alt=""
              src={starIconId3}
            />
            <img
              className="relative w-[22.58px] h-[22.58px]"
              alt=""
              src={starRatingId}
            />
            <img
              className="relative w-[22.58px] h-[22.58px]"
              alt=""
              src={starIconId4}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <b className="relative leading-[22px]">{reviewerName}</b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={imageSrc}
              />
            </div>
            <div className="self-stretch relative text-base leading-[22px] text-gray-300">
              {testimonialText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewContainer;
