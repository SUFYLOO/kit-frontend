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
import { V1UpdateSubjectPermissionAcl } from './v1-update-subject-permission-acl';

/**
 * 
 * @export
 * @interface V1UpdateSubjectPermissionRequest
 */
export interface V1UpdateSubjectPermissionRequest {
    /**
     * 
     * @type {string}
     * @memberof V1UpdateSubjectPermissionRequest
     */
    'subject': string;
    /**
     * 
     * @type {Array<V1UpdateSubjectPermissionAcl>}
     * @memberof V1UpdateSubjectPermissionRequest
     */
    'acl'?: Array<V1UpdateSubjectPermissionAcl>;
}

