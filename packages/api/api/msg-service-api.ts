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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { GooglerpcStatus } from '../models';
/**
 * MsgServiceApi - axios parameter creator
 * @export
 */
export const MsgServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} service 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        msgServiceQueryPrepared: async (service: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'service' is not null or undefined
            assertParamExists('msgServiceQueryPrepared', 'service', service)
            const localVarPath = `/v1/{service}/dtm/query-prepared`
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MsgServiceApi - functional programming interface
 * @export
 */
export const MsgServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MsgServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} service 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async msgServiceQueryPrepared(service: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.msgServiceQueryPrepared(service, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['MsgServiceApi.msgServiceQueryPrepared']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * MsgServiceApi - factory interface
 * @export
 */
export const MsgServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MsgServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {MsgServiceApiMsgServiceQueryPreparedRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        msgServiceQueryPrepared(requestParameters: MsgServiceApiMsgServiceQueryPreparedRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.msgServiceQueryPrepared(requestParameters.service, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for msgServiceQueryPrepared operation in MsgServiceApi.
 * @export
 * @interface MsgServiceApiMsgServiceQueryPreparedRequest
 */
export interface MsgServiceApiMsgServiceQueryPreparedRequest {
    /**
     * 
     * @type {string}
     * @memberof MsgServiceApiMsgServiceQueryPrepared
     */
    readonly service: string
}

/**
 * MsgServiceApi - object-oriented interface
 * @export
 * @class MsgServiceApi
 * @extends {BaseAPI}
 */
export class MsgServiceApi extends BaseAPI {
    /**
     * 
     * @param {MsgServiceApiMsgServiceQueryPreparedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MsgServiceApi
     */
    public msgServiceQueryPrepared(requestParameters: MsgServiceApiMsgServiceQueryPreparedRequest, options?: AxiosRequestConfig) {
        return MsgServiceApiFp(this.configuration).msgServiceQueryPrepared(requestParameters.service, options).then((request) => request(this.axios, this.basePath));
    }
}

