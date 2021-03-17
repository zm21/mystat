import React, { Component, Fragment } from 'react';
import './navbar-item.css';

class NavbarItem extends Component {

    state = {
        student: this.props.student
    }

    render() {
        const { fullName, groupName, pointsCount, diamondsCount, coinsCount, avatar } = this.state.student
        return (
            <Fragment>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="btn-cont">
                        <img class="mystat-btn" id="sidebarCollapse" src="https://lh3.googleusercontent.com/FjOVLOgkXNgRU7AqjMgotZqEDJQJq35dHvW_FahG0ZUe-kgggXY1U3dAuqWL2BUerOI" alt="mystat"></img>
                    </div>
                    <a className="navbar-brand" href="#">
                        <div className="avatar-cont">
                            <img className="avatar" src={avatar} alt="logo" />
                        </div>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <p className="info info-text">{fullName}</p>
                        </li>
                        <li className="nav-item">
                            <p className="info info-text">Group: {groupName}</p>
                        </li>
                        <li className="nav-item revard-cont">
                            <div className="revardsBlock">
                                <span className="point"><i class="fas fa-star"></i> {pointsCount}</span>
                                <span className="coin"><i class="fab fa-bitcoin"></i> {coinsCount}</span>
                                <span className="diamond"><i class="fas fa-gem"></i> {diamondsCount}</span>
                            </div>
                        </li>                 
                    </ul>
                </nav>

            </Fragment>

        )
    }
}

export default NavbarItem;