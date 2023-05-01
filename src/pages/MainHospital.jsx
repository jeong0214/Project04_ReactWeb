import { Link } from "react-router-dom";

function MainHospital() {
  return (
    <div className="MainHospital mw">
      <img
        className="MainHospitalBg"
        src={`${process.env.PUBLIC_URL}/img/hospitalVertor.svg`}
        alt=""
      />
      <img className="MainHospitalIcon" src={`${process.env.PUBLIC_URL}/img/hospitalbanner.png`} alt="" />
      <div className="MainHospital_detail">
        <h1>동물병원 지도</h1>
        <p>
          반려동물에게 응급상황이 발생 시 <br />
          동물병원 지도를 통해 바로 알아보세요.
        </p>
        <Link to="/AnimalHospital">
          <span>지도 바로가기</span>
          <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt="" />
        </Link>
      </div>
    </div>
  );
}
export default MainHospital;
