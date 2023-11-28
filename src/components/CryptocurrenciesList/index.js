// Write your JS code here

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currenciesData} = props

  return (
    <div className="list-container">
      <h1 className="title">Cryptocurrency Tracker</h1>
      <img
        className="crypto-image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="cryptocurrencies-list-container">
        <div className="list-header">
          <p className="name coin">Coin Type</p>
          <div className="currency-container">
            <p className="name usd">USD</p>
            <p className="name euro">EURO</p>
          </div>
        </div>
        <ul>
          {currenciesData.map(eachItem => (
            <CryptocurrencyItem currencyItemData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
