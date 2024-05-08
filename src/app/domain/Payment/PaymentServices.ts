import sdk from '@api/grow-il';

import {
  DelayedPaymentJ4J5Body,
  SettleSuspendedTransactionBody,
} from './PaymentTypes';
import { EChargeTypes, ESaveCardToken } from 'utils/constants';

const { userId } = process?.env;

export default class PaymentServices {
  async delayedPaymentJ4J5({
    pageCode,
    sum,
    description,
    fullName,
    phone,
    catalog_number,
    quantity,
    price,
    item_description,
  }: DelayedPaymentJ4J5Body) {
    return sdk
      .postApiLightServer10Createpaymentprocess({
        pageCode,
        userId,
        sum,
        chargeType: EChargeTypes.SuspendedCharge,
        paymentNum: 10,
        description,
        'pageField[fullName]': fullName,
        'pageField[phone]': phone,
        saveCardToken: ESaveCardToken.save,
        'product_data[0][catalog_number]': catalog_number,
        'product_data[0][quantity]': quantity,
        'product_data[0][price]': price,
        'product_data[0][item_description]': item_description,
      })
      .then(({ data }) => JSON.parse(data as string))
      .catch(({ data }) => JSON.parse(data as string));
  }

  async settleSuspendedTransaction({
    transactionId,
    transactionToken,
    sum,
    catalog_number,
    quantity,
    price,
    item_description,
  }: SettleSuspendedTransactionBody) {
    return sdk
      .postApiLightServer10Settlesuspendedtransaction({
        userId,
        transactionId,
        transactionToken,
        sum,
        'productData[0][catalog_number]': catalog_number,
        'productData[0][quantity]': quantity,
        'productData[0][price]': price,
        'productData[0][item_description]': item_description,
      })
      .then(({ data }) => JSON.parse(data as string))
      .catch(({ data }) => JSON.parse(data as string));
  }
}
