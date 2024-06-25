import React from "react"
import Stock from "./Stock"

function StockContainer({ stocks, handleBuy, handleDelete }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return (
          <Stock
            key={stock.id}
            stock={stock}
            handleBuy={handleBuy}
            handleDelete={handleDelete}
          />
        )
      })}
    </div>
  )
}

export default StockContainer
