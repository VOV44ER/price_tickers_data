import React, { useEffect, useState } from "react";
import { Statistic, Card, Row, Col, Switch, Button } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, PoweroffOutlined, CloseOutlined } from '@ant-design/icons';
import './StocksList.css';
import 'antd/dist/antd.css';
import { removeStonk } from "../../store/actions";
import { useDispatch } from "react-redux";

function StocksList({ stock }) {
  const prevPrice = usePrevPropValue(stock.price)
  const [condition, setCondition] = useState(true);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  function usePrevPropValue(value) {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    if(prevPrice > stock.price) {
      setCondition(false)
    } else if (prevPrice < stock.price) {
      setCondition(true);
    }
  }, [prevPrice, stock.price])

  const onChange = (checked) => {
    setToggle(checked);
  }

  return (
    <>
    <div className="site-statistic-demo-card">
      <Row gutter={30}>
        <Col span={50}>
          <Card>
            <Switch defaultChecked onChange={onChange} />
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              className={'card__button'}
              onClick={() => dispatch(removeStonk(stock.ticker))}
            />
            {toggle ?
            <Statistic
              title={stock.ticker}
              value={stock.price}
              valueStyle={condition ? { color: '#3f8600' } : { color: '#cf1322' }}
              prefix={condition ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="$" 
            />
            : 
            <Statistic
              title='OFF'
              prefix={<CloseOutlined />}
              value={null}
              valueStyle={{ color: '#A9A9A9' }}
            />
            }
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default StocksList;