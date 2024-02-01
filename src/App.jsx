import CalculatorField from "./components/CalculatorField.jsx";
import {formatter} from "./util/investment.js";
import Result from "./components/Result.jsx";
import {useState} from "react";

const INITIAL_INVESTMENT_VALUES = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
}

function App() {
    const [investmentValues, setInvestmentValues] = useState(INITIAL_INVESTMENT_VALUES);

    function handelCalculatorInputChange(changedValueName, changedValue) {
        setInvestmentValues(prevState => {
            return {
                ...prevState,
                [changedValueName]: Number(changedValue)
            }
        })
    }

    const inputIsValid = investmentValues.duration >= 1;

    return (
        <main>
            <form id="user-input">
                <div className="input-group">
                    <CalculatorField name="initialInvestment" investments={investmentValues}
                                     onInputChange={handelCalculatorInputChange}/>
                    <CalculatorField name="annualInvestment" investments={investmentValues}
                                     onInputChange={handelCalculatorInputChange}/>
                </div>
                <div className="input-group">
                    <CalculatorField name="expectedReturn" investments={investmentValues}
                                     onInputChange={handelCalculatorInputChange}/>
                    <CalculatorField name="duration" investments={investmentValues}
                                     onInputChange={handelCalculatorInputChange}/>
                </div>
            </form>
            {!inputIsValid && <p className="center">Please enter a duration rather than 0</p>}
            {inputIsValid && <Result investments={investmentValues}/>}
        </main>
    )
}

export default App