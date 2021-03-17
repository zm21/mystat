import React, { Component, Fragment } from 'react';
import ActivityItem from '../activity-item/activity-item';
import './activity-list.css'

class ActivityList extends Component {
    state = {
        activities: this.props.activities
    }

    render() {
        const { activities } = this.state
        var ActivitiesTemplate
        if (activities !== null) {
            ActivitiesTemplate = activities.map(item => {
                return (<ActivityItem
                    date={item.date}
                    text={item.text}
                    itemCount={item.itemCount}
                    revardType={item.revardType}
                ></ActivityItem>)
            })
        }
        return (
            <Fragment>
                 <div className="activity-list-cont">
                    <div className="activity-list-block">
                        {ActivitiesTemplate} 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ActivityList