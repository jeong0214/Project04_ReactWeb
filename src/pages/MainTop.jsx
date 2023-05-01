import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

function MainTop({ list }) {
  return (
    <div className="mainTop_wrap">
      <div className="mainTop_banner mw">
        <h1>멍냥이들과 함께 강원도로!</h1>
        <p>다양한 반려동물 동반 여행지 정보를 알아보세요</p>
      </div>
      <div className="mainTop_slide mw">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          navigation={true}
          breakpoints={{
            421: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          className="mainTop_list"
        >
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("강릉시")}`} />
              <span className="areaNameT">강릉시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("춘천시")}`} />
              <span className="areaNameT">춘천시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("삼척시")}`} />
              <span className="areaNameT">삼척시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("태백시")}`} />
              <span className="areaNameT">태백시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("횡성군")}`} />
              <span className="areaNameT">횡성군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("평창군")}`} />
              <span className="areaNameT">평창군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("철원군")}`} />
              <span className="areaNameT">철원군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("양구군")}`} />
              <span className="areaNameT">양구군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("고성군")}`} />
              <span className="areaNameT">고성군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("원주시")}`} />
              <span className="areaNameT">원주시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("동해시")}`} />
              <span className="areaNameT">동해시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("속초시")}`} />
              <span className="areaNameT">속초시</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("홍천군")}`} />
              <span className="areaNameT">홍천군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("영월군")}`} />
              <span className="areaNameT">영월군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("정성군")}`} />
              <span className="areaNameT">정선군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("화천군")}`} />
              <span className="areaNameT">화천군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("인제군")}`} />
              <span className="areaNameT">인제군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("양양군")}`} />
              <span className="areaNameT">양양군</span>
            <div className="mainTop_Title">
              <span className="mainTop_guide">
                바로가기
                <img src={`${process.env.PUBLIC_URL}/img/arrow1.svg`} alt="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={`/AreaPages?areaName=${encodeURIComponent("")}`} />
            <div className="mainTop_TotalTitle">전체 여행지</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default MainTop;
