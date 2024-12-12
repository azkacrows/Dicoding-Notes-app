// utils
import { getInitialData } from '../utils';

// Buat catatan baru dengan ID unik
const createNote = (title, body) => ({
    id: +new Date(),
    title,
    body,
    createAt: new Date().toISOString(),
    archived: false,
});

// Edit catatan
const editNote = (notes, noteId, updatedData) => {
    return notes.map((note) => (note.id === noteId ? { ...note, ...updatedData } : note));
};

// Hapus catatan
const deleteNote = (notes, noteId) => {
    return notes.filter((note) => note.id !== noteId);
};

// Grup default
const defaultGroup = [
    { groupId: 10, groupName: 'Default', groupContent: getInitialData() },
    { groupId: 20, groupName: 'Favorites', groupContent: [] },
    { groupId: 30, groupName: 'Archived Notes', groupContent: [] },
    { groupId: 40, groupName: 'Trash', groupContent: [] },
    { groupId: 50, groupName: 'Recents', groupContent: [] },
];

// Buat grup baru
const createGroup = (groups, groupName) => {
    return [...groups, { groupId: +new Date(), groupName, groupContent: [] }];
};

// Edit grup
const editGroup = (groups, groupId, updatedData) => {
    const nonEditableGroups = ['Favorites', 'Trash', 'Recents', 'Archived Notes'];
    const groupToEdit = groups.find((group) => group.groupId === groupId);

    if (groupToEdit && !nonEditableGroups.includes(groupToEdit.groupName)) {
        return groups.map((group) =>
            group.groupId === groupId ? { ...group, ...updatedData } : group
        );
    }
    return groups;
};

// Tambahkan catatan ke grup tertentu
const addNoteToGroup = (groups, groupId, note) => {
    return groups.map((group) =>
        group.groupId === groupId
            ? { ...group, groupContent: [...group.groupContent, note] }
            : group
    );
};

// Pindahkan catatan dari satu grup ke grup lain
const moveNoteBetweenGroups = (groups, sourceGroupId, targetGroupId, noteId) => {
    let noteToMove = null;
    const updatedGroups = groups.map((group) => {
        if (group.groupId === sourceGroupId) {
            noteToMove = group.groupContent.find((note) => note.id === noteId);
            return {
                ...group,
                groupContent: group.groupContent.filter((note) => note.id !== noteId),
            };
        }
        return group;
    });

    return updatedGroups.map((group) => {
        if (group.groupId === targetGroupId && noteToMove) {
            return {
                ...group,
                groupContent: [...group.groupContent, noteToMove],
            };
        }
        return group;
    });
};

// Hapus grup
const deleteGroup = (groups, groupId) => {
    const nonDeletableGroups = ['Favorites', 'Trash', 'Recents', 'Archived Notes'];
    const groupToDelete = groups.find((group) => group.groupId === groupId);
    if (groupToDelete && !nonDeletableGroups.includes(groupToDelete.groupName)) {
        return groups.filter((group) => group.groupId !== groupId);
    }
    return groups;
};

export {
    defaultGroup,
    createNote,
    editNote,
    deleteNote,
    createGroup,
    editGroup,
    addNoteToGroup,
    moveNoteBetweenGroups,
    deleteGroup,
};
