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
import { V1Effect } from './v1-effect';

/**
 * 
 * @export
 * @interface V1Permission
 */
export interface V1Permission {
    /**
     * 
     * @type {string}
     * @memberof V1Permission
     */
    'namespace'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Permission
     */
    'resource'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Permission
     */
    'action'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Permission
     */
    'subject'?: string;
    /**
     * 
     * @type {V1Effect}
     * @memberof V1Permission
     */
    'effect'?: V1Effect;
    /**
     * 
     * @type {string}
     * @memberof V1Permission
     */
    'tenantId'?: string;
}



