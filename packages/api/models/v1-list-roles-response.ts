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
import { V1Role } from './v1-role';

/**
 * 
 * @export
 * @interface V1ListRolesResponse
 */
export interface V1ListRolesResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListRolesResponse
     */
    'totalSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof V1ListRolesResponse
     */
    'filterSize'?: number;
    /**
     * 
     * @type {Array<V1Role>}
     * @memberof V1ListRolesResponse
     */
    'items'?: Array<V1Role>;
}

