import React from "react"
import Stock from "./Stock"

function PortfolioContainer({ portfolioStocks, handleDelete }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map((stock) => {
        return (
          <Stock key={stock.id} stock={stock} handleDelete={handleDelete} />
        )
      })}
    </div>
  )
}

export default PortfolioContainer
