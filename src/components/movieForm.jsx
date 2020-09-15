import { checkPropTypes } from 'prop-types';
import React from 'react';

const MovieForm = ({ match, history }) => {


    return (
        <React.Fragment>

            <h1>Movie Id {match.params.id} </h1>
            <button onClick={() => history.replace('/movies')}>
                Save
        </button>

        </React.Fragment>
    );
}

export default MovieForm;