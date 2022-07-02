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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { RpcStatus } from '../models';
// @ts-ignore
import { V1CreateAddressesRequest } from '../models';
// @ts-ignore
import { V1GetAddressesReply } from '../models';
// @ts-ignore
import { V1GetProfileResponse } from '../models';
// @ts-ignore
import { V1GetSettingsResponse } from '../models';
// @ts-ignore
import { V1UpdateAddressesRequest } from '../models';
// @ts-ignore
import { V1UpdateProfileRequest } from '../models';
// @ts-ignore
import { V1UpdateSettingsRequest } from '../models';
// @ts-ignore
import { V1UpdateSettingsResponse } from '../models';
/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {V1CreateAddressesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountCreateAddresses: async (body: V1CreateAddressesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('accountCreateAddresses', 'body', body)
            const localVarPath = `/v1/account/addresses`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountDeleteAddresses: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('accountDeleteAddresses', 'id', id)
            const localVarPath = `/v1/account/addresses`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountGetAddresses: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/account/addresses`;
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
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountGetProfile: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/account/profile`;
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
        /**
         * 
         * @param {string} [fields] 
         * @param {string} [filterKey$eq] 
         * @param {string} [filterKey$neq] 
         * @param {string} [filterKey$contains] 
         * @param {string} [filterKey$startsWith] 
         * @param {string} [filterKey$nstartsWith] 
         * @param {string} [filterKey$endsWith] 
         * @param {string} [filterKey$nendsWith] 
         * @param {Array<string>} [filterKey$in] 
         * @param {Array<string>} [filterKey$nin] 
         * @param {boolean} [filterKey$null] 
         * @param {boolean} [filterKey$nnull] 
         * @param {boolean} [filterKey$empty] 
         * @param {boolean} [filterKey$nempty] 
         * @param {string} [filterKey$like] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountGetSettings: async (fields?: string, filterKey$eq?: string, filterKey$neq?: string, filterKey$contains?: string, filterKey$startsWith?: string, filterKey$nstartsWith?: string, filterKey$endsWith?: string, filterKey$nendsWith?: string, filterKey$in?: Array<string>, filterKey$nin?: Array<string>, filterKey$null?: boolean, filterKey$nnull?: boolean, filterKey$empty?: boolean, filterKey$nempty?: boolean, filterKey$like?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/account/settings`;
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

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (filterKey$eq !== undefined) {
                localVarQueryParameter['filter.key.$eq'] = filterKey$eq;
            }

            if (filterKey$neq !== undefined) {
                localVarQueryParameter['filter.key.$neq'] = filterKey$neq;
            }

            if (filterKey$contains !== undefined) {
                localVarQueryParameter['filter.key.$contains'] = filterKey$contains;
            }

            if (filterKey$startsWith !== undefined) {
                localVarQueryParameter['filter.key.$starts_with'] = filterKey$startsWith;
            }

            if (filterKey$nstartsWith !== undefined) {
                localVarQueryParameter['filter.key.$nstarts_with'] = filterKey$nstartsWith;
            }

            if (filterKey$endsWith !== undefined) {
                localVarQueryParameter['filter.key.$ends_with'] = filterKey$endsWith;
            }

            if (filterKey$nendsWith !== undefined) {
                localVarQueryParameter['filter.key.$nends_with'] = filterKey$nendsWith;
            }

            if (filterKey$in) {
                localVarQueryParameter['filter.key.$in'] = filterKey$in;
            }

            if (filterKey$nin) {
                localVarQueryParameter['filter.key.$nin'] = filterKey$nin;
            }

            if (filterKey$null !== undefined) {
                localVarQueryParameter['filter.key.$null'] = filterKey$null;
            }

            if (filterKey$nnull !== undefined) {
                localVarQueryParameter['filter.key.$nnull'] = filterKey$nnull;
            }

            if (filterKey$empty !== undefined) {
                localVarQueryParameter['filter.key.$empty'] = filterKey$empty;
            }

            if (filterKey$nempty !== undefined) {
                localVarQueryParameter['filter.key.$nempty'] = filterKey$nempty;
            }

            if (filterKey$like !== undefined) {
                localVarQueryParameter['filter.key.$like'] = filterKey$like;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} addressId 
         * @param {V1UpdateAddressesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdateAddresses: async (addressId: string, body: V1UpdateAddressesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'addressId' is not null or undefined
            assertParamExists('accountUpdateAddresses', 'addressId', addressId)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('accountUpdateAddresses', 'body', body)
            const localVarPath = `/v1/account/address/{address.id}`
                .replace(`{${"address.id"}}`, encodeURIComponent(String(addressId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary UpdateProfile  Avatar: POST form file /v1/account/avatar
         * @param {V1UpdateProfileRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdateProfile: async (body: V1UpdateProfileRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('accountUpdateProfile', 'body', body)
            const localVarPath = `/v1/account/profile`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {V1UpdateSettingsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdateSettings: async (body: V1UpdateSettingsRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('accountUpdateSettings', 'body', body)
            const localVarPath = `/v1/account/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {V1CreateAddressesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountCreateAddresses(body: V1CreateAddressesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountCreateAddresses(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountDeleteAddresses(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountDeleteAddresses(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountGetAddresses(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1GetAddressesReply>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountGetAddresses(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountGetProfile(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1GetProfileResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountGetProfile(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [fields] 
         * @param {string} [filterKey$eq] 
         * @param {string} [filterKey$neq] 
         * @param {string} [filterKey$contains] 
         * @param {string} [filterKey$startsWith] 
         * @param {string} [filterKey$nstartsWith] 
         * @param {string} [filterKey$endsWith] 
         * @param {string} [filterKey$nendsWith] 
         * @param {Array<string>} [filterKey$in] 
         * @param {Array<string>} [filterKey$nin] 
         * @param {boolean} [filterKey$null] 
         * @param {boolean} [filterKey$nnull] 
         * @param {boolean} [filterKey$empty] 
         * @param {boolean} [filterKey$nempty] 
         * @param {string} [filterKey$like] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountGetSettings(fields?: string, filterKey$eq?: string, filterKey$neq?: string, filterKey$contains?: string, filterKey$startsWith?: string, filterKey$nstartsWith?: string, filterKey$endsWith?: string, filterKey$nendsWith?: string, filterKey$in?: Array<string>, filterKey$nin?: Array<string>, filterKey$null?: boolean, filterKey$nnull?: boolean, filterKey$empty?: boolean, filterKey$nempty?: boolean, filterKey$like?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1GetSettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountGetSettings(fields, filterKey$eq, filterKey$neq, filterKey$contains, filterKey$startsWith, filterKey$nstartsWith, filterKey$endsWith, filterKey$nendsWith, filterKey$in, filterKey$nin, filterKey$null, filterKey$nnull, filterKey$empty, filterKey$nempty, filterKey$like, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} addressId 
         * @param {V1UpdateAddressesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountUpdateAddresses(addressId: string, body: V1UpdateAddressesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountUpdateAddresses(addressId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary UpdateProfile  Avatar: POST form file /v1/account/avatar
         * @param {V1UpdateProfileRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountUpdateProfile(body: V1UpdateProfileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountUpdateProfile(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {V1UpdateSettingsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountUpdateSettings(body: V1UpdateSettingsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<V1UpdateSettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountUpdateSettings(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountApiFp(configuration)
    return {
        /**
         * 
         * @param {V1CreateAddressesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountCreateAddresses(body: V1CreateAddressesRequest, options?: any): AxiosPromise<object> {
            return localVarFp.accountCreateAddresses(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountDeleteAddresses(id: string, options?: any): AxiosPromise<object> {
            return localVarFp.accountDeleteAddresses(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountGetAddresses(options?: any): AxiosPromise<V1GetAddressesReply> {
            return localVarFp.accountGetAddresses(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountGetProfile(options?: any): AxiosPromise<V1GetProfileResponse> {
            return localVarFp.accountGetProfile(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [fields] 
         * @param {string} [filterKey$eq] 
         * @param {string} [filterKey$neq] 
         * @param {string} [filterKey$contains] 
         * @param {string} [filterKey$startsWith] 
         * @param {string} [filterKey$nstartsWith] 
         * @param {string} [filterKey$endsWith] 
         * @param {string} [filterKey$nendsWith] 
         * @param {Array<string>} [filterKey$in] 
         * @param {Array<string>} [filterKey$nin] 
         * @param {boolean} [filterKey$null] 
         * @param {boolean} [filterKey$nnull] 
         * @param {boolean} [filterKey$empty] 
         * @param {boolean} [filterKey$nempty] 
         * @param {string} [filterKey$like] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountGetSettings(fields?: string, filterKey$eq?: string, filterKey$neq?: string, filterKey$contains?: string, filterKey$startsWith?: string, filterKey$nstartsWith?: string, filterKey$endsWith?: string, filterKey$nendsWith?: string, filterKey$in?: Array<string>, filterKey$nin?: Array<string>, filterKey$null?: boolean, filterKey$nnull?: boolean, filterKey$empty?: boolean, filterKey$nempty?: boolean, filterKey$like?: string, options?: any): AxiosPromise<V1GetSettingsResponse> {
            return localVarFp.accountGetSettings(fields, filterKey$eq, filterKey$neq, filterKey$contains, filterKey$startsWith, filterKey$nstartsWith, filterKey$endsWith, filterKey$nendsWith, filterKey$in, filterKey$nin, filterKey$null, filterKey$nnull, filterKey$empty, filterKey$nempty, filterKey$like, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} addressId 
         * @param {V1UpdateAddressesRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdateAddresses(addressId: string, body: V1UpdateAddressesRequest, options?: any): AxiosPromise<object> {
            return localVarFp.accountUpdateAddresses(addressId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary UpdateProfile  Avatar: POST form file /v1/account/avatar
         * @param {V1UpdateProfileRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdateProfile(body: V1UpdateProfileRequest, options?: any): AxiosPromise<object> {
            return localVarFp.accountUpdateProfile(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {V1UpdateSettingsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountUpdateSettings(body: V1UpdateSettingsRequest, options?: any): AxiosPromise<V1UpdateSettingsResponse> {
            return localVarFp.accountUpdateSettings(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for accountCreateAddresses operation in AccountApi.
 * @export
 * @interface AccountApiAccountCreateAddressesRequest
 */
export interface AccountApiAccountCreateAddressesRequest {
    /**
     * 
     * @type {V1CreateAddressesRequest}
     * @memberof AccountApiAccountCreateAddresses
     */
    readonly body: V1CreateAddressesRequest
}

/**
 * Request parameters for accountDeleteAddresses operation in AccountApi.
 * @export
 * @interface AccountApiAccountDeleteAddressesRequest
 */
export interface AccountApiAccountDeleteAddressesRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountDeleteAddresses
     */
    readonly id: string
}

/**
 * Request parameters for accountGetSettings operation in AccountApi.
 * @export
 * @interface AccountApiAccountGetSettingsRequest
 */
export interface AccountApiAccountGetSettingsRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly fields?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$eq?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$neq?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$contains?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$startsWith?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$nstartsWith?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$endsWith?: string

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$nendsWith?: string

    /**
     * 
     * @type {Array<string>}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$in?: Array<string>

    /**
     * 
     * @type {Array<string>}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$nin?: Array<string>

    /**
     * 
     * @type {boolean}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$null?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$nnull?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$empty?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$nempty?: boolean

    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountGetSettings
     */
    readonly filterKey$like?: string
}

