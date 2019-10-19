import {Note} from './note';

export class GridData {
    constructor(readonly patternLength = 8,
                readonly scale = ['A', 'B', 'C']) {}

    createGrid(): ReadonlyArray<ReadonlyArray<Note>> {
        const rows: Array<ReadonlyArray<Note>> = [];
        for (const note of this.scale) {
            const row: Note[] = [];
            for (let i = 0; i < this.patternLength; i++) {
                row.push({
                    active: false,
                    sound: note,
                });
            }
            rows.push(row);
        }
        return rows;
    }
}
