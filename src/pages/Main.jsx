import MainHospital from "./MainHospital";
import MainKeyword from "./MainKeyword";
import MainTop from "./MainTop";

function Main({ list }) {
  const slideCard = list.filter((a) => a.resultList.contentSeq === 256);
  console.log(slideCard);
  return (
    <section>
      <MainTop list={list} />
      <MainKeyword list={list} />
      <MainHospital />
    </section>
  );
}
export default Main;
