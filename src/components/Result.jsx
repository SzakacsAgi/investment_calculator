import Row from "./Row.jsx";

export default function Result({investments}) {
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            <Row investments={investments}/>
            </tbody>
        </table>
    )
}