import React, { Component } from 'react';
// import { getGenres } from '../services/fakeGenreService.js';
class GenersList extends Component {


    render() {
        const baseClass = "list-group-item";

        return (
            <React.Fragment>

                <ul className="list-group">

                    {this.props.genres.map((genre) =>
                        <li
                            onClick={() => this.props.onItemSelected(genre)}
                            style={{ cursor: "pointer" }}
                            //3mlen el 7war da 3shan n5ly el component generic 
                            //a2dr ast5mdo m3a ay array msh genrs bas
                            key={genre[this.props.textProperty]}
                            className={this.props.selectedId === genre._id ? `${baseClass} active` :
                              `${baseClass}`  }>
                            {genre[this.props.textProperty]}</li>
                    )}

                </ul>


            </React.Fragment>
        );
    }
}

/// da 3la eftrad kol elly hyst5dm el component da 3ndo el props de => da 3shan lama msln 
/// mn component movies m3dosh ab3t el props de b2edy 
/// lw fe component tany m3ndosh el props de s3tha h3ml override 3leha mn el component el tany
GenersList.defaultProps = {
    valueProperty: "_id",
    textProperty: "name"
}

export default GenersList;