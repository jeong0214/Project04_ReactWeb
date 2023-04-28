import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
function DetailTop({ list }) {
  const item = list[0];
  const imageList = item.resultList.imageList;

  const defaultImage = `${process.env.PUBLIC_URL}/img/NoImage.png`;

  return (
    <div className="detailTop_wrap">
      <div className="detailTop_img">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="detailTop_slide"
        >
          {imageList && imageList.length > 0 ? (
            imageList.map((image, i) => (
              <SwiperSlide key={i}>
                <img src={image.image} alt="" />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img src={defaultImage} alt="No Image" />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="detailTop">
        <h1>{list[0].resultList.title}</h1>
        <p>
          <img src={`${process.env.PUBLIC_URL}/img/location.svg`} alt="" />{" "}
          <span>주소</span>
          <span>{list[0].resultList.address}</span>
        </p>
        <p>
          <img src={`${process.env.PUBLIC_URL}/img/call.svg`} alt="call" />
          <span>문의</span>
          <span>{list[0].resultList.tel}</span>
        </p>
        <p>
          <img src={`${process.env.PUBLIC_URL}/img/clock.svg`} alt="clock" />
          <span>이용시간</span>
          <span>{list[0].resultList.usedTime}</span>
        </p>
        <p>
          <img src={`${process.env.PUBLIC_URL}/img/global.svg`} alt="global" />
          <span>홈페이지</span>
          <span>{list[0].resultList.homePage}</span>
        </p>
        <p>
          <img
            src={`${process.env.PUBLIC_URL}/img/message-search.svg`}
            alt="message-search"
          />
          <span>키워드</span>
          <span>{list[0].resultList.keyword}</span>
        </p>
      </div>
    </div>
  );
}
export default DetailTop;
