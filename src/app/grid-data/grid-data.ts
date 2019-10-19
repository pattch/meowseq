import {Note} from './note';

export type Grid = ReadonlyArray<ReadonlyArray<Note>>;

export class GridData {
    readonly grid: Grid;

    constructor(readonly patternLength = 8,
                readonly scale = ['A', 'B', 'C']) {
                    this.grid = this.createGrid();
                }

    private createGrid(): ReadonlyArray<ReadonlyArray<Note>> {
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
