import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

function Card({ item, selectedKeyword }) {
  const image =
    item.resultList.imageList?.[0]?.image ||
    `${process.env.PUBLIC_URL}/img/NoImage.png`;
  const keywords = item.resultList.keyword
    .split(",")
    .map((word) => word.trim());
  return selectedKeyword === "" || keywords.includes(selectedKeyword) ? (
    <SwiperSlide key={item.contentSeq}>
      <div className="card">
        <Link to="/Detail" className="card_link" />
        <div className="cardImg">
          <img src={image} alt={item.resultList.title} />
        </div>
        <div className="card_detail">
          <span className="card_part">{item.resultList.partName}</span>
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
            <img src={`${process.env.PUBLIC_URL}/img/call.svg`} alt="call" />
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
}

export default Card;
