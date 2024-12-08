// Buat catatan baru dengan ID unik
function createNote(title, body) {
    return {
        id: Date.now(),
        title,
        folder,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
    };
}

// Tambahkan catatan ke grup tertentu
function addNoteToGroup(groups, note, groupTitle) {
    const groupExists = groups.some((group) => group.title === groupTitle);

    if (groupExists) {
        return groups.map((group) => {
            if (group.title === groupTitle) {
                return {
                    ...group,
                    content: [...group.content, note],
                };
            }
            return group;
        });
    } else {
        return [
            ...groups,
            {
                title: groupTitle,
                content: [note],
            },
        ];
    }
}

// Pindahkan catatan dari satu grup ke grup lain
function moveNoteToGroup(groups, noteId, sourceGroupTitle, targetGroupTitle) {
    let noteToMove;

    const updatedGroups = groups.map((group) => {
        if (group.title === sourceGroupTitle) {
            const filteredContent = group.content.filter((note) => {
                if (note.id === noteId) {
                    noteToMove = note;
                    return false;
                }
                return true;
            });
            return { ...group, content: filteredContent };
        }
        return group;
    });

    if (noteToMove) {
        return updatedGroups.map((group) => {
            if (group.title === targetGroupTitle) {
                return {
                    ...group,
                    content: [...group.content, noteToMove],
                };
            }
            return group;
        });
    }

    return updatedGroups;
}

export { createNote, addNoteToGroup, moveNoteToGroup };
