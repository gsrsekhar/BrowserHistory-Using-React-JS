import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAuthDelete = () => {
    const {searchInput} = this.state

    if (searchInput === '') {
      return (
        <div className="justify">
          <p>There is no history to show</p>
        </div>
      )
    }
    return (
      <div className="justify">
        <p>There is no history to show</p>
      </div>
    )
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="first-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="container">
            <img
              className="search-image"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              value={searchInput}
            />

            <input
              className="input"
              type="search"
              placeholder="Search History"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="second-container">
          <ul className="list-container">
            {this.onAuthDelete()}
            {searchResults.map(eachHistory => (
              <HistoryItem
                key={eachHistory.id}
                updateSearchInput={this.updateSearchInput}
                historyDetails={eachHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
