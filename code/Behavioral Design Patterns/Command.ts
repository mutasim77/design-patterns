// Command interface
interface Command {
    execute(): void;
}

// Concrete Command 1: Light On
class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }
}

// Concrete Command 2: Light Off
class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }
}

// Receiver: Light
class Light {
    turnOn(): void {
        console.log("Light is ON");
    }

    turnOff(): void {
        console.log("Light is OFF");
    }
}

// Invoker: Remote Control
class RemoteControl {
    private command: Command | null = null;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
        if (this.command) {
            this.command.execute();
        } else {
            console.log("No command assigned.");
        }
    }
}

// Client Code
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOnCommand);
remote.pressButton(); // Light is ON

remote.setCommand(lightOffCommand);
remote.pressButton(); // Light is OFF