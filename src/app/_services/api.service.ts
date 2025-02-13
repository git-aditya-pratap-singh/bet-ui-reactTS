import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import environmentURL from "../_environments/environments";

// interface RequestParams {
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
//     url: string;
//     data?: any;
//     params?: any;
// }

class ApiService {

    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: environmentURL.apiUrl,
            headers: {
                'Accept': 'application/json, multipart/form-data',
            },
        });
    }

    private async request<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, data: any = null, params: any = null): Promise<T> {
        try {
            const config: AxiosRequestConfig = {
                method,
                url,
                data,
                params,
            };
            const response: AxiosResponse<T> = await this.api.request(config);
            return response.data;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async get<T>(url: string, params: any = null): Promise<T> {
        return this.request<T>('GET', url, null, params);
    }

    async post<T>(url: string, data: any): Promise<T> {
        return this.request<T>('POST', url, data, null);
    }

    private handleError(error: any): void {
        console.error('API Error:', error);
    }
}

export default ApiService;
