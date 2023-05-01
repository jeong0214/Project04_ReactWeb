import { Link } from "react-router-dom"

function Footer(){
  return(<footer >
    <div className="ft_wrap mw">
      <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" /></Link>
      <div className="ft_github">
        <img src={`${process.env.PUBLIC_URL}/img/github.png`} alt="" />
        <div>
          <p>공공api 활용 반려동물 동반 관광정보 사이트</p>
          <Link to="https://github.com/jeong0214">https://github.com/jeong0214</Link>
        </div>
      </div>
    </div>
  </footer>)
}
export default Footer