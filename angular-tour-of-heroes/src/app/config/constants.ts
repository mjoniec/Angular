import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Constants {
    public readonly API_ENDPOINT: string = 'http://localhost:3000/url';
    public readonly API_MOCK_ENDPOINT: string = 'http://localhost:3000/mock-url';
    public readonly API_ENDPOINT_PARALLEL: string = 'http://localhost:3000/parallel';
}