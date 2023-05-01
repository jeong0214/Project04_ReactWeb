import MainHospital from "./MainHospital";
import MainKeyword from "./MainKeyword";
import MainTop from "./MainTop";

function Main({ list }) {
  return (
    <section>
      <MainTop list={list} />
      <MainKeyword list={list} />
      <MainHospital />
    </section>
  );
}
export default Main;
