import { describe, it, expect } from 'vitest';
import {
    defaultGroup,
    createNote,
    editNote,
    deleteNote,
    restoreNoteFromTrash,
    createGroup,
    editGroup,
    moveNoteBetweenGroups,
    deleteGroup,
    displayNotesByGroup,
    displayRecentNotes,
    displaySearchedNotes,
    sortNotes,
    addNoteToArchived,
    addNoteToFavorites,
} from './logic';

// Mock data for testing
const sampleNote = {
    id: 1,
    title: 'Sample Note',
    body: 'This is a sample note.',
    createdAt: new Date().toISOString(),
    archived: false,
};

const sampleGroups = [
    { groupId: 10, groupName: 'Default', groupContent: [sampleNote] },
    { groupId: 20, groupName: 'Favorites', groupContent: [] },
    { groupId: 30, groupName: 'Archived Notes', groupContent: [] },
    { groupId: 40, groupName: 'Trash', groupContent: [] },
    { groupId: 50, groupName: 'Recents', groupContent: [] },
];

describe('Logic Functions', () => {
    it('should create a new note', () => {
        const newNote = createNote('New Title', 'New Body');
        expect(newNote).toHaveProperty('id');
        expect(newNote.title).toBe('judul');
        expect(newNote.body).toBe('New Body');
    });

    it('should edit an existing note', () => {
        const updatedNotes = editNote([sampleNote], 1, { title: 'Updated Title' });
        expect(updatedNotes[0].title).toBe('Updated Title');
    });

    it('should delete a note by moving it to Trash', () => {
        const updatedGroups = deleteNote(sampleGroups, 10, 1);
        expect(updatedGroups.find((g) => g.groupName === 'Default').groupContent).toHaveLength(0);
        expect(updatedGroups.find((g) => g.groupName === 'Trash').groupContent).toHaveLength(1);
    });

    it('should restore a note from Trash to a target group', () => {
        const trashedGroups = deleteNote(sampleGroups, 10, 1);
        const restoredGroups = restoreNoteFromTrash(trashedGroups, 1, 10);
        expect(restoredGroups.find((g) => g.groupName === 'Trash').groupContent).toHaveLength(0);
        expect(restoredGroups.find((g) => g.groupName === 'Default').groupContent).toHaveLength(1);
    });

    it('should create a new group', () => {
        const newGroups = createGroup(sampleGroups, 'New Group');
        expect(newGroups).toHaveLength(6);
        expect(newGroups[5].groupName).toBe('New Group');
    });

    it('should edit an existing group', () => {
        const updatedGroups = editGroup(sampleGroups, 10, { groupName: 'Updated Default' });
        expect(updatedGroups.find((g) => g.groupId === 10).groupName).toBe('Default'); // Non-editable
    });

    it('should move a note between groups', () => {
        const updatedGroups = moveNoteBetweenGroups(sampleGroups, 10, 20, 1);
        expect(updatedGroups.find((g) => g.groupName === 'Default').groupContent).toHaveLength(0);
        expect(updatedGroups.find((g) => g.groupName === 'Favorites').groupContent).toHaveLength(1);
    });

    it('should delete a group', () => {
        const updatedGroups = deleteGroup(sampleGroups, 20);
        expect(updatedGroups).toHaveLength(5); // Non-deletable
    });

    it('should display notes by group', () => {
        const notes = displayNotesByGroup(sampleGroups, 10);
        expect(notes).toHaveLength(1);
    });

    it('should display recent notes', () => {
        const recentGroups = displayRecentNotes(sampleGroups, sampleNote);
        const recentNotes = recentGroups.find((g) => g.groupName === 'Recents').groupContent;
        expect(recentNotes).toHaveLength(1);
        expect(recentNotes[0].id).toBe(1);
    });

    it('should search notes', () => {
        const results = displaySearchedNotes([sampleNote], 'Sample');
        expect(results).toHaveLength(1);
        expect(results[0].title).toBe('Sample Note');
    });

    it('should sort notes', () => {
        const notes = [
            { ...sampleNote, id: 2, createdAt: new Date(Date.now() - 10000).toISOString() },
            sampleNote,
        ];
        const sortedNotes = sortNotes(notes, 'asc');
        expect(sortedNotes[0].id).toBe(2);
    });

    it('should add a note to Archived Notes', () => {
        const updatedGroups = addNoteToArchived(sampleGroups, 1);
        expect(updatedGroups.find((g) => g.groupName === 'Default').groupContent).toHaveLength(0);
        expect(
            updatedGroups.find((g) => g.groupName === 'Archived Notes').groupContent
        ).toHaveLength(1);
    });

    it('should add a note to Favorites', () => {
        const updatedGroups = addNoteToFavorites(sampleGroups, 1);
        expect(updatedGroups.find((g) => g.groupName === 'Default').groupContent).toHaveLength(0);
        expect(updatedGroups.find((g) => g.groupName === 'Favorites').groupContent).toHaveLength(1);
    });
});
