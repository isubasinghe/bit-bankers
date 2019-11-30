function taxf(income, amount) {
  var loss = 0;
  var remincome = income;
  var donation = 0;
  while (loss < amount) {
    if (remincome > 180000) {
      loss = loss + 0.55;
      donation = donation + 1;
      remincome = remincome - 1;
    } else if (remincome > 90000) {
      loss = loss + 0.63;
      donation = donation + 1;
      remincome = remincome - 1;
    } else if (remincome > 37000) {
      loss = loss + 0.675;
      donation = donation + 1;
      remincome = remincome - 1;
    } else if (remincome > 18200) {
      loss = loss + 0.81;
      donation = donation + 1;
      remincome = remincome - 1;
    } else {
      loss = loss + 1;
      donation = donation + 1;
      remincome = remincome - 1;
    }
  }
  return donation;
}
export default taxf;
