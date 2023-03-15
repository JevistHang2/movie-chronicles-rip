import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export class IAppConfig {
    name!: string;
    apiUrl!: string;
    imageBaseUrl!: string;
    apiKey!: string;
};

export const AppConfig: IAppConfig = {
    name: environment.name,
    apiUrl: environment.apiUrl,
    imageBaseUrl: environment.imageBaseUrl,
    apiKey: environment.apiKey
};