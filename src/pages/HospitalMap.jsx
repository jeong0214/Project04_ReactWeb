import { useEffect, useState } from "react";
const { kakao } = window;
function HospitalMap({ list }) {
  // 모바일 검색열기
  const [isMapSearchOpen, setIsMapSearchOpen] = useState(false);

  function handleMapSearchOpen() {
    setIsMapSearchOpen(!isMapSearchOpen);
  }
  // map 검색관련
  const [searchTerm, setSearchTerm] = useState("");
  const hospitalCard = list.filter(
    (item) =>
      item.resultList.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.resultList.areaName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.8810600584646, 127.745003799391),
      level: 3,
    };
    const newMap = new kakao.maps.Map(container, options);
    setMap(newMap);
  }, []);

  useEffect(() => {
    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [list, markers]);

  const handleCardClick = (latitude, longitude) => {
    const markerImage = new kakao.maps.MarkerImage(
      `${process.env.PUBLIC_URL}/img/marker.png`,
      new kakao.maps.Size(50, 50)
    );
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(latitude, longitude),
      image: markerImage,
    });
    marker.setMap(map);

    const newCenter = new kakao.maps.LatLng(latitude, longitude);
    map.panTo(newCenter);

    setMarkers([...markers, marker]);
  };
  return (
    <div className="hospitalMap mw">
      <h3>
        <img src={`${process.env.PUBLIC_URL}/img/hospitalIcon.svg`} alt="" />
        강원도 동물병원 위치
      </h3>
      <div className="mapDetail">
        <div className={`mapsearchWrap ${isMapSearchOpen ? "on" : ""}`}>
          <button className="mapSearchOpen" onClick={handleMapSearchOpen}>
            <img src={`${process.env.PUBLIC_URL}/img/detailIcon.svg`} alt="" />
          </button>
          <div className="mapSearch">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className="hospitalCart_wrap">
              {hospitalCard.map((item, i) => {
                return (
                  <div
                    className="mapCard"
                    key={i}
                    onClick={() =>
                      handleCardClick(
                        item.resultList.latitude,
                        item.resultList.longitude
                      )
                    }
                  >
                    <h4>{item.resultList.title}</h4>
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="map" className="mapRender"></div>
      </div>
    </div>
  );
}
export default HospitalMap;
