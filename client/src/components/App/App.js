import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { Select, Card, InputNumber } from 'antd';
import StocksList from "../StocksList/StocksList";
import './App.css';

const { Option } = Select;

function App() {
  const stocks = useSelector(state => state.stocks);
  const [visibilityFilter, setVisibilityFilter] = useState([]);

  let shownStocks;

  if(stocks) {
    shownStocks = stocks.filter(stock => !visibilityFilter.includes(stock.ticker));
  }

  const deleteStock = (e) => {
    setVisibilityFilter(visibilityFilter.filter(stock => stock !== e));
  }

  return (
    <div className="App">
      <div className="site-card-border-less-wrapper">
        <Card title="Add a new Stock" bordered={false} style={{ width: 180 }}>
          <Select defaultValue={'Choose'} style={{ width: 120 }} onChange={(e) => deleteStock(e)}>
          {visibilityFilter.map(stock => <Option key={stock} value={stock}>{stock}</Option>)}
          </Select>
        </Card>
        <Card title="Second update" bordered={false} style={{ width: 180 }}>
          <InputNumber min={1} max={6} defaultValue={5} bordered={false} />
        </Card>
        </div>
        <div className="list__container">
          {shownStocks && shownStocks.map(stock => <StocksList key={stock.ticker} stock={stock} filter={setVisibilityFilter} />)}
        </div>
    </div>
  );
}

export default App;
