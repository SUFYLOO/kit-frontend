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



/**
 * 
 * @export
 * @interface V1RegisterAuthRequest
 */
export interface V1RegisterAuthRequest {
    /**
     * 
     * @type {string}
     * @memberof V1RegisterAuthRequest
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof V1RegisterAuthRequest
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof V1RegisterAuthRequest
     */
    'confirmPassword': string;
    /**
     * 
     * @type {boolean}
     * @memberof V1RegisterAuthRequest
     */
    'web'?: boolean;
}
