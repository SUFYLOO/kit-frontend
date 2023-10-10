/* tslint:disable */
/* eslint-disable */
/**
 * Realtime Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LbsAddress } from './lbs-address';

/**
 * 
 * @export
 * @interface V1CreateAddressesRequest
 */
export interface V1CreateAddressesRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateAddressesRequest
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateAddressesRequest
     */
    'usage'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1CreateAddressesRequest
     */
    'prefer'?: boolean;
    /**
     * 
     * @type {LbsAddress}
     * @memberof V1CreateAddressesRequest
     */
    'address': LbsAddress;
    /**
     * 
     * @type {object}
     * @memberof V1CreateAddressesRequest
     */
    'metadata'?: object;
}

