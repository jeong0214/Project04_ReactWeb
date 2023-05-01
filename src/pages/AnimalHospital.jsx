import HospitalBanner from "./HospitalBanner";
import HospitalMap from "./HospitalMap";

function AnimalHospital({ list }) {
  const hospital = list.filter((a) => a.resultList.partName === "동물병원");
  return (
    <section className="animalHospital">
      <HospitalBanner />
      <HospitalMap list={hospital} />
    </section>
  );
}
export default AnimalHospital;
