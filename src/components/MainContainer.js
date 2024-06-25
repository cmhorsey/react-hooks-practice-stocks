import React, { useState, useEffect } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [fetchTrigger, setFetchTrigger] = useState(false)
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  function handleBuy(stock) {
    setPortfolioStocks([...portfolioStocks, stock])
  }

  function handleDelete(deletedStock) {
    const filteredStocks = portfolioStocks.filter(
      (stock) => stock.id !== deletedStock.id
    )
    setPortfolioStocks(filteredStocks)
  }

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
          <StockContainer
            stocks={stocks}
            handleBuy={handleBuy}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioStocks={portfolioStocks}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
