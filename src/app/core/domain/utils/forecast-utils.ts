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
}