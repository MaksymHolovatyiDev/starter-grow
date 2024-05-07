import { Post, JsonController, Body } from 'routing-controllers';

import { ICreateRegularPayment } from './PaymentTypes';

import PaymentServices from './PaymentServices';

@JsonController('/payment')
export default class Payment {
  public service = new PaymentServices();

  @Post('/regular-payments')
  async CreateRegularPayment(@Body() body: ICreateRegularPayment) {
    return this.service.createRegularPayment(body);
  }
}
