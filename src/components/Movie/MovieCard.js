import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import { Link } from 'react-router-dom';
const MovieCard = (props) =>
    {
    return (
            <div className="noFlex text-decoration-none text-dark card">
                <img className="card-img-top" src={props.movie.imageUrl} alt="not found" />
                <div className="card-body">
                    <Link to={sessionStorage.getItem("isSignedIn")==1 ? `/theater/${props.movie.id}` : `/signup`} className="text-decoration-none text-dark">
                        <h4 className="card-title">{props.movie.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{props.movie.subtitle}</h6>
                        <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.description}</p>
                    </Link>
                </div>
                <div className="card-footer">
                    <div className="clearfix">
                        <div className="float-left mt-1">
                            <StarRating rating={props.movie.rating} />
                        </div>
                        <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
                    </div>
                </div>
            </div>
    )
};

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;