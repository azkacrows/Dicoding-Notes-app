// utils
import { getInitialData } from '../utils';

// Grup default
const defaultGroup = [
    { groupId: 10, groupName: 'Default', groupContent: getInitialData() },
    { groupId: 20, groupName: 'Favorites', groupContent: [] },
    { groupId: 30, groupName: 'Archived Notes', groupContent: [] },
    { groupId: 40, groupName: 'Trash', groupContent: [] },
    { groupId: 50, groupName: 'Recents', groupContent: [] },
];

// create notes
const createNote = (title, body) => {
    return {
        id: +new Date(),
        title: title || 'Undefined',
        body,
        createdAt: new Date().toISOString(),
        archived: false,
    };
};

// edit notes
const editNote = (notes, noteId, updatedData) => {
    return notes.map((note) => (note.id === noteId ? { ...note, ...updatedData } : note));
};

// delete notes
const deleteNote = (groups, groupId, noteId) => {
    let noteToTrash = null;
    const updatedGroups = groups.map((group) => {
        if (group.groupId === groupId) {
            noteToTrash = group.groupContent.find((note) => note.id === noteId);
            return {
                ...group,
                groupContent: group.groupContent.filter((note) => note.id !== noteId),
            };
        }
        return group;
    });

    return updatedGroups.map((group) => {
        if (group.groupName === 'Trash' && noteToTrash) {
            return {
                ...group,
                groupContent: [...group.groupContent, noteToTrash],
            };
        }
        return group;
    });
};

// create group
const createGroup = (groupName, groups) => {
    return [
        ...groups,
        { groupId: +new Date(), groupName: groupName || 'Undefined', groupContent: [] },
    ];
};

// edit group
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

// moved notes between group
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

// delete group
const deleteGroup = (groups, groupId) => {
    const nonDeletableGroups = ['Favorites', 'Trash', 'Recents', 'Archived Notes'];
    const groupToDelete = groups.find((group) => group.groupId === groupId);
    if (groupToDelete && !nonDeletableGroups.includes(groupToDelete.groupName)) {
        const notesToTrash = groupToDelete.groupContent;

        return groups
            .filter((group) => group.groupId !== groupId)
            .map((group) => {
                if (group.groupName === 'Trash') {
                    return {
                        ...group,
                        groupContent: [...group.groupContent, ...notesToTrash],
                    };
                }
                return group;
            });
    }
    return groups;
};

// display recently opened notes
const displayRecentNotes = (groups, note) => {
    const recentGroup = groups.find((group) => group.groupName === 'Recents');
    if (recentGroup) {
        const updatedRecents = [
            { ...note, accessedAt: new Date().toISOString() },
            ...recentGroup.groupContent.filter((n) => n.id !== note.id),
        ].slice(0, 3);

        return groups.map((group) =>
            group.groupName === 'Recents' ? { ...group, groupContent: updatedRecents } : group
        );
    }
    return groups;
};

// adding notes to archived array
const addNoteToArchived = (groups, noteId) => {
    return moveNoteBetweenGroups(groups, 10, 30, noteId); // Default to Archived Notes
};

// adding notes to favorite array
const addNoteToFavorites = (groups, noteId) => {
    return moveNoteBetweenGroups(groups, 10, 20, noteId); // Default to Favorites
};

export {
    defaultGroup,
    createNote,
    editNote,
    deleteNote,
    createGroup,
    editGroup,
    moveNoteBetweenGroups,
    deleteGroup,
    displayRecentNotes,
    addNoteToArchived,
    addNoteToFavorites,
};
