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
import { DataDynamicValue } from './data-dynamic-value';

/**
 * 
 * @export
 * @interface V1UpdateSettings
 */
export interface V1UpdateSettings {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateSettings
     */
    'key'?: string;
    /**
     * 
     * @type {DataDynamicValue}
     * @memberof V1UpdateSettings
     */
    'value'?: DataDynamicValue;
    /**
     * 
     * @type {boolean}
     * @memberof V1UpdateSettings
     */
    'reset'?: boolean;
}

