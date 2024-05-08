import { Post, JsonController, Body } from 'routing-controllers';

import {
  DelayedPaymentJ4J5Body,
  SettleSuspendedTransactionBody,
} from './PaymentTypes';

import PaymentServices from './PaymentServices';

@JsonController('/payment')
export default class Payment {
  public service = new PaymentServices();

  @Post('/delayed-paymentJ4J5')
  async delayedPaymentJ4J5(
    @Body({ validate: true, required: true }) body: DelayedPaymentJ4J5Body,
  ) {
    return this.service.delayedPaymentJ4J5(body);
  }

  @Post('/settle-suspended-transaction')
  async settleSuspendedTransaction(
    @Body({ validate: true, required: true })
    body: SettleSuspendedTransactionBody,
  ) {
    return this.service.settleSuspendedTransaction(body);
  }
}
