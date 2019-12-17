document.getElementById('calculate').addEventListener('click', () => {
  const billTotal = document.getElementById('billamt').value;
  const servQual = document.getElementById('serviceQual').value;
  const peepAmt = document.getElementById('peopleamt').value;
  const calcTip = billTotal * servQual / peepAmt;
  document.getElementById('tip').innerText = calcTip;
});
