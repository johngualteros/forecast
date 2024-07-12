import { WeatherOption } from "../models/weather-forecast.model";

export class ForecastUtils {
    static greetClient() {
        const today = new Date()
        const currentHours = today.getHours()

        if (currentHours < 12) {
            return 'Good Morning';
        } else if (currentHours < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }

    static getPossibleWeatherForecast(): WeatherOption[] {
        return [
            {
                name: 'District of Columbia Forecast',
                acronym: 'LWX'
            },
            {
                name: 'Kansas Forecast',
                acronym: 'TOP'
            }
        ]
    }
}