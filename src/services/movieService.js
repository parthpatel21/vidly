import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}

export function saveMovie({
  title,
  genreId,
  dailyRentalRate,
  numberInStock,
  _id,
}) {
  if (_id) {
    return http.put(movieUrl(_id), {
      title,
      genreId,
      dailyRentalRate,
      numberInStock,
    });
  } else {
    return http.post(apiEndpoint, {
      title,
      genreId,
      dailyRentalRate,
      numberInStock,
    });
  }
}
