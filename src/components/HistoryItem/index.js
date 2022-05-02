/* eslint-disable react/button-has-type */
import './index.css'

const HistoryItem = props => {
  const {historyDetails, updateSearchInput} = props
  const {timeAccessed, logoUrl, domainUrl, title} = historyDetails

  const onClickSuggestion = () => {
    updateSearchInput(title)
  }
  const paragraph = title === '' ? <p>There is no history to show</p> : ''

  return (
    <li className="list">
      <p className="para">{timeAccessed}</p>
      <div className="logo-container">
        <img className="image" src={logoUrl} alt="domain logo" />
        <p className="heading">{title}</p>
        <p className="paragraph">{domainUrl}</p>
      </div>
      {paragraph}
      <button
        className="button"
        testid="delete"
        type="button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
