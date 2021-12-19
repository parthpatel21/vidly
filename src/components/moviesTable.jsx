import React from "react";
import { Link } from "react-router-dom";

import auth from "../services/authService";
import Like from "./common/like";
import Table from "./common/table";

const MoviesTable = ({ movies, onLike, onDelete, onSort, sortColumn }) => {
  const deleteColumn = {
    content: (movie) => (
      <button
        onClick={() => {
          onDelete(movie._id);
        }}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    ),
  };

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLike(movie._id)} />
      ),
    },
  ];

  const [moviesColumns, setmoviesColumns] = React.useState(columns);

  React.useEffect(() => {
    const user = auth.getCurrentUser();

    if (user && user.isAdmin) {
      setmoviesColumns((prevColumns) => [...prevColumns, deleteColumn]);
    }
  }, []);

  return (
    <>
      <Table
        columns={moviesColumns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    </>
  );
};
export default MoviesTable;
