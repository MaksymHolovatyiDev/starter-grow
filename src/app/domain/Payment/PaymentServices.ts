import { ICreateRegularPayment } from './PaymentTypes';

export default class PaymentServices {
  async createRegularPayment(body: ICreateRegularPayment) {
    return body;
  }
}
