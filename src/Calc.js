import React, { Component } from 'react'
import './Calc.css';
import TipButton from './TipButton';
import CusButton from './CusButton';
import Person from './images/icon-person.svg'
import Results from './Results';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = { billTotal: 0, tipPerc: 5, numPeople: 1 }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
        this.checkSelected = this.checkSelected.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.id === 'people') {
            if (e.target.value <= 0) {
                e.target.classList.add('brown-outline');
                e.target.labels[0].children[0].classList.add('show');
            } else {
                e.target.labels[0].children[0].classList.remove('show');
                e.target.classList.remove('brown-outline');
            }
        }
    }
    handleClick(e, val) {
        this.setState({ tipPerc: val });
    }
    renderButtons() {
        return (
            this.props.tipAmts.map((tip) => (
                <TipButton
                    val={tip}
                    key={tip}
                    handleClick={this.handleClick}
                    selected={tip === this.state.tipPerc ? true : false}
                />
            ))
        )
    }
    checkSelected() {
        let check = true;
        for (let n of this.props.tipAmts) {
            if (n === this.state.tipPerc) {
                check = false;
            }
        }
        if (check) {
            return true;
        } else {
            return false;
        }
    }
    resetForm() {
        this.setState({ billTotal: 0, tipPerc: 5, numPeople: 1 });
    }
    render() {
        return (
            <div className="center">
                <div className="main-container">
                    <div className="f-width">
                        <div className="center form-input">
                            <label htmlFor="bill">Bill</label>
                            <span className="icon">$</span>
                            <input
                                onChange={this.handleChange}
                                name="billTotal"
                                type="number"
                                id="bill"
                                value={this.state.billTotal} />
                        </div>
                        <div className="form-input">
                            <h2>Select Tip %</h2>
                            <div className="tip-grid">
                                {this.renderButtons()}
                                <CusButton
                                    handleClick={this.handleClick}
                                    selected={this.checkSelected() ? true : false}
                                />
                            </div>
                        </div>
                        <div className="center form-input">
                            <label htmlFor="people">Number of People<span className="zero-text">Can't be zero</span></label>
                            <img src={Person} alt="person-icon" className="icon p" />
                            <input
                                onChange={this.handleChange}
                                name="numPeople"
                                id="people"
                                type="number"
                                value={this.state.numPeople}
                            />
                        </div>
                    </div>
                    <div className="make-row">
                        <div className="center form-input">
                            <Results
                                billTotal={this.state.billTotal}
                                tipPerc={this.state.tipPerc}
                                numPeople={this.state.numPeople}
                                reset={this.resetForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calc;