import { describe, it, expect } from 'vitest';
import { addNoteToGroup, moveNoteToGroup } from './logic';

describe('addNoteToGroup', () => {
    it('should add a note to an existing group', () => {
        const groups = [{ title: 'Default', content: [] }];
        const newNote = { id: 1, title: 'Note 1', body: 'Test note' };

        const updatedGroups = addNoteToGroup(groups, newNote, 'Default');

        expect(updatedGroups[0].content).toHaveLength(1);
        expect(updatedGroups[0].content).toContainEqual(newNote);
    });

    it('should create a new group if the group does not exist', () => {
        const groups = [{ title: 'Default', content: [] }];
        const newNote = { id: 1, title: 'Note 1', body: 'Test note' };

        const updatedGroups = addNoteToGroup(groups, newNote, 'NewGroup');

        expect(updatedGroups).toHaveLength(2);
        expect(updatedGroups[1].title).toBe('NewGroup');
        expect(updatedGroups[1].content).toContainEqual(newNote);
    });
});

describe('moveNoteToGroup', () => {
    it('should move a note from one group to another', () => {
        const groups = [
            { title: 'Default', content: [{ id: 1, title: 'Note 1', body: 'Test note' }] },
            { title: 'Archive', content: [] },
        ];

        const updatedGroups = moveNoteToGroup(groups, 1, 'Default', 'Archive');

        expect(updatedGroups[0].content).toHaveLength(0);
        expect(updatedGroups[1].content).toHaveLength(1);
        expect(updatedGroups[1].content[0].id).toBe(1);
    });

    it('should not move a note if it does not exist in the source group', () => {
        const groups = [
            { title: 'Default', content: [] },
            { title: 'Archive', content: [] },
        ];

        const updatedGroups = moveNoteToGroup(groups, 1, 'Default', 'Archive');

        expect(updatedGroups[0].content).toHaveLength(0);
        expect(updatedGroups[1].content).toHaveLength(0);
    });
});
