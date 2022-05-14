import notifySound from '../../heroes/soundNotify.mp3'
import {Howl} from 'howler';

export const SoundMessage = () => {

    const sound = new Howl({
        src: [notifySound],
        autoplay: true
    })

    sound.play()
}
