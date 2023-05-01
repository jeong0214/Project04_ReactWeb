import "./css/myreset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import data from "./pages/allData";
import { useEffect, useState } from "react";
import Footer from "./pages/Footer";
import AreaPages from "./pages/AreaPages";
import PartPages from "./pages/PartPages";
import Detail from "./pages/Detail";
import Modal from "./pages/Modal";
import AnimalHospital from "./pages/AnimalHospital";

function App() {
  let [list] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // useEffect(() => {
  //   if (showModal) {
  //     const timeoutId = setTimeout(() => {
  //       const modalContent = document.querySelector(".modalContent");
  //       modalContent.classList.add("on");
  //     }, 1000);
  //     return () => clearTimeout(timeoutId);
  //   }
  // }, [showModal]);
  return (
    <div className="App">
      <Header onShowModal={handleShowModal} />
      {showModal && (
        <Modal
          list={list}
          onCloseModal={handleCloseModal}
          showModal={showModal}
        />
      )}
      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route
          path="/AnimalHospital"
          element={<AnimalHospital list={list} />}
        />
        <Route path="/AreaPages" element={<AreaPages list={list} />} />
        <Route
          path="/AreaPages/PartPages"
          element={<PartPages list={list} />}
        />
        <Route path="/Detail/:id" element={<Detail list={list} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
