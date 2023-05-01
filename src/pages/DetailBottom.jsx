function DetailBottom({ list }) {
  const PolicyCautions = `${list[0].resultList.policyCautions}`;
  const PolicyCautionsArray = PolicyCautions.split("-").filter(Boolean);
  const usedCost = `${list[0].resultList.usedCost}`;
  const usedCostArray = usedCost.split("-").filter(Boolean);
  return (
    <section className="detailBottom">
      <div className="detailSub">
        <h2>
          <img
            src={`${process.env.PUBLIC_URL}/img/detailPageImg2.png`}
            alt=""
          />
          <span>소개</span>
        </h2>
        <div className="detailBox">
          <p>{list[0].resultList.content}</p>
        </div>
      </div>
      <div className="detailSub">
        <h2>
          <img
            src={`${process.env.PUBLIC_URL}/img/detailPageImg2.png`}
            alt=""
          />
          <span>이용요금</span>
        </h2>
        <div className="detailBox">
          {usedCostArray.map((item, index) => (
            <p key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/img/detailIcon.svg`}
                alt=""
                className="detailIcon"
              />
              {item.trim()}
            </p>
          ))}
        </div>
      </div>
      <div className="detailSub">
        <h2>
          <img
            src={`${process.env.PUBLIC_URL}/img/detailPageImg2.png`}
            alt=""
          />
          <span>주의사항</span>
        </h2>
        <div className="detailBox">
          {PolicyCautionsArray.map((item, index) => (
            <p key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/img/detailIcon.svg`}
                alt=""
                className="detailIcon"
              />
              {item.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
export default DetailBottom;
