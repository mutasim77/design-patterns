// Subject interface
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Concrete Subject: WeatherStation
class WeatherStation implements Subject {
    private temperature: number = 0;
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature;
        this.notifyObservers();
    }
}

// Observer interface
interface Observer {
    update(temperature: number): void;
}

// Concrete Observer: TemperatureDisplay
class TemperatureDisplay implements Observer {
    private temperature: number = 0;

    update(temperature: number): void {
        this.temperature = temperature;
        this.display();
    }

    display(): void {
        console.log(`Temperature Display: ${this.temperature}°C`);
    }
}

// Client Code
const weatherStation = new WeatherStation();

const display1 = new TemperatureDisplay();
const display2 = new TemperatureDisplay();

weatherStation.addObserver(display1);
weatherStation.addObserver(display2);

weatherStation.setTemperature(25);
// Output:
// Temperature Display: 25°C
// Temperature Display: 25°C