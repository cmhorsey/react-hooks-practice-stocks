import React from "react"

function Stock({ stock, handleBuy, handleDelete }) {
  const { ticker, name, price } = stock

  return (
    <div>
      <div
        onClick={() => {
          if (handleBuy) {
            handleBuy(stock)
          } else {
            handleDelete(stock)
          }
        }}
        className="card"
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Stock
