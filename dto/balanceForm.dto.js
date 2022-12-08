class BalanceForm {
  date;

  campo1;

  campo2;

  campo3;

  campo4;

  campo5;

  campo6;

  campo7;

  campo8;

  campo9;

  campo10;

  campo11;

  campo12;

  campo13;

  campo14;

  result;

  constructor(date, optionsGroup, total) {
    this.date = date;
    this.campo1 = optionsGroup['group-1'];
    this.campo2 = optionsGroup['group-2'];
    this.campo3 = optionsGroup['group-3'];
    this.campo4 = optionsGroup['group-4'];
    this.campo5 = optionsGroup['group-5'];
    this.campo6 = optionsGroup['group-6'];
    this.campo7 = optionsGroup['group-7'];
    this.campo8 = optionsGroup['group-8'];
    this.campo9 = optionsGroup['group-9'];
    this.campo10 = optionsGroup['group-10'];
    this.campo11 = optionsGroup['group-11'];
    this.campo12 = optionsGroup['group-12'];
    this.campo13 = optionsGroup['group-13'];
    this.campo14 = optionsGroup['group-14'];
    this.result = total;
  }
}

export default BalanceForm;
