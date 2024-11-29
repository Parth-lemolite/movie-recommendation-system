import React, { useState, useRef, useEffect } from "react";
import "./MovieFormModal.css";
const DetailsModal = ({ setShowModal, showModal, item }) => {
  const [disabled, setDisabled] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showModal]);
  if (!showModal) return null;
  const data = {
    title: "Inception",
    director: "Christopher Nolan",
    description: "A mind-bending thriller about dreams within dreams.",
    languages: ["English", "Japanese", "French"],
    duration: "148 min",
    genre: "Sci-Fi",
    releaseDate: "2010-07-16",
    rating: 8.8,
    year: 2010,
    movieImage: "https://example.com/inception.jpg",
  };
  return (
    <div className="modal-overlay">
      <div
        className="modal-container"
        style={{ padding: "1.8rem" }}
        ref={modalRef}
      >
        <div className="modal-header">
          <h2 style={{ color: "white" }}>Movie Details</h2>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="close-button"
          >
            &times;
          </button>
        </div>
        <div className="form-content">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title" style={{ color: "white" }}>
                Title
              </label>
              <p> {data?.title}</p>
            </div>
            <div className="form-group">
              <label htmlFor="director" style={{ color: "white" }}>
                Director
              </label>
              <p>{data?.director}</p>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description" style={{ color: "white" }}>
              Description
            </label>
            <p> {data?.description}</p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label
                htmlFor="languages"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Languages
              </label>
              <p> {data?.languages}</p>
            </div>
            <div className="form-group">
              <label htmlFor="duration" style={{ color: "white" }}>
                Duration (minutes)
              </label>
              <p>{data?.duration}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="genre" style={{ color: "white" }}>
                Genre
              </label>
              <p>{data?.genre}</p>
            </div>
            <div className="form-group">
              <label htmlFor="releaseDate" style={{ color: "white" }}>
                Release Date
              </label>
              <p>{data?.releaseDate}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="rating" style={{ color: "white" }}>
                Rating (0-10)
              </label>
              <p>{data?.rating}</p>
            </div>
            <div className="form-group">
              <label htmlFor="year" style={{ color: "white" }}>
                Year
              </label>
              <p>{data?.year}</p>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="movieImage" style={{ color: "white" }}>
              Movie Image URL
            </label>
            <img
              src={
                "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
              }
              style={{ width: "20%", height: "50%" }}
              alt="Image "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsModal;
