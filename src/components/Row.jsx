import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Row({investments}) {
    let results = calculateInvestmentResults(investments);
    const initialInvestment =
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment;

    return (
        <>
            {results.map((yearData) => {
                const totalInterest =
                    yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
        </>
    )
}