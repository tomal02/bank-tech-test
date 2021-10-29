class Statement {
  _outputHeader() {
    console.log('DATE | TYPE | AMOUNT | BALANCE\n');
  }

  getStatement(transactions) {
    this._outputHeader();
    transactions.forEach((transaction) => {
      console.log(
        `${transaction[0]} | ${transaction[1]} | ${transaction[2]} | ${transaction[3]}`
      );
    });
  }
}
