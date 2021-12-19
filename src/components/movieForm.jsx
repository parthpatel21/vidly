import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { getGenres } from "../services/genreService";
import { saveMovie, getMovie } from "../services/movieService";
import Form from "./common/form";

class MovieForm extends Form {
  async componentDidMount() {
    const { id } = this.props.match.params;

    const { data: genres } = await getGenres();
    this.setState({ genres });

    try {
      if (id !== "new") {
        const { data: movie } = await getMovie(id);
        this.setState({
          data: this.mapToViewModel(movie),
        });
      }
    } catch (error) {
      this.props.history.replace("/not-found");
    }
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().min(0).max(100).label("Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  doSubmit = async () => {
    //Call to server

    try {
      await saveMovie(this.state.data);
    } catch (error) {
      toast.error("Movie not gets save.. please try again");
      return;
    }

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropdown("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
