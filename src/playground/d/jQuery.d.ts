declare global {
    function $(queryStr: string): HTMLElement;
    namespace $ {
        function ajax(url: string, config: RequestConfig): any;
        interface RequestConfig {
            method: Method;
        }
        type Method = 'get' | 'post' | 'GET' | 'POST';
    }
}

export interface GIF {}
