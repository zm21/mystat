import React, { Component, Fragment } from 'react';
import RevardItem from '../revard-item/revard-item';
import './revard-list.css'


class RevardList extends Component {
    state = {
        revards: this.props.revards
    }

    render() {
        const { revards } = this.state
        var RevardsTemplate
        if (revards !== null) {
            RevardsTemplate = revards.map(item => {
                return (<RevardItem
                    title={item.title}
                    image={item.image}
                ></RevardItem>)
            })
        }
        return (
            <Fragment>
                <div className="revard-list-cont">
                    <div className="revard-list-block">
                        <div className="row">
                        {RevardsTemplate}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RevardList