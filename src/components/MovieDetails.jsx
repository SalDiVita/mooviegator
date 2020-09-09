import React, { Component } from 'react';
import Axios from 'axios';
import queryString from 'query-string';
import SharingButtons from './SharingButtons';
import styled from 'styled-components';

const TableDetails = styled.table`
  color: ${({ theme }) => theme.text};
  width: 100%;
    margin-bottom: 1rem;
`;

class MovieDetails extends Component {
    state = { movie: {} }

    componentDidMount() {
        this.fetchMovies();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fetchMovies();
        }
    }

    fetchMovies = () => {
        let q = queryString.parse(this.props.location.search);
        Axios.get(`http://www.omdbapi.com/?apikey=aa9e49f&i=${q.imdbID}`)
            .then(resp => resp.data)
            .then(movie => this.setState({ movie }))

    }

    render() {
        let { movie } = this.state;

        let output = <div className="text-center">
            <img src="/images/Eclipse-1s-200px.svg" alt="loading..." />
        </div>;

        if (movie && Object.keys(movie).length > 0) {
            output = <div className="row movie-details">
                <div className="col-md-4">
                    <img src={movie.Poster} alt={movie.Title} className="img img-thumbnail" />
                </div>
                <div className="col-md-8">
                    <h1>{movie.Title}</h1>
                    <TableDetails>
                        <tbody>
                            <tr>
                                <td>Director</td>
                                <td>{movie.Director}</td>
                            </tr>
                            <tr>
                                <td>Plot</td>
                                <td>{movie.Plot}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{movie.Year}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>{movie.Language}</td>
                            </tr>
                            <tr>
                                <td>Writer</td>
                                <td>{movie.Writer}</td>
                            </tr>
                            <tr>
                                <td>Awards</td>
                                <td>{movie.Awards}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{movie.Genre}</td>
                            </tr>
                            <tr>
                                <td>Actors</td>
                                <td>{movie.Actors}</td>
                            </tr>
                            <tr>
                                <td>Box office</td>
                                <td>{movie.BoxOffice}</td>
                            </tr>
                            <tr>
                                <td>Released</td>
                                <td>{movie.Released}</td>
                            </tr>
                        </tbody>
                    </TableDetails>

                    <button className="btn btn-primary"
                        onClick={() => this.props.history.go(-1)}>Back</button>

                </div>
                <div className="floating-buttons">
                    <SharingButtons />
                </div>

            </div>


                ;

        }

        return output;
    }
}

export default MovieDetails;