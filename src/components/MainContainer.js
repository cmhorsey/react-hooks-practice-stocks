import React, { useState, useEffect } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [stocks, setStocks] = useState([])
  //Set state with fetch
  //Set trigger
  //pass to Stock Container

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then(setStocks)
  }, [fetchTrigger])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
