import { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const MAX_NUMBER_DISPLAY = 10;

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    state = { ...initialState };

    clearMemory() {
        this.setState({ ...initialState });
    }

    convertExponential(value) {
        this.setState({
            ...initialState,
            displayValue: value.toExponential(0)
        });
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [ ...this.state.values ];

            try {
                const factor = Math.pow(10, 4);
                switch (currentOperation) {
                    case '+':
                        values[0] = (values[0].toFixed(4) * factor + values[1].toFixed(4) * factor) / factor;

                        if(values[0].toString().length > MAX_NUMBER_DISPLAY) {
                            this.convertExponential(values[0]);
                            return;
                        }

                        this.setState({ displayValue: values[0] });
                        break;
                    case '-':
                        values[0] = (values[0].toFixed(4) * factor - values[1].toFixed(4) * factor) / factor;

                        if(values[0].toString().length > MAX_NUMBER_DISPLAY) {
                            this.convertExponential(values[0]);
                            return;
                        }

                        this.setState({ displayValue: values[0] });
                        break;
                    case '*':
                        values[0] = Math.round((values[0] * values[1]) * factor) / factor;

                        if(values[0].toString().length > MAX_NUMBER_DISPLAY) {
                            this.convertExponential(values[0]);
                            return;
                        }

                        this.setState({ displayValue: values[0] });

                        break;
                    case '/':
                        values[0] /= values[1];
                        if(values[0].toString().length > MAX_NUMBER_DISPLAY) {
                            if(!Number.isInteger(values[0])) {
                                const sizeWholePart = Math.trunc(values[0]).toString().length + 1;
                                const placeAfterDecimalPoint = MAX_NUMBER_DISPLAY - sizeWholePart;
                                values[0] = values[0].toFixed(placeAfterDecimalPoint);

                                return this.setState({ displayValue: values[0] });
                            }

                            return this.convertExponential(values[0]);
                        }

                        // if(values[0].toString().length > MAX_NUMBER_DISPLAY) {
                        //     this.convertExponential(values[0]);
                        //     return;
                        // }

                        break;
                    default:
                        break;
                }

                // values[0] = eval(`${ values[0] } ${ currentOperation } ${ values[1] } `);

                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory();
                    return;
                }
            } catch(e) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            });
        }
    }

    addDigit(digit) {
        if(this.state.values[this.state.current].toString().length
            >= MAX_NUMBER_DISPLAY) return;

        if(digit === '.'
            && this.state.displayValue
            && this.state.displayValue.toString().includes('.')) return;

        const clearDisplay = (this.state.displayValue === '0' && digit !== '.')
            || this.state.displayValue.toString().includes('e')
            || this.state.clearDisplay;

        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;

        this.setState({ displayValue, clearDisplay: false });

        if(digit !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [ ...this.state.values ];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    render() {
        // const addDigit = digit => this.addDigit(digit);
        // const setOperation = op => this.setOperation(op);

        return (
            <div className="calculator">
                <Display value={ this.state.displayValue } />
                <Button label="AC" click={ this.clearMemory } triple />
                <Button label="÷" click={ this.setOperation } operation />
                <Button label="7" click={ this.addDigit } />
                <Button label="8" click={ this.addDigit } />
                <Button label="9" click={ this.addDigit } />
                <Button label="×" click={ this.setOperation } operation />
                <Button label="4" click={ this.addDigit } />
                <Button label="5" click={ this.addDigit } />
                <Button label="6" click={ this.addDigit } />
                <Button label="−" click={ this.setOperation } operation />
                <Button label="1" click={ this.addDigit } />
                <Button label="2" click={ this.addDigit } />
                <Button label="3" click={ this.addDigit } />
                <Button label="+" click={ this.setOperation } operation />
                <Button label="0" click={ this.addDigit } double />
                <Button label="." click={ this.addDigit } />
                <Button label="=" click={ this.setOperation } operation />
            </div>
        )
    }
}

