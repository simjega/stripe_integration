/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SessionStatusResponse } from '../models/SessionStatusResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Create Checkout Session
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createCheckoutSessionCreateCheckoutSessionPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/create-checkout-session',
        });
    }
    /**
     * Session Status
     * @param sessionId
     * @returns SessionStatusResponse Successful Response
     * @throws ApiError
     */
    public static sessionStatusSessionStatusGet(
        sessionId: any,
    ): CancelablePromise<SessionStatusResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/session-status',
            query: {
                'session_id': sessionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
