import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

const MovieDetails =(props) =>{
    return(
        <div>
            <div className="bg-dark text-light">
                <div className="imageContainer">
                    <img src={`../${props.movie.imageUrl}`} width="100%" style={{height:'350px'}}/>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                        <div><h4>{props.movie.title}</h4></div>
                    </div>
                    <div className="col-1">
                        <div className="">
                            <img src={faker.image.avatar()} className="rounded-circle" width="90px"/> 
                             <div className="text-center">Actor</div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="">
                            <img src={faker.image.avatar()} className="rounded-circle" width="90px"/>
                            <div className="text-center">Actress</div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="">
                            <img src={faker.image.avatar()} className="rounded-circle" width="90px"/>
                            <div className="text-center">Director</div>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="">
                            <img src={faker.image.avatar()} className="rounded-circle border-light" width="90px"/>
                            <div className="text-center">Singer</div>
                        </div>
                    </div>
                </div>
                <div>{props.movie.description}</div>
                <div>{faker.lorem.paragraphs()}</div>
            </div> 
        </div>
    )
}

MovieDetails.defaultProps = {
    movie: {}
};

MovieDetails.propTypes = {
    movie: PropTypes.object
};

export default MovieDetails;