import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css"; // optional for styling reuse

const AddMovie = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    synopsis: "",
    poster: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Movie:", form);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="title" placeholder="Title" required onChange={handleChange} />
        <input name="director" placeholder="Director" required onChange={handleChange} />
        <select name="genre" required onChange={handleChange}>
          <option value="">Select Genre</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Comedy</option>
          <option>Romance</option>
          <option>Horror</option>
        </select>
        <input type="number" name="year" placeholder="Release Year" required onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" required onChange={handleChange} />
        <input name="poster" type="url" placeholder="Poster Image URL" required onChange={handleChange} />
        <div className="button-row">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
