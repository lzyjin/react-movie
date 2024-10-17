import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Movie({id, title, summary, genres, largeCoverImage}) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{
        summary.length > 235 ? `${summary.slice(0, 235)}...` : summary
      }</p>
      <ul>
        {
          genres.map(genre => <li key={genre}>{genre}</li>)
        }
      </ul>
      <img src={largeCoverImage} alt={title}/>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  largeCoverImage: PropTypes.string.isRequired,
}