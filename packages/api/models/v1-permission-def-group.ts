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

import { V1PermissionDef } from './v1-permission-def';
import { V1PermissionSide } from './v1-permission-side';

/**
 *
 * @export
 * @interface V1PermissionDefGroup
 */
export interface V1PermissionDefGroup {
  /**
   *
   * @type {string}
   * @memberof V1PermissionDefGroup
   */
  displayName?: string;
  /**
   *
   * @type {V1PermissionSide}
   * @memberof V1PermissionDefGroup
   */
  side?: V1PermissionSide;
  /**
   *
   * @type {number}
   * @memberof V1PermissionDefGroup
   */
  priority?: number;
  /**
   *
   * @type {Array<V1PermissionDef>}
   * @memberof V1PermissionDefGroup
   */
  def?: Array<V1PermissionDef>;
  /**
   *
   * @type {object}
   * @memberof V1PermissionDefGroup
   */
  extra?: object;
}
