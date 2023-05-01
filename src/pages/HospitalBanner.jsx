function HospitalBanner() {
  return (
    <div className="subBanner">
      <img src={`${process.env.PUBLIC_URL}/img/hospitalBg.jpg`} alt="" />
      <div className="hospitalBg mw">
        <img src={`${process.env.PUBLIC_URL}/img/hospitalBgIcon.png`} alt="" />
        <h2>
          우리 아이 응급 상황 시<br />
          빠르게 근처 동물병원 위치를 알아보세요!{" "}
        </h2>
      </div>
    </div>
  );
}
export default HospitalBanner;
