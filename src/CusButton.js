import React, { Component } from 'react'
import './TipButton.css';

class CusButton extends Component {
    constructor(props) {
        super(props);
        this.state = { cusVal: '' }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.props.handleClick(e, e.target.value)
    }
    render() {
        return (
            <div className="cus">
                <input
                    style={this.props.selected ? { backgroundColor: "hsl(172, 67%, 45%)", color: "hsl(183, 100%, 15%)" } : null}
                    name="cusVal"
                    onChange={this.handleChange}
                    value={this.state.cusVal}
                    placeholder="Custom"
                    type="number" />
            </div>
        )
    }
}

export default CusButton;