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


import { V1Gender } from './v1-gender';

/**
 * 
 * @export
 * @interface V1UpdateProfileRequest
 */
export interface V1UpdateProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateProfileRequest
     */
    'username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1UpdateProfileRequest
     */
    'name'?: string | null;
    /**
     * 
     * @type {V1Gender}
     * @memberof V1UpdateProfileRequest
     */
    'gender'?: V1Gender;
}

