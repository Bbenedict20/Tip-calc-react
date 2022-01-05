import React, { Component } from 'react'
import './TipButton.css'

class TipButton extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: false, tipVal: 5 }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt) {
        this.props.handleClick(evt, this.props.val);
    }
    render() {
        return (
            <div className={this.props.val === "Custom" ? "t-button cus" : "t-button reg"}
                style={this.props.selected ? { backgroundColor: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" } : null}
                onClick={this.handleClick}
            >
                {this.props.val}%
            </div>
        )
    }
}

export default TipButton;