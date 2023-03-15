import { Movie } from "./movie"

export interface ResponseMovie {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}
