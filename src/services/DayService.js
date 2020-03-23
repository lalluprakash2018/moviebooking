import days from './days.json';

export default class DayService {
    static getDays() {
        return days ? days : [];
    }
}