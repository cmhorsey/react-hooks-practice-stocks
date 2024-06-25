import React, { useState, useEffect } from "react"
import StockContainer from "./StockContainer"
import PortfolioContainer from "./PortfolioContainer"
import SearchBar from "./SearchBar"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [filteredStocks, setFilteredStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  function handleBuy(stock) {
    setPortfolioStocks([...portfolioStocks, stock])
  }

  function handleDelete(deletedStock) {
    const filteredPortfolioStocks = portfolioStocks.filter(
      (stock) => stock.id !== deletedStock.id
    )
    setPortfolioStocks(filteredPortfolioStocks)
  }

  function handleNameSort() {
    const sortedNameStocks = [...filteredStocks].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    setFilteredStocks(sortedNameStocks)
  }

  function handlePriceSort() {
    const sortedPriceStocks = [...filteredStocks].sort(
      (a, b) => a.price - b.price
    )
    setFilteredStocks(sortedPriceStocks)
  }

  function handleTypeSearch(event) {
    const stockType = event.target.value
    const filteredTypeStocks = stocks.filter(
      (stock) => stock.type === stockType
    )
    setFilteredStocks(filteredTypeStocks)
  }

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => {
        setStocks(data)
        setFilteredStocks(data)
      })
  }, [])

  return (
    <div>
      <SearchBar
        handleNameSort={handleNameSort}
        handlePriceSort={handlePriceSort}
        handleTypeSearch={handleTypeSearch}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks}
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
