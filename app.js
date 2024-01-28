// Load currencies from JSON file
fetch('currencies.json')
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data);

    // Populate select options
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    currencies.forEach(currency => {
      const option1 = document.createElement('option');
      const option2 = document.createElement('option');
      option1.value = option2.value = currency;
      option1.textContent = option2.textContent = currency;
      fromCurrencySelect.appendChild(option1);
      toCurrencySelect.appendChild(option2);
    });
  })
  .catch(error => console.error('Error fetching currencies:', error));

function convertCurrency() {
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  // Load exchange rates from JSON file
  fetch('currencies.json')
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data[fromCurrency] / data[toCurrency];
      const result = amount * exchangeRate;
      document.getElementById('result').textContent = `${amount} ${fromCurrency} is equal to ${result.toFixed(5)} ${toCurrency}`;
    })
    .catch(error => console.error('Error fetching exchange rates:', error));
}
