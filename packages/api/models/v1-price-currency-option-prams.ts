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
import { V1PriceCurrencyOptionTier } from './v1-price-currency-option-tier';

/**
 * 
 * @export
 * @interface V1PriceCurrencyOptionPrams
 */
export interface V1PriceCurrencyOptionPrams {
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionPrams
     */
    'currencyCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionPrams
     */
    'defaultAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionPrams
     */
    'discountedAmount'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PriceCurrencyOptionPrams
     */
    'discountText'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1PriceCurrencyOptionPrams
     */
    'denyMoreDiscounts'?: boolean;
    /**
     * 
     * @type {Array<V1PriceCurrencyOptionTier>}
     * @memberof V1PriceCurrencyOptionPrams
     */
    'tiers'?: Array<V1PriceCurrencyOptionTier>;
}
