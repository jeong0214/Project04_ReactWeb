import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
function Modal({
  onCloseModal,
  onSearch = () => {},
  list,
  showModal,
  handleOpenModal,
}) {
  // const modalContent = document.querySelector(".modalContent");

  // function showModal() {
  //   modalContent.classList.add("on");
  // }
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKeyword, setSelectedKeyword] = useState("");

  const modalCard = list
    .filter((a) => a.resultList.partName !== "동물병원")
    .filter(
      (item) =>
        item.resultList.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.resultList.keyword
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.resultList.areaName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      selectedKeyword
        ? item.resultList.keyword
            .toLowerCase()
            .includes(selectedKeyword.toLowerCase())
        : true
    );
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
    "반려견동반횟집",
    "강아지운동장",
    "반려견놀이터",
    "사진촬영",
    "애견카페",
    "산책",
    "정원",
    "트레킹",
    "실내동반",
    "디저트",
    "감성",
  ];
  const [selectedKeywords, setSelectedKeywords] = useState([
    "keyword1",
    "keyword2",
    "keyword3",
  ]);

  useEffect(() => {
    const shuffledKeywords = keywords.sort(() => Math.random() - 0.5);
    setSelectedKeywords(shuffledKeywords.slice(0, 15));
  }, []);
  useEffect(() => {
    if (selectedKeywords.length > 0) {
      setSelectedKeyword("");
    }
  }, [selectedKeywords]);
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };
  // 반응형 모달 지연

  return (
    <div className="searchModal" onClick={handleBackgroundClick}>
      <div className={`modalContent ${showModal ? "on" : ""}`}>
        <span className="close" onClick={onCloseModal}>
          <img src={`${process.env.PUBLIC_URL}/img/close.svg`} alt="" />
        </span>
        <h2 className="modalTitle">
          <img
            src={`${process.env.PUBLIC_URL}/img/modalImg.png`}
            alt="모달이미지"
          />
          <span>주인님 우리 어디로 가나요?</span>
        </h2>
        <div className="modalSearch">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className="modalKeyword">
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 5,
              },
            }}
            modules={[Navigation]}
            className="modalSlide"
          >
            {selectedKeywords.map((keyword, index) => (
              <SwiperSlide>
                <span
                  key={index}
                  className={selectedKeyword === keyword ? "selected on" : ""}
                  onClick={() => {
                    if (selectedKeyword === keyword) {
                      setSelectedKeyword("");
                    } else {
                      setSelectedKeyword(keyword);
                    }
                    onSearch(keyword); // optional - pass keyword to a search function
                  }}
                >
                  #{keyword}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="modalBox_wrap">
          <div className="modalBox">
            {modalCard.map((item, i) => {
              const image =
                item.resultList.imageList &&
                item.resultList.imageList.length > 0
                  ? item.resultList.imageList[0].image
                  : null;
              const defaultImage = `${process.env.PUBLIC_URL}/img/NoImage.png`;
              const keywords = item.resultList.keyword
                .split(",")
                .map((word) => word.trim());
              return (
                <div
                  className="modalCard"
                  onClick={onCloseModal}
                  key={item.resultList.contentSeq}
                >
                  <Link
                    to={`/Detail/${item.resultList.contentSeq}`}
                    className="modalCard_link"
                  ></Link>
                  <div className="modalCard_detail">
                    <h3>{item.resultList.title}</h3>
                    <p>{item.resultList.address}</p>
                    <p>
                      {keywords.map((word, index) => (
                        <span key={index}>#{word}</span>
                      ))}
                    </p>
                  </div>
                  <div className="modalCard_img">
                    <img
                      src={image ? image : defaultImage}
                      alt={item.resultList.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
