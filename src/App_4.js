import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [money, setMoney] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [coins, setCoins] = useState([]);
  const onChangeMoney = (e)=> {
    setMoney(e.target.value);
  };

  const changeSelect = (e) => {
    // console.log(e.target.value);
    // console.log(...coins.filter(coin => coin.id === e.target.value));
    setSelectedCoin(...coins.filter(coin => coin.id === e.target.value));
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json)=> {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <form action="">
        <div>
          <label htmlFor="money">금액 입력($): </label>
          <input type="number" value={money} onChange={onChangeMoney} id={"money"} />
        </div>
        {
          loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <select onChange={changeSelect}>
                <option value="xzzz">코인을 선택하세요.</option>
                {
                  coins.map((coin) => <option value={coin.id} id={coin.id}>
                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                  </option>)
                }
              </select>
            </>
          )
        }
        {
          selectedCoin.id && <p>{24}USD로 {selectedCoin.name}를 { Math.floor(money / selectedCoin.quotes.USD.price) }개 살 수 있습니다. </p>
        }
      </form>
    </div>
  );
}

export default App;
