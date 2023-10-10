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
import { V1PermissionRequirement } from './v1-permission-requirement';

/**
 * 
 * @export
 * @interface V1CreateMenuRequest
 */
export interface V1CreateMenuRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'desc'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'component'?: string;
    /**
     * 
     * @type {Array<V1PermissionRequirement>}
     * @memberof V1CreateMenuRequest
     */
    'requirement'?: Array<V1PermissionRequirement>;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'parent'?: string;
    /**
     * 
     * @type {object}
     * @memberof V1CreateMenuRequest
     */
    'props'?: object;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'fullPath'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1CreateMenuRequest
     */
    'priority'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof V1CreateMenuRequest
     */
    'ignoreAuth'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'icon'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'iframe'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'microApp'?: string;
    /**
     * 
     * @type {object}
     * @memberof V1CreateMenuRequest
     */
    'meta'?: object;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'path'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'redirect'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'microAppName'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'microAppBaseRoute'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateMenuRequest
     */
    'microAppDev'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1CreateMenuRequest
     */
    'hideInMenu'?: boolean;
}

