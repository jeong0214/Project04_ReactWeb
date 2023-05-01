import React, { useState, useEffect } from "react";
import Experience from "./Experience";
import Lodging from "./lodging";
import Restaurant from "./Restaurant";
import Tourism from "./tourism";
import { useLocation } from "react-router-dom";

function AreaPages({ list, match }) {
  const [areaName, setAreaName] = useState("");
  const location = useLocation();
  const [bgImage, setBgImage] = useState(
    `${process.env.PUBLIC_URL}/img/allpageBg.jpg`
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const areaName = params.get("areaName");
    const images = {
      강릉시: `${process.env.PUBLIC_URL}/img/gangneungBg.jpg`,
      춘천시: `${process.env.PUBLIC_URL}/img/chunCheonBg.jpg`,
      삼척시: `${process.env.PUBLIC_URL}/img/YangguBg.jpg`,
      태백시: `${process.env.PUBLIC_URL}/img/TaebaekBg.png`,
      횡성시: `${process.env.PUBLIC_URL}/img/hoengseongBg.jpg`,
      평창시: `${process.env.PUBLIC_URL}/img/pyeongchangBg.jpg`,
      철원군: `${process.env.PUBLIC_URL}/img/cheorwonBg.jpg`,
      양구군: `${process.env.PUBLIC_URL}/img/YangguBg.jpg`,
      고성군: `${process.env.PUBLIC_URL}/img/goseongBg.jpg`,
      원주시: `${process.env.PUBLIC_URL}/img/gangneungBg.jpg`,
      동해시: `${process.env.PUBLIC_URL}/img/jeongseonBg.jpg`,
      속초시: `${process.env.PUBLIC_URL}/img/sokchoBg.jpg`,
      홍천군: `${process.env.PUBLIC_URL}/img/injeBg.png`,
      영월군: `${process.env.PUBLIC_URL}/img/chunCheonBg.jpg`,
      정성군: `${process.env.PUBLIC_URL}/img/jeongseonBg.jpg`,
      화천군: `${process.env.PUBLIC_URL}/img/TaebaekBg.png`,
      인제군: `${process.env.PUBLIC_URL}/img/injeBg.png`,
      양양군: `${process.env.PUBLIC_URL}/img/sokchoBg.jpg`,
    };
    if (areaName && images[areaName]) {
      setBgImage(images[areaName]);
    }
    if (areaName) {
      setAreaName(areaName);
    }
  }, [location.search]);

  const handleChange = (e) => {
    setAreaName(e.target.value);
    switch (e.target.value) {
      case "강릉시":
        setBgImage(`${process.env.PUBLIC_URL}/img/gangneungBg.jpg`);
        break;
      case "춘천시":
        setBgImage(`${process.env.PUBLIC_URL}/img/chunCheonBg.jpg`);
        break;
      case "삼척시":
        setBgImage(`${process.env.PUBLIC_URL}/img/YangguBg.jpg`);
        break;
      case "태백시":
        setBgImage(`${process.env.PUBLIC_URL}/img/TaebaekBg.png`);
        break;
      case "횡성군":
        setBgImage(`${process.env.PUBLIC_URL}/img/hoengseongBg.jpg`);
        break;
      case "평창군":
        setBgImage(`${process.env.PUBLIC_URL}/img/pyeongchangBg.jpg`);
        break;
      case "철원군":
        setBgImage(`${process.env.PUBLIC_URL}/img/cheorwonBg.jpg`);
        break;
      case "양구군":
        setBgImage(`${process.env.PUBLIC_URL}/img/YangguBg.jpg`);
        break;
      case "고성군":
        setBgImage(`${process.env.PUBLIC_URL}/img/goseongBg.jpg`);
        break;
      case "원주시":
        setBgImage(`${process.env.PUBLIC_URL}/img/gangneungBg.jpg`);
        break;
      case "동해시":
        setBgImage(`${process.env.PUBLIC_URL}/img/jeongseonBg.jpg`);
        break;
      case "속초시":
        setBgImage(`${process.env.PUBLIC_URL}/img/sokchoBg.jpg`);
        break;
      case "홍천군":
        setBgImage(`${process.env.PUBLIC_URL}/img/injeBg.png`);
        break;
      case "영월군":
        setBgImage(`${process.env.PUBLIC_URL}/img/chunCheonBg.jpg`);
        break;
      case "정선군":
        setBgImage(`${process.env.PUBLIC_URL}/img/jeongseonBg.jpg`);
        break;
      case "화천군":
        setBgImage(`${process.env.PUBLIC_URL}/img/TaebaekBg.png`);
        break;
      case "인제군":
        setBgImage(`${process.env.PUBLIC_URL}/img/injeBg.png`);
        break;
      case "양양군":
        setBgImage(`${process.env.PUBLIC_URL}/img/sokchoBg.jpg`);
        break;
      default:
        setBgImage(`${process.env.PUBLIC_URL}/img/allpageBg.jpg`);
    }
  };

  let filteredList = list.filter((area) => {
    if (areaName) {
      return area.resultList.areaName === areaName;
    } else {
      return true;
    }
  });
  return (
    <div>
      <section
        id="areaName"
        value={areaName}
        onChange={handleChange}
        className="subBanner"
      >
        {bgImage && <img src={bgImage} alt="" />}
        <select
          name="areaSelect"
          className="areaTitle"
          value={areaName}
          onChange={handleChange}
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
      </section>
      <Restaurant list={filteredList} />
      <Experience list={filteredList} />
      <Tourism list={filteredList} />
      <Lodging list={filteredList} />
    </div>
  );
}
export default AreaPages;