/**
 * Request parameters for accountUpdateAddresses operation in AccountApi.
 * @export
 * @interface AccountApiAccountUpdateAddressesRequest
 */
export interface AccountApiAccountUpdateAddressesRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountApiAccountUpdateAddresses
     */
    readonly addressId: string

    /**
     * 
     * @type {V1UpdateAddressesRequest}
     * @memberof AccountApiAccountUpdateAddresses
     */
    readonly body: V1UpdateAddressesRequest
}

/**
 * Request parameters for accountUpdateProfile operation in AccountApi.
 * @export
 * @interface AccountApiAccountUpdateProfileRequest
 */
export interface AccountApiAccountUpdateProfileRequest {
    /**
     * 
     * @type {V1UpdateProfileRequest}
     * @memberof AccountApiAccountUpdateProfile
     */
    readonly body: V1UpdateProfileRequest
}

/**
 * Request parameters for accountUpdateSettings operation in AccountApi.
 * @export
 * @interface AccountApiAccountUpdateSettingsRequest
 */
export interface AccountApiAccountUpdateSettingsRequest {
    /**
     * 
     * @type {V1UpdateSettingsRequest}
     * @memberof AccountApiAccountUpdateSettings
     */
    readonly body: V1UpdateSettingsRequest
}

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI {
    /**
     * 
     * @param {AccountApiAccountCreateAddressesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountCreateAddresses(requestParameters: AccountApiAccountCreateAddressesRequest, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountCreateAddresses(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AccountApiAccountDeleteAddressesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountDeleteAddresses(requestParameters: AccountApiAccountDeleteAddressesRequest, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountDeleteAddresses(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountGetAddresses(options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountGetAddresses(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountGetProfile(options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountGetProfile(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AccountApiAccountGetSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountGetSettings(requestParameters: AccountApiAccountGetSettingsRequest = {}, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountGetSettings(requestParameters.fields, requestParameters.filterKey$eq, requestParameters.filterKey$neq, requestParameters.filterKey$contains, requestParameters.filterKey$startsWith, requestParameters.filterKey$nstartsWith, requestParameters.filterKey$endsWith, requestParameters.filterKey$nendsWith, requestParameters.filterKey$in, requestParameters.filterKey$nin, requestParameters.filterKey$null, requestParameters.filterKey$nnull, requestParameters.filterKey$empty, requestParameters.filterKey$nempty, requestParameters.filterKey$like, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AccountApiAccountUpdateAddressesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountUpdateAddresses(requestParameters: AccountApiAccountUpdateAddressesRequest, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountUpdateAddresses(requestParameters.addressId, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary UpdateProfile  Avatar: POST form file /v1/account/avatar
     * @param {AccountApiAccountUpdateProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountUpdateProfile(requestParameters: AccountApiAccountUpdateProfileRequest, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountUpdateProfile(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AccountApiAccountUpdateSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountUpdateSettings(requestParameters: AccountApiAccountUpdateSettingsRequest, options?: AxiosRequestConfig) {
        return AccountApiFp(this.configuration).accountUpdateSettings(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
