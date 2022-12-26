export function formatPriceChange(changeSek, changePercent) {
  var res = changeSek.toFixed(2) + " kr (" +changePercent.toFixed(2) +"%)"
  if (changeSek > 0 ) {
    return "+" + res
  }
  return res
}

export function priceChangeColor(changeSek) {
  return changeSek < 0 ? 'green' : 'red';
}