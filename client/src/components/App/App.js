import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Select, Card, InputNumber } from 'antd';
import StocksList from "../StocksList/StocksList";
import './App.css';
import { addStonk } from "../../store/actions";

const { Option } = Select;

function App() {
  const stocks = useSelector(state => state.stocks.filter(stock => state.visible.includes(stock.ticker)));
  const removed = useSelector(state => state.removed);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="site-card-border-less-wrapper">
        <Card title="Add a new Stock" bordered={false} style={{ width: 180 }}>
          <Select defaultValue={'Choose'} style={{ width: 120 }} onChange={(e) => dispatch(addStonk(e))}>
            {removed.map(stock => <Option key={stock} value={stock}>{stock}</Option>)}
          </Select>
        </Card>
        <Card title="Second update" bordered={false} style={{ width: 180 }}>
          <InputNumber min={5} defaultValue={5} bordered={false} />
        </Card>
        </div>
        <div className="list__container">
          {stocks && stocks.map(stock => <StocksList key={stock.ticker} stock={stock} />)}
        </div>
    </div>
  );
}

export default App;
