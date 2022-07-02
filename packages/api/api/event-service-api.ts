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
import { EventServiceEventRequest } from '../models';
// @ts-ignore
import { RpcStatus } from '../models';
/**
 * EventServiceApi - axios parameter creator
 * @export
 */
export const EventServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} service 
         * @param {EventServiceEventRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventServiceEvent: async (service: string, body: EventServiceEventRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'service' is not null or undefined
            assertParamExists('eventServiceEvent', 'service', service)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('eventServiceEvent', 'body', body)
            const localVarPath = `/v1/{service}/proxy/event`
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
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
    }
};

/**
 * EventServiceApi - functional programming interface
 * @export
 */
export const EventServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} service 
         * @param {EventServiceEventRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventServiceEvent(service: string, body: EventServiceEventRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventServiceEvent(service, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventServiceApi - factory interface
 * @export
 */
export const EventServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventServiceApiFp(configuration)
    return {
        /**
         * 
         * @param {string} service 
         * @param {EventServiceEventRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventServiceEvent(service: string, body: EventServiceEventRequest, options?: any): AxiosPromise<object> {
            return localVarFp.eventServiceEvent(service, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for eventServiceEvent operation in EventServiceApi.
 * @export
 * @interface EventServiceApiEventServiceEventRequest
 */
export interface EventServiceApiEventServiceEventRequest {
    /**
     * 
     * @type {string}
     * @memberof EventServiceApiEventServiceEvent
     */
    readonly service: string

    /**
     * 
     * @type {EventServiceEventRequest}
     * @memberof EventServiceApiEventServiceEvent
     */
    readonly body: EventServiceEventRequest
}

/**
 * EventServiceApi - object-oriented interface
 * @export
 * @class EventServiceApi
 * @extends {BaseAPI}
 */
export class EventServiceApi extends BaseAPI {
    /**
     * 
     * @param {EventServiceApiEventServiceEventRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventServiceApi
     */
    public eventServiceEvent(requestParameters: EventServiceApiEventServiceEventRequest, options?: AxiosRequestConfig) {
        return EventServiceApiFp(this.configuration).eventServiceEvent(requestParameters.service, requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
