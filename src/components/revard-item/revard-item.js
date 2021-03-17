import React, { Component, Fragment } from 'react';
import './revard-item.css'

class RevardItem extends Component {

    state = {
        title: this.props.title,
        image: this.props.image,
    }

    render() {
        const { title, image } = this.state
        return (
            <Fragment>
                <div className="revard-card-cont col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card revard-card">
                        <div className="card-body">
                            <img src={image} alt=""></img>
                            <p className="card-text">{title}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RevardItem;