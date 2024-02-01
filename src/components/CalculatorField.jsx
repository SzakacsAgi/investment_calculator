export default function CalculatorField({name, investments, onInputChange}) {

    return (
        <p>
            <label htmlFor={name}>{name}</label>
            <input type="number" id={name} value={investments[name]}
                   onChange={(event) => onInputChange(name, event.target.value)}
                   required/>
        </p>
    )
}