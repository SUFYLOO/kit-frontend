/* tslint:disable */
/* eslint-disable */
/**
 * order/api/order/v1/order.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { V1SubscriptionFilter } from './v1-subscription-filter';

/**
 * 
 * @export
 * @interface V1ListSubscriptionRequest
 */
export interface V1ListSubscriptionRequest {
    /**
     * 
     * @type {number}
     * @memberof V1ListSubscriptionRequest
     */
    'pageOffset'?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListSubscriptionRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1ListSubscriptionRequest
     */
    'search'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1ListSubscriptionRequest
     */
    'sort'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1ListSubscriptionRequest
     */
    'fields'?: string;
    /**
     * 
     * @type {V1SubscriptionFilter}
     * @memberof V1ListSubscriptionRequest
     */
    'filter'?: V1SubscriptionFilter;
}

