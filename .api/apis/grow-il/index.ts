import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'grow-il/1.0.0 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Create payment &save token
   *
   */
  postApiLightServer10Createpaymentprocess(body?: types.PostApiLightServer10CreatepaymentprocessBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10CreatepaymentprocessResponse200>> {
    return this.core.fetch('/api/light/server/1.0/createPaymentProcess', 'post', body);
  }

  /**
   * Payment Request
   *
   */
  postApiLightServer10Createfarpaymentrequest(body?: types.PostApiLightServer10CreatefarpaymentrequestBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10CreatefarpaymentrequestResponse200>> {
    return this.core.fetch('/api/light/server/1.0/createFarPaymentRequest', 'post', body);
  }

  /**
   * Approve Transaction
   *
   */
  postApiLightServer10Approvetransaction(body?: types.PostApiLightServer10ApprovetransactionBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10ApprovetransactionResponse200>> {
    return this.core.fetch('/api/light/server/1.0/approveTransaction', 'post', body);
  }

  /**
   * Update Recurring Payment
   *
   */
  postApiLightServer10Updatedirectdebit(body?: types.PostApiLightServer10UpdatedirectdebitBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10UpdatedirectdebitResponse200>> {
    return this.core.fetch('/api/light/server/1.0/updateDirectDebit', 'post', body);
  }

  /**
   * Settle Suspended Transaction
   *
   */
  postApiLightServer10Settlesuspendedtransaction(body?: types.PostApiLightServer10SettlesuspendedtransactionBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10SettlesuspendedtransactionResponse200>> {
    return this.core.fetch('/api/light/server/1.0/settleSuspendedTransaction', 'post', body);
  }

  /**
   * Further Payment -Premium Recurring By Token
   *
   */
  postApiLightServer10Createtransactionwithtoken(body?: types.PostApiLightServer10CreatetransactionwithtokenBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10CreatetransactionwithtokenResponse200>> {
    return this.core.fetch('/api/light/server/1.0/createTransactionWithToken', 'post', body);
  }

  /**
   * getTokenTransactionsByExternalIdentifiers
   *
   */
  postApiLightServer10Gettokentransactionsbyexternalidentifiers(body?: types.PostApiLightServer10GettokentransactionsbyexternalidentifiersBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10GettokentransactionsbyexternalidentifiersResponse200>> {
    return this.core.fetch('/api/light/server/1.0/getTokenTransactionsByExternalIdentifiers/', 'post', body);
  }

  /**
   * Get Transaction Info
   *
   */
  postApiLightServer10Gettransactioninfo(body?: types.PostApiLightServer10GettransactioninfoBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10GettransactioninfoResponse200>> {
    return this.core.fetch('/api/light/server/1.0/getTransactionInfo', 'post', body);
  }

  /**
   * Get Payment Process Info
   *
   */
  postApiLightServer10Getpaymentprocessinfo(body?: types.PostApiLightServer10GetpaymentprocessinfoBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10GetpaymentprocessinfoResponse200>> {
    return this.core.fetch('/api/light/server/1.0/getPaymentProcessInfo', 'post', body);
  }

  /**
   * Refund Transaction
   *
   */
  postApiLightServer10Refundtransaction(body?: types.PostApiLightServer10RefundtransactionBodyParam): Promise<FetchResponse<200, types.PostApiLightServer10RefundtransactionResponse200>> {
    return this.core.fetch('/api/light/server/1.0/refundTransaction', 'post', body);
  }

  /**
   * Cancel Bit Transaction
   *
   */
  postApiLightAndriod10Cancelbittransaction(body?: types.PostApiLightAndriod10CancelbittransactionBodyParam): Promise<FetchResponse<200, types.PostApiLightAndriod10CancelbittransactionResponse200>> {
    return this.core.fetch('/api/light/andriod/1.0/cancelBitTransaction/', 'post', body);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { PostApiLightAndriod10CancelbittransactionBodyParam, PostApiLightAndriod10CancelbittransactionResponse200, PostApiLightServer10ApprovetransactionBodyParam, PostApiLightServer10ApprovetransactionResponse200, PostApiLightServer10CreatefarpaymentrequestBodyParam, PostApiLightServer10CreatefarpaymentrequestResponse200, PostApiLightServer10CreatepaymentprocessBodyParam, PostApiLightServer10CreatepaymentprocessResponse200, PostApiLightServer10CreatetransactionwithtokenBodyParam, PostApiLightServer10CreatetransactionwithtokenResponse200, PostApiLightServer10GetpaymentprocessinfoBodyParam, PostApiLightServer10GetpaymentprocessinfoResponse200, PostApiLightServer10GettokentransactionsbyexternalidentifiersBodyParam, PostApiLightServer10GettokentransactionsbyexternalidentifiersResponse200, PostApiLightServer10GettransactioninfoBodyParam, PostApiLightServer10GettransactioninfoResponse200, PostApiLightServer10RefundtransactionBodyParam, PostApiLightServer10RefundtransactionResponse200, PostApiLightServer10SettlesuspendedtransactionBodyParam, PostApiLightServer10SettlesuspendedtransactionResponse200, PostApiLightServer10UpdatedirectdebitBodyParam, PostApiLightServer10UpdatedirectdebitResponse200 } from './types';
