import React, { useState, useEffect } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  function handleBuy(stock) {
    console.log(stock)
    setPortfolioStocks([...portfolioStocks, stock])
  }
  console.log(portfolioStocks)

  //set empty array, on click push stock into array
  //pass array back down to portfolio container

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
          <StockContainer stocks={stocks} handleBuy={handleBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
