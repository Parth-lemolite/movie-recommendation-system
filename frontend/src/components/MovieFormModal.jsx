import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./MovieFormModal.css";
import { toast } from "react-toastify";

const MovieFormModal = ({ setShowModal, showModal, item }) => {
  const [disabled, setDisabled] = useState(false);
  const modalRef = useRef(null);

  const initialValues = {
    title: item?.title || "",
    director: item?.director || "",
    description: item?.description || "",
    languages: item?.languages || [],
    duration: item?.duration || "",
    genre: item?.genre || "",
    releaseDate: item?.releaseDate || "",
    rating: item?.rating || "",
    year: item?.year || "",
    movieImage: item?.movieImage || "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    director: Yup.string().required("Director is required"),
    description: Yup.string()
      .required("Description is required")
      .max(500, "Description must be at most 500 characters"),
    languages: Yup.array().min(1, "At least one language is required"),
    duration: Yup.number()
      .required("Duration is required")
      .positive("Duration must be a positive number"),
    genre: Yup.string().required("Genre is required"),
    releaseDate: Yup.date().required("Release date is required"),
    rating: Yup.number()
      .min(0, "Rating must be between 0 and 10")
      .max(10, "Rating must be between 0 and 10")
      .required("Rating is required"),
    year: Yup.number()
      .min(1900, "Year must be after 1900")
      .max(new Date().getFullYear(), "Year cannot be in the future")
      .required("Year is required"),
    movieImage: Yup.string()
      .url("Must be a valid URL")
      .required("Movie image URL is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleFormSubmit(values),
  });

  const handleFormSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:9000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        toast.error("Failed to submit form data");
      } else {
        toast.success("Movie added successfully");
        setShowModal(false);
      }
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };
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

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <form onSubmit={formik.handleSubmit} className="modal-form">
          <div className="modal-header">
            <h2 style={{ color: "black" }}>
              {item ? "Edit Movie" : "Add New Movie"}
            </h2>
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
                <label htmlFor="title" style={{ color: "black" }}>
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="error-message">{formik.errors.title}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="director" style={{ color: "black" }}>
                  Director
                </label>
                <input
                  type="text"
                  id="director"
                  {...formik.getFieldProps("director")}
                />
                {formik.touched.director && formik.errors.director && (
                  <div className="error-message">{formik.errors.director}</div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description" style={{ color: "black" }}>
                Description
              </label>
              <textarea
                id="description"
                {...formik.getFieldProps("description")}
                rows="4"
              />
              {formik.touched.description && formik.errors.description && (
                <div className="error-message">{formik.errors.description}</div>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label
                  htmlFor="languages"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Languages
                </label>
                <select
                  id="languages"
                  multiple
                  className="w-full p-2 border rounded-md"
                  {...formik.getFieldProps("languages")}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>

                {formik.touched.languages && formik.errors.languages && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.languages}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="duration" style={{ color: "black" }}>
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  id="duration"
                  {...formik.getFieldProps("duration")}
                />
                {formik.touched.duration && formik.errors.duration && (
                  <div className="error-message">{formik.errors.duration}</div>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="genre" style={{ color: "black" }}>
                  Genre
                </label>
                <input
                  type="text"
                  id="genre"
                  {...formik.getFieldProps("genre")}
                />
                {formik.touched.genre && formik.errors.genre && (
                  <div className="error-message">{formik.errors.genre}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="releaseDate" style={{ color: "black" }}>
                  Release Date
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  {...formik.getFieldProps("releaseDate")}
                />
                {formik.touched.releaseDate && formik.errors.releaseDate && (
                  <div className="error-message">
                    {formik.errors.releaseDate}
                  </div>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rating" style={{ color: "black" }}>
                  Rating (0-10)
                </label>
                <input
                  type="number"
                  id="rating"
                  min="0"
                  max="10"
                  {...formik.getFieldProps("rating")}
                />
                {formik.touched.rating && formik.errors.rating && (
                  <div className="error-message">{formik.errors.rating}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="year" style={{ color: "black" }}>
                  Year
                </label>
                <input
                  type="number"
                  id="year"
                  {...formik.getFieldProps("year")}
                />
                {formik.touched.year && formik.errors.year && (
                  <div className="error-message">{formik.errors.year}</div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="movieImage" style={{ color: "black" }}>
                Movie Image URL
              </label>
              <input
                type="text"
                id="movieImage"
                {...formik.getFieldProps("movieImage")}
              />
              {formik.touched.movieImage && formik.errors.movieImage && (
                <div className="error-message">{formik.errors.movieImage}</div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={disabled}>
              {item ? "Update" : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieFormModal;
