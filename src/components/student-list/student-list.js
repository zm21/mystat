import React, { Component, Fragment } from 'react';
import StudentItem from '../student-item/student-item';
import './student-list.css'

class StudentList extends Component {
    state = {
        students: this.props.students
    }

    render() {
        const { students } = this.state
        var StudentsTemplate
        if (students !== null) {
            StudentsTemplate = students.map(item => {
                return (<StudentItem
                    fullName={item.fullName}
                    positionInRating={item.positionInRating}
                    pointsCount={item.pointsCount}
                    isActive={item.isActive}
                ></StudentItem>)
            })
        }
        return (
            <Fragment>
                <div className="st-list-cont">
                    <div className="st-list-block">
                        {StudentsTemplate} 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default StudentList