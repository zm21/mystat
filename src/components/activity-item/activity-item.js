import React, { Component, Fragment } from 'react';
import './activity-item.css'

class ActivityItem extends Component {

    state = {
        date: this.props.date,
        text: this.props.text,
        itemCount: this.props.itemCount,
        revardType: this.props.revardType
    }

    render() {
        const { text, date, itemCount, revardType } = this.state
        var classRevard='fas fa-gem diamond';
        if(revardType=="coin")
            classRevard='fab fa-bitcoin coin'
        return (
            <Fragment>
                <div className="">
                    <small>{date}</small>
                    <div className="d-flex justify-content-between">
                        <p>{text}</p>
                        <p>+{itemCount} <i class={classRevard}></i></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ActivityItem;