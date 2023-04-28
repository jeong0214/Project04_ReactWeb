import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function MainKeyword({ list }) {
  // 링
  // 동물병원제외하고 슬라이드 출력
  const slideCard = list.filter((a) => a.resultList.partName !== "동물병원");
  // 키워드로 사용할 배열등록
  const keywords = [
    "카페",
    "오션뷰",
    "수영장",
    "루프탑",
    "자연",
    "해변",
    "산책",
    "공원",
    "힐링",
  ];
  // 키워드 클릭시 해당 키워드가 있는 데이터만 출력
  const [selectedKeywords, setSelectedKeywords] = useState([
    "keyword1",
    "keyword2",
    "keyword3",
  ]);
  const [selectedKeyword, setSelectedKeyword] = useState("");

  useEffect(() => {
    const shuffledKeywords = keywords.sort(() => Math.random() - 0.5);
    setSelectedKeywords(shuffledKeywords.slice(0, 4));
  }, []);
  useEffect(() => {
    if (selectedKeywords.length > 0) {
      setSelectedKeyword(selectedKeywords[0]);
    }
  }, [selectedKeywords]);

  return (
    <section className="MainKeyword_wrap mw">
      <div className="MainKeyword">
        <h1>키워드 별 장소 추천</h1>
        <ul>
          {selectedKeywords.map((keyword, index) => (
            <li
              key={index}
              className={selectedKeyword === keyword ? "selected" : ""}
              onClick={() => setSelectedKeyword(keyword)}
            >
              #{keyword}
            </li>
          ))}
        </ul>
        <div className="mw">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="keyword_slide"
          >
            {slideCard.map((item, i) => {
              const image =
                item.resultList.imageList &&
                item.resultList.imageList.length > 0
                  ? item.resultList.imageList[0].image
                  : null;
              const defaultImage = `${process.env.PUBLIC_URL}/img/NoImage.png`;
              const keywords = item.resultList.keyword
                .split(",")
                .map((word) => word.trim());
              return selectedKeyword === "" ||
                keywords.includes(selectedKeyword) ? (
                <SwiperSlide key={item.resultList.contentSeq}>
                  <div className="card">
                    <Link
                      to={`/Detail/${item.resultList.contentSeq}`}
                      className="card_link"
                    />
                    <div className="cardImg">
                      <img
                        src={image ? image : defaultImage}
                        alt={item.resultList.title}
                      />
                    </div>
                    <div className="card_detail">
                      <span className="card_part">
                        {item.resultList.partName}
                      </span>
                      <p className="card_title">{item.resultList.title}</p>
                      <p>
                        <img
                          src={`${process.env.PUBLIC_URL}/img/location.svg`}
                          alt="location"
                        />
                        <span>주소</span>
                        <span>{item.resultList.address}</span>
                      </p>
                      <p>
                        <img
                          src={`${process.env.PUBLIC_URL}/img/call.svg`}
                          alt="call"
                        />
                        <span>문의</span>
                        <span>{item.resultList.tel}</span>
                      </p>
                      <p className="card_content">{item.resultList.content}</p>
                      <div className="card_keyword">
                        {keywords.map((word, index) => (
                          <span key={index}>#{word}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default MainKeyword;
