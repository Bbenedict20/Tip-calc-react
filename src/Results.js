import React, { Component } from 'react'
import './Results.css';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { tipTotal: 0, personTotal: 0 }
    }
    getTipAmt() {
        let { tipPerc, billTotal, numPeople } = this.props;
        let tip = (tipPerc / 100).toFixed(2);
        let totalTip = (billTotal * tip).toFixed(2);
        let tipPerPerson = (totalTip / numPeople).toFixed(2);
        return tipPerPerson;
    }
    getTotalAmt() {
        let { tipPerc, billTotal, numPeople } = this.props;
        let tip = (tipPerc / 100).toFixed(2);
        let totalTip = (billTotal * tip).toFixed(2);
        let totPerPerson = ((parseInt(billTotal) + parseInt(totalTip)) / numPeople).toFixed(2);
        return totPerPerson;
    }
    render() {
        return (
            <div className="bg result-grid">
                <div className="a">
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </div>
                <div className="b">
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>
                <h2 className="c no-top">${this.getTipAmt()}</h2>
                <h2 className="d no-top">${this.getTotalAmt()}</h2>
                <button onClick={this.props.reset} className="e">RESET</button>
            </div>
        )
    }
}

export default Results;