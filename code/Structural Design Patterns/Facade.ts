// Subsystem 1
class AudioPlayer {
    play(): string {
        return "Playing audio";
    }
}

// Subsystem 2
class VideoPlayer {
    play(): string {
        return "Playing video";
    }
}

// Subsystem 3
class Projector {
    display(): string {
        return "Projector displaying content";
    }
}

// Facade
class MultimediaFacade {
    private audioPlayer: AudioPlayer;
    private videoPlayer: VideoPlayer;
    private projector: Projector;

    constructor(audioPlayer: AudioPlayer, videoPlayer: VideoPlayer, projector: Projector) {
        this.audioPlayer = audioPlayer;
        this.videoPlayer = videoPlayer;
        this.projector = projector;
    }

    startMovie(): string {
        const audio = this.audioPlayer.play();
        const video = this.videoPlayer.play();
        const display = this.projector.display();

        return `${audio}\n${video}\n${display}`;
    }

    stopMovie(): string {
        return "Stopping multimedia playback";
    }
}

// Example usage
const audioPlayer = new AudioPlayer();
const videoPlayer = new VideoPlayer();
const projector = new Projector();

const multimediaFacade = new MultimediaFacade(audioPlayer, videoPlayer, projector);

console.log(multimediaFacade.startMovie()); // Playing audio, Playing video, Projector displaying content
console.log(multimediaFacade.stopMovie()); // Stopping multimedia playback