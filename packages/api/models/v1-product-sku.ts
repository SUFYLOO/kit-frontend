/* tslint:disable */
/* eslint-disable */
/**
 * order/api/order/v1/order.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { V1Keyword } from './v1-keyword';
// May contain unused imports in some cases
// @ts-ignore
import { V1Price } from './v1-price';
// May contain unused imports in some cases
// @ts-ignore
import { V1ProductMedia } from './v1-product-media';
// May contain unused imports in some cases
// @ts-ignore
import { V1Stock } from './v1-stock';

/**
 * 
 * @export
 * @interface V1ProductSku
 */
export interface V1ProductSku {
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'title'?: string;
    /**
     * 
     * @type {V1ProductMedia}
     * @memberof V1ProductSku
     */
    'mainPic'?: V1ProductMedia;
    /**
     * 
     * @type {Array<V1ProductMedia>}
     * @memberof V1ProductSku
     */
    'medias'?: Array<V1ProductMedia>;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'barcode'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'saleableFrom'?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ProductSku
     */
    'saleableTo'?: string;
    /**
     * 
     * @type {Array<V1Keyword>}
     * @memberof V1ProductSku
     */
    'keywords'?: Array<V1Keyword>;
    /**
     * 
     * @type {Array<V1Price>}
     * @memberof V1ProductSku
     */
    'prices'?: Array<V1Price>;
    /**
     * 
     * @type {Array<V1Stock>}
     * @memberof V1ProductSku
     */
    'stocks'?: Array<V1Stock>;
}
