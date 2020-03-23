import theaters from './theaters.json';

export default class TheaterService {
    static getTheaters() {
        return theaters ? theaters : [];
    }
}