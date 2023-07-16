/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class ErrorRepository {
  constructor() {
    this.err = new Map();
    this.err.set(1, 'Введены неверные данные');
  }

  translate(code) {
    if (!this.err.has(code)) {
      throw new Error('Unknow error');
    }
    return this.err.get(code);
  }
}

const getError = new ErrorRepository();

export default getError;
