import { useCallback, useEffect, useState } from "react";

export interface apiResponse {
    status: number;
    statusText: string;
    data: any;
    error: any;
    loading: boolean;
}

export const useFetchApi = (url: string): apiResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>("");
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    const getApiData = useCallback(async () => {
        //setLoading(true);
        try {
            const response = await fetch(url);
            const responseJson = await response.json();

            setStatus(response.status);
            setStatusText(response.statusText);
            setData(responseJson);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getApiData();
        // eslint-disable-next-line
    }, []);

    return { status, statusText, data, error, loading };
};
