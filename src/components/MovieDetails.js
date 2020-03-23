import React from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';

const MovieDetails =(props) =>{
    return(
        <div>
            {/* <div class="card mb-3">
                <img src={`../${props.movie.imageUrl}`} className="card-img-top"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div> */}

            <div className="bg-dark text-light">
                <div className="imageContainer">
                    <img src={`../${props.movie.imageUrl}`} width="100%" height="50%"/>
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