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
 * @interface V1CreateUserRequest
 */
export interface V1CreateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'username': string | null;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'phone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'confirmPassword'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'birthday'?: string | null;
    /**
     * 
     * @type {V1Gender}
     * @memberof V1CreateUserRequest
     */
    'gender'?: V1Gender;
    /**
     * 
     * @type {string}
     * @memberof V1CreateUserRequest
     */
    'avatar'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1CreateUserRequest
     */
    'rolesId'?: Array<string>;
}

