import { Injectable } from '@angular/core';
import { Note } from '../grid-data/note';

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

  async triggerAudio(notes: Note[]) {
    await Promise.all(
      notes.map((note) => this.playAudioClip(note.sound))
    );
  }
}
