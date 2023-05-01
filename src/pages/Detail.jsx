import DetailBottom from "./DetailBottom";
import DetailTop from "./DetailTop";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import DetailSlide from "./DetailSlide";
function Detail({ list }) {
  const { id } = useParams();
  const filteredData = list.filter(
    (item) => item.resultList.contentSeq === Number(id)
  );
  const areaData = list.filter(
    (area) => area.resultList.areaName === filteredData[0].resultList.areaName
  );
  console.log(areaData);
  // console.log(filteredData);
  return (
    <div className="mw">
      <DetailTop list={filteredData} />
      <DetailBottom list={filteredData} />
      <DetailSlide list={areaData} />
    </div>
  );
}
export default Detail;
