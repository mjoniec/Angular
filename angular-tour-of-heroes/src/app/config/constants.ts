import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Constants {
    public readonly API_ENDPOINT: string = 'http://localhost:3000/url';
    public readonly API_MOCK_ENDPOINT: string = 'http://localhost:3000/mock-url';
    public readonly API_ENDPOINT_ASYNC: string = 'http://localhost:3000/async';
    public readonly API_ENDPOINT_PARALLEL2: string = 'http://localhost:3000/parallel';
}