import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
function DetailSlide({ list }) {
  const [randomList, setRandomList] = useState([]);
  const detailSlide = list.filter((a) => a.resultList.partName !== "동물병원");
  useEffect(() => {
    const shuffledList = detailSlide.sort(() => 0.5 - Math.random());
    const randomEight = shuffledList.slice(0, 8);
    setRandomList(randomEight);
  }, [list]);
  return (
    <div>
      <div className="detailSub">
        <h2>
          <img
            src={`${process.env.PUBLIC_URL}/img/detailPageImg2.png`}
            alt=""
          />
          <span>주변 추천 장소</span>
        </h2>
        <div className="detailBox">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              700: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="detail_recommendWrap"
          >
            {randomList.map((item, i) => {
              const image =
                item.resultList.imageList &&
                item.resultList.imageList.length > 0
                  ? item.resultList.imageList[0].image
                  : null;
              const defaultImage = `${process.env.PUBLIC_URL}/img/NoImage.png`;
              return (
                <SwiperSlide>
                  <div className="detail_recommend">
                    <Link
                      to={`/Detail/${item.resultList.contentSeq}`}
                      className="card_link"
                    />
                    <img
                      src={image ? image : defaultImage}
                      alt={item.resultList.title}
                    />
                    <span>{item.resultList.title}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default DetailSlide;
