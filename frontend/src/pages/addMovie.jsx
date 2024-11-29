import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import MovieFormModal from "../components/MovieFormModal";
// import DataTable from "../components/MovieDataTable";
// import DetailsModal from "../components/DetailsModal";

const AddMovie = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="add-movie">
      <ToastContainer />
      <div className="main-content">
        <div className="action-text">
          <h2>Add Movie</h2>
        </div>

        <div className="search">
          {/* <button
            onClick={() => setShowModal(true)}
            className="open-modal-button"
          >
            Add New Movie
          </button> */}

          <button
            type="submit"
            className="submit-button"
            onClick={() => setShowModal(true)}
          >
            Add Movie
          </button>
        </div>

        {/* <DataTable /> */}

        {/* {showModal && (
          <DetailsModal
            setShowModal={setShowModal}
            showModal={showModal}
            item={null} // Pass null since it's a new movie
          />
        )} */}
        {/* Modal Component */}

        {showModal && (
          <MovieFormModal
            setShowModal={setShowModal}
            showModal={showModal}
            item={null} // Pass null since it's a new movie
          />
        )}
      </div>
    </div>
  );
};

export default AddMovie;
