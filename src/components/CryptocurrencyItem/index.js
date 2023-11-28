// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItemData} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = currencyItemData
  console.log(currencyName, usdValue, euroValue, id, currencyLogo)

  return (
    <li className="list-item-container">
      <div className="item-first-inner-container">
        <img className="item-image" src={currencyLogo} alt={currencyName} />
        <p className="item-name">{currencyName}</p>
      </div>
      <div className="item-second-inner-container">
        <p className="item-usd-value">{usdValue}</p>
        <p className="item-euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
