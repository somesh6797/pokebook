import React, { Component } from "react";
import { connect } from "react-redux";
import fetchImage from "../actions/fetchImage";
import style from "./../styles/pokecard.module.css";

///Because of props laziness last images are rendering for all

class Pokecard extends Component {
    componentDidMount = () => {
        this.props.fetchImage();
        // console.log(this.props.image.imageData,"from pokecard")
    };
    render() {
        let image = "";
        let name = "";
        let { dataLoading, pokename, dataError } = this.props.pokemon;
        let { imageLoading, imageError, imageData } = this.props.image;
        if (dataLoading) {
            name = "loading... data";
        } else {
            if (!dataError === "") {
                name = dataError;
            } else {
                name = pokename;
            }
        }

        if (imageLoading) {
            imageData = "loading image...";
        } else {
            if (!imageError === "") {
                imageData = dataError;
            } else {
                image = imageData;
            }
        }
        // console.log(image)
        return (
            <React.Fragment>
                <div className={style.card_container}>
                    <div className={style.overlay}></div>
                    <div className={style.circle}>
                        <img
                            className={style.img}
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(
                                image
                            )}`}
                            alt="hi"
                        />
                    </div>
                    <div className={style.text}>
                        <p> {name}</p>
                        <a href="#a" className={style.go_link}>
                            Click for Info
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapState = (state) => {
    return {
        image: state.pokeImage,
    };
};

const mapDispatch = (dispatch, ownProps) => {
    return {
        fetchImage: () => {
            dispatch(fetchImage(ownProps.index + 1));
        },
    };
};
export default connect(mapState, mapDispatch)(Pokecard);
