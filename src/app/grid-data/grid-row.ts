import { Note } from './note';

export interface GridRow {
    patternLength: number;
    sound: string;
    notes: Note[];
}
