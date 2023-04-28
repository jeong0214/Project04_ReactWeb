import { useState, useEffect } from "react";
import PartList from "./PartList";
import { useLocation } from "react-router-dom";

function PartPages({ list }) {
  const [areaName, setAreaName] = useState("");
  const [partName, setPartName] = useState("");
  const [bgImage, setBgImage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const Params = new URLSearchParams(location.search);
    const areaName = Params.get("areaName");
    const partName = Params.get("partName");
    const images = {
      숙박: `${process.env.PUBLIC_URL}/img/LodgingBg.jpg`,
      식음료: `${process.env.PUBLIC_URL}/img/RestaurantBg.jpg`,
      체험: `${process.env.PUBLIC_URL}/img/ExperienceBg.jpg`,
      관광지: `${process.env.PUBLIC_URL}/img/Tourism.jpg`,
    };
    if (partName && images[partName]) {
      setBgImage(images[partName]);
    }
    if (areaName) {
      setAreaName(areaName);
    }
    if (partName) {
      setPartName(partName);
    }
  }, [location.search]);
  const handleAreaChange = (event) => {
    setAreaName(event.target.value);
  };

  const handlePartChange = (event) => {
    setPartName(event.target.value);
    switch (event.target.value) {
      case "숙박":
        setBgImage(`${process.env.PUBLIC_URL}/img/LodgingBg.jpg`);
        break;
      case "식음료":
        setBgImage(`${process.env.PUBLIC_URL}/img/RestaurantBg.jpg`);
        break;
      case "체험":
        setBgImage(`${process.env.PUBLIC_URL}/img/ExperienceBg.jpg`);
        break;
      case "관광지":
        setBgImage(`${process.env.PUBLIC_URL}/img/Tourism.jpg`);
        break;
      default:
        setBgImage(`${process.env.PUBLIC_URL}/img/LodgingBg.jpg`);
    }
  };

  const filteredList = list.filter((item) => {
    if (areaName && partName) {
      return (
        item.resultList.areaName === areaName &&
        item.resultList.partName === partName
      );
    } else if (areaName && !partName) {
      return item.resultList.areaName === areaName;
    } else if (!areaName && partName) {
      return item.resultList.partName === partName;
    } else {
      return true;
    }
  });

  return (
    <div className="PartPages">
      <section className="subBanner">
        {bgImage && <img src={bgImage} alt="" />}
        <select
          name="areaSelect"
          className="areaTitle"
          value={areaName}
          onChange={handleAreaChange}
        >
          <option value="">전체</option>
          <option value="강릉시">강릉</option>
          <option value="춘천시">춘천</option>
          <option value="태백시">태백</option>
          <option value="삼척시">삼척</option>
          <option value="횡성군">횡성</option>
          <option value="평창군">평창</option>
          <option value="철원군">철원</option>
          <option value="양구군">양구</option>
          <option value="고성군">고성</option>
          <option value="원주시">원주</option>
          <option value="동해시">동해</option>
          <option value="속초시">속초</option>
          <option value="홍천군">홍천</option>
          <option value="영월군">영월</option>
          <option value="정선군">정선</option>
          <option value="화천군">화천</option>
          <option value="인제군">인제</option>
          <option value="양양군">양양</option>
        </select>
        <span>의 다양한</span>
        <select
          name="partSelect"
          className="partTitle"
          value={partName}
          onChange={handlePartChange}
        >
          <option value="숙박">숙박</option>
          <option value="식음료">식음료</option>
          <option value="체험">체험</option>
          <option value="관광지">관광지</option>
        </select>
        <span>확인 해보세요!</span>
      </section>
      <PartList list={filteredList} />
    </div>
  );
}
export default PartPages;
