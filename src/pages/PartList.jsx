import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
function PartList({ list }) {
  return (
    <section className="partList_wrap mw">
      <div className="partScroll">
        <div className="partList">
          {list.length > 0 ? (
            list.map((item, i) => {
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
            <div className="no-data dataMW">
              <img src={`${process.env.PUBLIC_URL}/img/dog.gif`} alt="" />
              <span>데이터가 없습니다.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PartList;
