import { Link } from "react-router-dom";

function Lodging({ list }) {
  const slideCard = list.filter((a) => a.resultList.partName === "숙박");
  const encodedAreaName = encodeURIComponent(list[0].resultList.areaName);
  const encodedPartName = encodeURIComponent("숙박");
  return (
    <section className="Experience_frame">
      <div className="Experience_wrap mw">
        <div className="Experience_content">
          <div className="Experience_detail">
            <h1 className="Experience_title">
              <img
                src={`${process.env.PUBLIC_URL}/img/sec2_icon4.png`}
                alt=""
              />
              숙박
            </h1>
            <Link
              to={`/AreaPages/PartPages?areaName=${encodedAreaName}&partName=${encodedPartName}`}
            >
              모두보기
            </Link>
          </div>
          <p>반려동물과 함께 묵을 수 있는 편안한 숙소들은 소개합니다.</p>
          <div className="Experience_cards">
            {slideCard.length > 0 ? (
              slideCard.slice(0, 3).map((item, i) => {
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
                  <div className="Listcard">
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
              })
            ) : (
              <div className="no-data">
                <img src={`${process.env.PUBLIC_URL}/img/dog.gif`} alt="" />
                <span>데이터가 없습니다.</span>
              </div>
            )}
          </div>
        </div>
        <div className="Experience_banner">
          <h1>
            우리아이가 <br />
            편하게 쉴 수 있는 곳!
          </h1>
          <img src={`${process.env.PUBLIC_URL}/img/sec2_4.png`} alt="" />
        </div>
      </div>
    </section>
  );
}
export default Lodging;
