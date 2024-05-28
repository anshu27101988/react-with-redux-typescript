import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

export const useAxiosApi = <T>(url: string, params?: AxiosRequestConfig) => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>("");
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);

    const getAxiosApiData = useCallback(async () => {
        try {
            setLoading(true);
            const response: AxiosResponse<T> = await axios.get(url, params);
            setStatus(response.status);
            setStatusText(response.statusText);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url, params]);
    useEffect(() => {
        getAxiosApiData();
        // eslint-disable-next-line
    }, []);
    return { status, statusText, data, error, loading };
};
