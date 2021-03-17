import React, { Component, Fragment } from 'react';
import './App.css';
import ActivityList from './components/activity-list/activity-list';
import NavbarItem from './components/navbar-item/navbar-item';
import RevardList from './components/revard-list/revard-list';
import StudentList from './components/student-list/student-list';



class App extends Component {
  
  state = {
    student:{
        fullName: 'Mykola Zaiets Leontijovych',
        groupName: 'ПВ927',
        pointsCount: 5045,
        diamondsCount: 1525,
        coinsCount: 3520,
        avatar: 'https://mystatfiles.itstep.org/index.php?view_key=rtILv2awXkYrSQ7WVzOr0G9F1kZwIdRQC03dLrvYiKe0BqT6%2BEPcgCg9mwgitvDLabIuqogbbDC5TB1N9gcnlhOyMil07hwN2nWpDUmM8zQ%3D'
    },
    revards:[
      {
        title: '5 consecutive attendances',
        image: 'https://mystat.itstep.org/assets/images/item-1.png?v=56261e53478d92c4861ace36b0c05448',
      },
      {
        title: '10 consecutive attendances',
        image: 'https://mystat.itstep.org/assets/images/item-5.png?v=ebb5ee2524a4e73fce9eb26bacd77bf',
      },
      {
        title: 'Full profile info in MyStat',
        image: 'https://mystat.itstep.org//assets/images/item-8.png?v=e76325633efb453ca297ed838bac51cd',
      },
      {
        title: '20 consecutive attendances',
        image: 'https://mystat.itstep.org//assets/images/item-3.png?v=aac03d123910b2609d551b789484ec9c',
      },
      {
        title: 'Full profile info in MyStat',
        image: 'https://mystat.itstep.org//assets/images/item-8.png?v=e76325633efb453ca297ed838bac51cd',
      },
      {
        title: '20 consecutive attendances',
        image: 'https://mystat.itstep.org//assets/images/item-3.png?v=aac03d123910b2609d551b789484ec9c',
      },
      {
        title: '10 consecutive attendances',
        image: 'https://mystat.itstep.org/assets/images/item-5.png?v=ebb5ee2524a4e73fce9eb26bacd77bf',
      },
      {
        title: 'Full profile info in MyStat',
        image: 'https://mystat.itstep.org//assets/images/item-8.png?v=e76325633efb453ca297ed838bac51cd',
      },
    ],
    students:[
      {
        fullName: 'Mykola Zaiets Leontijovych',
        positionInRating: 1,
        pointsCount: 5045,
        isActive: true
      },
      {
        fullName: 'Mykola Zaiets Leontijovych',
        positionInRating: 2,
        pointsCount: 5045,
        isActive: false
      },
      {
        fullName: 'Mykola Zaiets Leontijovych',
        positionInRating: 3,
        pointsCount: 5045,
        isActive: false
      },
      {
        fullName: 'Mykola Zaiets Leontijovych',
        positionInRating: 4,
        pointsCount: 5045,
        isActive: false
      },
      {
        fullName: 'Mykola Zaiets Leontijovych',
        positionInRating: 5,
        pointsCount: 5045,
        isActive: false
      },  
    ],
    activities:[
      {
        date: '17.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '17.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '17.03.2021',
        text: 'Grade',
        itemCount: 5,
        revardType: 'coin'
      },
      {
        date: '17.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '17.03.2021',
        text: 'Grade',
        itemCount: 5,
        revardType: 'coin'
      },
      {
        date: '17.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '17.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '17.03.2021',
        text: 'Grade',
        itemCount: 5,
        revardType: 'coin'
      },
      {
        date: '17.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '17.03.2021',
        text: 'Grade',
        itemCount: 5,
        revardType: 'coin'
      }
    ]
  }
  
  render() {
    return (
      <Fragment>
        <NavbarItem student={this.state.student}></NavbarItem>
        <div className="container-fluid main-section">
          <div className="row">

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <h2>Your revards:</h2>
              <div className="row">
                  <RevardList revards={this.state.revards}></RevardList>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <h2>Leaders:</h2>
              <div className="row">
                  <StudentList students={this.state.students}></StudentList>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <h2>Activities:</h2>
                  <ActivityList activities={this.state.activities}></ActivityList>
            </div>
  

          </div>
        </div>

      </Fragment>
    );
  }

}

export default App;
