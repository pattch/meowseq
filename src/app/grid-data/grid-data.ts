import {Note} from './note';
import { GridRow } from './grid-row';

export type Grid = ReadonlyArray<GridRow>;

export class GridData {
    readonly rows: ReadonlyArray<GridRow>;

    constructor(readonly patternLength = 8,
                readonly scale = ['A', 'B', 'C']) {
                    this.rows = this.createRows();
                }

    private createRows(): Grid {
        const rows: GridRow[] = [];
        for (const note of this.scale) {
            const notes: Note[] = [];
            for (let i = 0; i < this.patternLength; i++) {
                notes.push({
                    active: false,
                    sound: note,
                });
            }
            rows.push({
                patternLength: this.patternLength,
                sound: note,
                notes
            });
        }
        return rows;
    }
}
