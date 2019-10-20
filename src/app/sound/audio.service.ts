import { Injectable } from '@angular/core';
import { Note } from '../grid-data/note';

const AUDIO_DIR = '../../../assets/';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  constructor() { }

  clips: any = {};

  async playAudioClip(clip: string) {
    const audio = this.clips[clip];
    if (audio.paused) {
      await audio.play();
    } else {
      audio.currentTime = 0;
    }
  }

  async triggerAudio(notes: Note[]) {
    await Promise.all(
      notes.map((note) => this.playAudioClip(note.sound))
    );
  }

  async loadAudioClips(clips: string[]) {
    for (const clip of clips) {
      const audio = new Audio();
      audio.src = AUDIO_DIR + clip;
      await audio.load();
      this.clips[clip] = audio;
    }
  }
}
