import { Dates } from './Dates';
import { Results } from './Results';

export interface Data { 
    dates: Dates,
    page: number,
    results: Results,
    total_pages: number,
    total_results: number
    }
