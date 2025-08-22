import { useEffect, useState } from "react"
import axios from 'axios'

const Selection = ({newData, search}) => {

    const [filterList, setFilterList] = useState(newData);

    useEffect(() => {
    setFilterList(
        newData.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
        )
    );
    }, [search, newData]);

    console.log(filterList)
    
    if (filterList.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (filterList.length < 11 && filterList.length > 1) {
       return ( 
       <div>{filterList.map(country => ( <div key={country.name.common}> {country.name.common} <button onClick={() => setFilterList([country])}>Show</button> </div>))}</div>
     )
    } else if (filterList.length === 1) {
        const country = filterList[0]
        console.log(country.languages)
        return (
            <div>
                <div>
                    <h1>{country.name.common}</h1>
                </div>
                <div>
                    <p>Capital {<p>Capital: {country.capital.join(', ')}</p>} </p>
                    <p>Area {country.area} </p>
                </div>
                <div>
                    <h2>Languages</h2>
                    <lu>
                        {Object.values(country.languages).map((language, i) => <li key={i}>{language}</li>)}
                    </lu>
                </div>
                <div>
                    <img src={country.flags.png} alt={country.flags.alt} />
                </div>
            </div>
        )
    }
}

const Filter = () => {
    const [newInput, setInput] = useState('')
    const [newData, setNewData] = useState([])

    useEffect(() => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => setNewData(response.data))
    }, [])

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleButtonClick = () => (
        setInput('')
    )

    return (
        <div>
            <div>
                find countries 
                <input type="text" onChange={handleInputChange} value={newInput}/>
                <button onClick={handleButtonClick}>Clear</button>
            </div>
            <div>
                <Selection newData={newData} search={newInput}></Selection>
            </div>
        </div>
    )
}

export default Filter