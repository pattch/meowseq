import { Injectable } from '@angular/core';

const AUDIO_DIR = '../../../assets/';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  async playAudioClip(clip: string) {
    const audio = new Audio();
    audio.src = AUDIO_DIR + clip;
    await audio.load();
    await audio.play();
  }
}
