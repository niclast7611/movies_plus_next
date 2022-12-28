import { Data } from './Data';

export interface QueryInfo 
    {
        status: string,
        endpointName: string,
        requestId: string,
        originalArgs: string,
        startedTimeStamp: number,
        data: Data,
        fulfilledTimeStamp: number,
        isUninitialized: boolean,
        isLoading: boolean,
        isSuccess: boolean,
        isError: boolean,
        currentData: Data,
        isFetching: boolean
    }

