/* tslint:disable */
/* eslint-disable */
/**
 * Saas Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { V1PermissionRequirement } from './v1-permission-requirement';

/**
 * 
 * @export
 * @interface V1UpdateMenu
 */
export interface V1UpdateMenu {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'desc'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'component'?: string;
    /**
     * 
     * @type {Array<V1PermissionRequirement>}
     * @memberof V1UpdateMenu
     */
    'requirement'?: Array<V1PermissionRequirement>;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'parent'?: string;
    /**
     * 
     * @type {object}
     * @memberof V1UpdateMenu
     */
    'props'?: object;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'fullPath'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1UpdateMenu
     */
    'priority'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof V1UpdateMenu
     */
    'ignoreAuth'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'icon'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'iframe'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'microApp'?: string;
    /**
     * 
     * @type {object}
     * @memberof V1UpdateMenu
     */
    'meta'?: object;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'path'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'redirect'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'microAppName'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'microAppBaseRoute'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateMenu
     */
    'microAppDev'?: string;
}

