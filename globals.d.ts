declare const __SERVER__: boolean;

// src/global.d.ts
interface Window {
    __INITIAL_DATA__?: any;
    __IS__SSR__?: boolean;
    _CILENT_FETCHED_?: boolean;
}