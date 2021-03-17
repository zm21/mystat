import React, { Component, Fragment } from 'react';
import './student-item.css'

class StudentItem extends Component {

    state = {
        fullName: this.props.fullName,
        positionInRating: this.props.positionInRating,
        pointsCount: this.props.pointsCount,
        isActive: this.props.isActive
    }

    render() {
        const { fullName, positionInRating, pointsCount, isActive } = this.state
        var stClass ='block-student-inf'
        if(isActive)
            stClass = 'active block-student-inf'
        return (
            <Fragment>
                <div className={stClass}>
                    <p>{positionInRating}. {fullName}</p>
                    <p>{pointsCount} <i class="point fas fa-star"></i></p>
                </div>
            </Fragment>
        )
    }
}

export default StudentItem;