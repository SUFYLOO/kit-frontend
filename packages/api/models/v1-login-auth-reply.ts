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



/**
 * 
 * @export
 * @interface V1LoginAuthReply
 */
export interface V1LoginAuthReply {
    /**
     * 
     * @type {string}
     * @memberof V1LoginAuthReply
     */
    'accessToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1LoginAuthReply
     */
    'tokenType'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1LoginAuthReply
     */
    'expires'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1LoginAuthReply
     */
    'refreshToken'?: string;
    /**
     * 
     * @type {number}
     * @memberof V1LoginAuthReply
     */
    'expiresIn'?: number;
    /**
     * 
     * @type {string}
     * @memberof V1LoginAuthReply
     */
    'redirect'?: string;
}

