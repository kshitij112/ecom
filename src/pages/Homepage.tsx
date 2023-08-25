import { FunctionComponent } from "react";
import BrowseByDressStyleContainer from "../components/BrowseByDressStyleContainer";
import CustomerReviewContainer from "../components/CustomerReviewContainer";
import StayUptoDateForm from "../components/StayUptoDateForm";
import ShopCoContainer from "../components/ShopCoContainer";

const Homepage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[4370px] overflow-hidden text-left text-sm text-black font-satoshi">
      <img
        className="absolute top-[134px] left-[0px] w-[1440px] h-[663px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <img
        className="absolute h-[2.38%] w-[7.22%] top-[5.03%] right-[5.63%] bottom-[92.59%] left-[87.15%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[1.28%] w-[3.89%] top-[9.86%] right-[44.03%] bottom-[88.86%] left-[52.08%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-black w-[1440px] h-[38px] overflow-hidden text-white">
        <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_176px)]">
          <span>{`Sign up and get 20% off to your first order. `}</span>
          <span className="[text-decoration:underline] font-medium">
            Sign Up Now
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_-_10px)] left-[1320px] w-5 h-5 overflow-hidden"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className="absolute top-[62px] left-[100px] w-[1240px] flex flex-row items-center justify-center gap-[40px] text-base">
        <b className="relative text-[32px] font-integral-cf">SHOP.CO</b>
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative">Shop</div>
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/frame1.svg"
            />
          </div>
          <div className="relative">On Sale</div>
          <div className="relative">New Arrivals</div>
          <div className="relative">Brands</div>
        </div>
        <div className="flex-1 rounded-43xl bg-whitesmoke-100 overflow-hidden flex flex-row py-3 px-4 items-start justify-start gap-[12px] text-gray-200">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame2.svg"
          />
          <div className="relative">Search for products...</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame3.svg"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame4.svg"
          />
        </div>
      </div>
      <b className="absolute top-[237px] left-[100px] text-[64px] leading-[64px] flex font-integral-cf items-center w-[577px]">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </b>
      <div className="absolute top-[442px] left-[100px] text-base leading-[22px] text-gray-300 inline-block w-[545px]">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </div>
      <div className="absolute top-[507px] left-[100px] rounded-43xl bg-black w-[210px] h-[52px] overflow-hidden flex flex-row py-4 px-[54px] box-border items-center justify-center text-base text-white">
        <div className="relative font-medium">Shop Now</div>
      </div>
      <div className="absolute top-[607px] left-[100px] flex flex-row items-center justify-start gap-[32px] text-21xl">
        <div className="flex flex-col items-start justify-start">
          <b className="relative">200+</b>
          <div className="relative text-base leading-[22px] text-gray-300 mt-[-2px]">
            International Brands
          </div>
        </div>
        <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-gray-100" />
        <div className="flex flex-col items-start justify-start">
          <b className="relative">2,000+</b>
          <div className="relative text-base leading-[22px] text-gray-300 mt-[-2px]">
            High-Quality Products
          </div>
        </div>
        <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-gray-100" />
        <div className="flex flex-col items-start justify-start">
          <b className="relative">30,000+</b>
          <div className="relative text-base leading-[22px] text-gray-300 mt-[-2px]">
            Happy Customers
          </div>
        </div>
      </div>
      <div className="absolute top-[797px] left-[0px] bg-black w-[1440px] h-[122px]" />
      <img
        className="absolute h-[0.76%] w-[11.56%] top-[19.24%] right-[81.49%] bottom-[80%] left-[6.94%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <img
        className="absolute top-[839px] left-[372.48px] w-[91px] h-[38px] overflow-hidden"
        alt=""
        src="/zaralogo1-1.svg"
      />
      <img
        className="absolute top-[840px] left-[569.48px] w-[156px] h-9 overflow-hidden"
        alt=""
        src="/guccilogo1-1.svg"
      />
      <img
        className="absolute top-[842px] left-[831.48px] w-[194px] h-8 overflow-hidden"
        alt=""
        src="/pradalogo1-1.svg"
      />
      <img
        className="absolute h-[0.76%] w-[14.36%] top-[19.24%] right-[7.06%] bottom-[79.99%] left-[78.58%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group1.svg"
      />
      <b className="absolute top-[991px] left-[calc(50%_-_202px)] text-29xl font-integral-cf text-center">
        NEW ARRIVALS
      </b>
      <b className="absolute top-[1728px] left-[calc(50%_-_174px)] text-29xl font-integral-cf text-center">
        top selling
      </b>
      <b className="absolute top-[3363px] left-[calc(50%_-_620px)] text-29xl font-integral-cf">
        OUR HAPPY CUSTOMERS
      </b>
      <div className="absolute top-[1453px] left-[100px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-4.svg"
          />
          <img
            className="relative w-[8.79px] h-[16.72px]"
            alt=""
            src="/star-5.svg"
          />
        </div>
        <div className="relative">
          <span>4.5/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[1453px] left-[415px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="relative w-[8.79px] h-[16.72px]"
            alt=""
            src="/star-51.svg"
          />
        </div>
        <div className="relative">
          <span>3.5/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[1453px] left-[730px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-41.svg"
          />
          <img
            className="relative w-[8.79px] h-[16.72px]"
            alt=""
            src="/star-52.svg"
          />
        </div>
        <div className="relative">
          <span>4.5/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[1453px] left-[1045px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-2.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-3.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-41.svg"
          />
          <img
            className="relative w-[8.79px] h-[16.72px]"
            alt=""
            src="/star-52.svg"
          />
        </div>
        <div className="relative">
          <span>4.5/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[1104px] left-[100px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[296px] h-[444px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <div className="absolute top-[1104px] left-[415px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[14px] w-[268px] h-[402px] object-cover"
          alt=""
          src="/image-8@2x.png"
        />
      </div>
      <div className="absolute top-[1104px] left-[730px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[296px] h-[444px] object-cover"
          alt=""
          src="/image-9@2x.png"
        />
      </div>
      <div className="absolute top-[1104px] left-[1045px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[296px] h-[444px] object-cover"
          alt=""
          src="/image-10@2x.png"
        />
      </div>
      <b className="absolute top-[1418px] left-[100px] text-xl">
        T-
        <span className="lowercase">SHIRT</span>
        {` `}
        <span className="lowercase">WITH</span> T
        <span className="lowercase">APE</span> D
        <span className="lowercase">ETAILS</span>
      </b>
      <b className="absolute top-[1418px] left-[415px] text-xl">
        S<span className="lowercase">KINNY</span> F
        <span className="lowercase">IT</span> J
        <span className="lowercase">EANS</span>
      </b>
      <b className="absolute top-[1418px] left-[730px] text-xl">
        C<span className="lowercase">HECKERED</span> S
        <span className="lowercase">HIRT</span>
      </b>
      <b className="absolute top-[1418px] left-[1045px] text-xl">
        S<span className="lowercase">LEEVE</span> S
        <span className="lowercase">TRIPED</span> T-
        <span className="lowercase">SHIRT</span>
      </b>
      <div className="absolute top-[1480px] left-[100px] flex flex-row items-center justify-start text-5xl">
        <b className="relative">$120</b>
      </div>
      <div className="absolute top-[1480px] left-[1045px] flex flex-row items-center justify-start gap-[10px] text-5xl">
        <b className="relative">$130</b>
        <b className="relative [text-decoration:line-through] text-gray-200">
          $160
        </b>
        <div className="rounded-43xl bg-tomato-200 w-[58px] overflow-hidden shrink-0 flex flex-row py-1.5 px-3.5 box-border items-center justify-center text-xs text-tomato-100">
          <div className="relative font-medium">-30%</div>
        </div>
      </div>
      <div className="absolute top-[1480px] left-[415px] flex flex-row items-center justify-start gap-[10px] text-5xl">
        <b className="relative">$240</b>
        <b className="relative [text-decoration:line-through] text-gray-200">
          $260
        </b>
        <div className="rounded-43xl bg-tomato-200 w-[58px] overflow-hidden shrink-0 flex flex-row py-1.5 px-3.5 box-border items-center justify-center text-xs text-tomato-100">
          <div className="relative font-medium">-20%</div>
        </div>
      </div>
      <b className="absolute top-[1480px] left-[730px] text-5xl">$180</b>
      <div className="absolute top-[2219px] left-[231px] rounded-43xl bg-tomato-200 w-[58px] overflow-hidden flex flex-row py-1.5 px-3.5 box-border items-center justify-center text-xs text-tomato-100">
        <div className="relative font-medium">-20%</div>
      </div>
      <div className="absolute top-[2190px] left-[100px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-11.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-21.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-31.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-42.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-53.svg"
          />
        </div>
        <div className="relative">
          <span>5.0/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[2190px] left-[415px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-11.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-21.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-31.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-43.svg"
          />
        </div>
        <div className="relative">
          <span>4.0/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[2190px] left-[730px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-11.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-21.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-31.svg"
          />
        </div>
        <div className="relative">
          <span>3.0/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[2190px] left-[1045px] flex flex-row items-center justify-start gap-[13px]">
        <div className="flex flex-row items-start justify-start gap-[5.31px]">
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-11.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-21.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-31.svg"
          />
          <img
            className="relative w-[18.49px] h-[18.49px]"
            alt=""
            src="/star-43.svg"
          />
          <img
            className="relative w-[8.79px] h-[16.72px]"
            alt=""
            src="/star-54.svg"
          />
        </div>
        <div className="relative">
          <span>4.5/</span>
          <span className="text-gray-300">5</span>
        </div>
      </div>
      <div className="absolute top-[1841px] left-[100px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[296px] h-[444px] object-cover"
          alt=""
          src="/image-71@2x.png"
        />
      </div>
      <div className="absolute top-[1841px] left-[415px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[1px] w-[294px] h-[441px] object-cover"
          alt=""
          src="/image-81@2x.png"
        />
      </div>
      <div className="absolute top-[1841px] left-[730px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[296px] h-[444px] object-cover"
          alt=""
          src="/image-91@2x.png"
        />
      </div>
      <div className="absolute top-[1841px] left-[1045px] rounded-xl bg-whitesmoke-200 w-[295px] h-[298px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[22px] w-[252px] h-[378px] object-cover"
          alt=""
          src="/image-101@2x.png"
        />
      </div>
      <b className="absolute top-[2155px] left-[100px] text-xl">
        V<span className="lowercase">ERTICAL</span> S
        <span className="lowercase">TRIPED</span> S
        <span className="lowercase">HIRT</span>
      </b>
      <b className="absolute top-[2155px] left-[415px] text-xl">
        C<span className="lowercase">OURAGE</span> G
        <span className="lowercase">RAPHIC</span> T-
        <span className="lowercase">SHIRT</span>
      </b>
      <b className="absolute top-[2155px] left-[730px] text-xl">
        L<span className="lowercase">OOSE</span> F
        <span className="lowercase">IT</span> B
        <span className="lowercase">ERMUDA</span> S
        <span className="lowercase">HORTS</span>
      </b>
      <b className="absolute top-[2155px] left-[1045px] text-xl">
        F<span className="lowercase">ADED</span> S
        <span className="lowercase">KINNY</span> J
        <span className="lowercase">EANS</span>
      </b>
      <b className="absolute top-[2217px] left-[100px] text-5xl">$212</b>
      <b className="absolute top-[2217px] left-[163px] text-5xl [text-decoration:line-through] text-gray-200">
        $232
      </b>
      <div className="absolute top-[2217px] left-[1045px] flex flex-row items-center justify-start text-5xl">
        <b className="relative">$210</b>
      </div>
      <b className="absolute top-[2217px] left-[415px] text-5xl">$145</b>
      <b className="absolute top-[2217px] left-[730px] text-5xl">$80</b>
      <div className="absolute top-[1548px] left-[calc(50%_-_109px)] rounded-43xl box-border w-[218px] h-[52px] overflow-hidden flex flex-row py-4 px-[54px] items-center justify-center text-base border-[1px] border-solid border-gray-100">
        <div className="relative font-medium">View All</div>
      </div>
      <div className="absolute top-[2285px] left-[calc(50%_-_109px)] rounded-43xl box-border w-[218px] h-[52px] overflow-hidden flex flex-row py-4 px-[54px] items-center justify-center text-base border-[1px] border-solid border-gray-100">
        <div className="relative font-medium">View All</div>
      </div>
      <div className="absolute top-[1663.5px] left-[calc(50%_-_620.5px)] box-border w-[1241px] h-px border-t-[1px] border-solid border-gray-100" />
      <BrowseByDressStyleContainer />
      <CustomerReviewContainer
        starIconId="/star-12.svg"
        starIconId2="/star-22.svg"
        starIconId3="/star-32.svg"
        starRatingId="/star-44.svg"
        starIconId4="/star-55.svg"
        reviewerName="Sarah M."
        imageSrc="/frame5.svg"
        testimonialText={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
      />
      <CustomerReviewContainer
        starIconId="/star-13.svg"
        starIconId2="/star-13.svg"
        starIconId3="/star-13.svg"
        starRatingId="/star-13.svg"
        starIconId4="/star-13.svg"
        reviewerName="Sarah M."
        imageSrc="/star-13.svg"
        testimonialText={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
        propLeft="-320px"
        propFilter="blur(4px)"
        propHeight="240px"
      />
      <CustomerReviewContainer
        starIconId="/star-12.svg"
        starIconId2="/star-23.svg"
        starIconId3="/star-33.svg"
        starRatingId="/star-44.svg"
        starIconId4="/star-55.svg"
        reviewerName="Alex K."
        imageSrc="/frame5.svg"
        testimonialText={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
        propLeft="520px"
        propFilter="unset"
        propHeight="unset"
      />
      <CustomerReviewContainer
        starIconId="/star-12.svg"
        starIconId2="/star-23.svg"
        starIconId3="/star-34.svg"
        starRatingId="/star-44.svg"
        starIconId4="/star-55.svg"
        reviewerName="James L."
        imageSrc="/frame5.svg"
        testimonialText={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
        propLeft="940px"
        propFilter="unset"
        propHeight="unset"
      />
      <CustomerReviewContainer
        starIconId="/star-12.svg"
        starIconId2="/star-24.svg"
        starIconId3="/star-13.svg"
        starRatingId="/star-13.svg"
        starIconId4="/star-13.svg"
        reviewerName="Mooen"
        imageSrc="/star-13.svg"
        testimonialText={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
        propLeft="1360px"
        propFilter="blur(4px)"
        propHeight="unset"
      />
      <img
        className="absolute top-[3397px] left-[1316px] w-6 h-6 overflow-hidden"
        alt=""
        src="/arrowdownbold-1.svg"
      />
      <img
        className="absolute top-[3397px] left-[1276px] w-6 h-6 overflow-hidden"
        alt=""
        src="/arrowdownbold-2.svg"
      />
      <div className="absolute top-[3781px] left-[calc(50%_-_721px)] w-[1441px] h-[589px] text-right text-gray-300">
        <div className="absolute top-[0px] left-[calc(50%_-_720.5px)] w-[1441px] h-[589px]">
          <div className="absolute top-[90px] left-[calc(50%_-_720.5px)] bg-whitesmoke-100 w-[1441px] h-[499px]" />
          <div className="absolute top-[456.5px] left-[calc(50%_-_620px)] box-border w-[1241px] h-px border-t-[1px] border-solid border-gray-100" />
          <StayUptoDateForm />
          <ShopCoContainer />
          <div className="absolute top-[477px] left-[1060px] flex flex-row items-end justify-start gap-[12px]">
            <img
              className="relative rounded-[5.38px] w-[64.99px] h-[48.41px]"
              alt=""
              src="/badge.svg"
            />
            <img
              className="relative rounded-[5.38px] w-[64.99px] h-[48.41px]"
              alt=""
              src="/badge1.svg"
            />
            <img
              className="relative rounded-[5.38px] w-[64.99px] h-[48.41px]"
              alt=""
              src="/badge2.svg"
            />
            <img
              className="relative rounded-[5.38px] w-[64.99px] h-[48.41px]"
              alt=""
              src="/badge3.svg"
            />
            <img
              className="relative rounded-[5.38px] w-[64.99px] h-[48.41px]"
              alt=""
              src="/badge4.svg"
            />
          </div>
          <div className="absolute top-[482px] left-[101px]">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
