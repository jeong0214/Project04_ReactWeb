import { Link } from "react-router-dom";

function Tourism({ list }) {
  const slideCard = list.filter((a) => a.resultList.partName === "관광지");
  const encodedAreaName = encodeURIComponent(list[0].resultList.areaName);
  const encodedPartName = encodeURIComponent("관광지");
  return (
    <section className="Restaurant_frame">
      <div className="Restaurant_wrap mw">
        <div className="Restaurant_banner">
          <h1>
            우리아이에게 <br />
            추억을 남겨주세요!
          </h1>
          <img src={`${process.env.PUBLIC_URL}/img/sec2_3.png`} alt="" />
        </div>
        <div className="Restaurant_content">
          <div className="Restaurant_detail">
            <h1 className="Restaurant_title">
              <img
                src={`${process.env.PUBLIC_URL}/img/sec2_icon3.png`}
                alt=""
              />
              관광지
            </h1>
            <Link
              to={`/AreaPages/PartPages?areaName=${encodedAreaName}&partName=${encodedPartName}`}
            >
              모두보기
            </Link>
          </div>
          <p>반려동물과 소중한 추억을 쌓을 수 있는 관광지를 소개합니다.</p>
          <div className="Restaurant_cards">
            {slideCard.length > 0 ? slideCard.slice(0, 3).map((item, i) => {
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
              );
            }): (
  <div className="no-data">
    <img src="/img/dog.gif" alt="" />
    <span>데이터가 없습니다.</span>
  </div>
)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Tourism;
