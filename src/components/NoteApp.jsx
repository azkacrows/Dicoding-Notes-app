import { useEffect, useState } from 'react';

// fragmet
import Sidebar from './Sidebar/SideBar';
import NoteListPanel from './NoteListPanel/NoteListPanel';
import NoteMainEditor from './NoteEditorPanel/NoteMainEditor';

// utils
import {
    defaultGroup,
    createNote,
    editNote,
    deleteNote,
    createGroup,
    editGroup,
    addNoteToGroup,
    moveNoteBetweenGroups,
    deleteGroup,
    displayNotesByGroup,
    displayRecentNotes,
    displaySearchedNotes,
    sortNotes,
    addNoteToArchived,
    addNoteToFavorites,
} from '../utils/logic';

export default function NoteApp() {
    // state
    const [groups, setGroups] = useState(defaultGroup);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [notes, setNotes] = useState(defaultGroup[0].groupContent);
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    // create notes
    function handleCreateNote(title, body) {
        const newNote = createNote(title, body);
        setNotes([...notes, newNote]);
        setSelectedNoteId(newNote.id); // Pilih note baru secara otomatis
    }

    // edit notes
    function handleEditNote(noteId, updatedData) {
        const updatedNotes = editNote(notes, noteId, updatedData);
        setNotes(updatedNotes);
    }
    return (
        <div className="container flex min-w-full min-h-screen">
            <div className="flex flex-row w-2/5">
                {/* Sidebar Panel */}
                <div className="flex flex-col w-1/2 h-screen">
                    <Sidebar handleCreateNotes={handleCreateNote} />
                </div>
                {/* Note List Panel */}
                <div className="flex flex-col w-1/2 h-screen bg-base-200">
                    <NoteListPanel
                        notes={notes}
                        selectedNoteId={selectedNoteId}
                        onSelectedNoteId={setSelectedNoteId}
                    />
                </div>
            </div>
            {/* Main Editor Panel */}
            <div className="flex flex-col items-center w-3/5 h-screen">
                <NoteMainEditor
                    notes={notes.find((note) => note.id === selectedNoteId)}
                    onEditNote={handleEditNote}
                />
            </div>
        </div>
    );
}
