import { useState } from 'react';

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
    moveNoteBetweenGroups,
    deleteGroup,
    displayRecentNotes,
    addNoteToArchived,
    addNoteToFavorites,
} from '../utils/logic';

export default function NoteApp() {
    // state
    const [groups, setGroups] = useState(defaultGroup);
    const [selectedGroupId, setSelectedGroupId] = useState(null);
    const [notes, setNotes] = useState([]);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [searchedNotes, setSearchedNotes] = useState(null);

    // TODO Selected Group
    function handleSelectGroupClick(groupId) {
        setSelectedGroupId(groupId);
        const selectedGroup = groups.find((group) => group.groupId === groupId);
        if (selectedGroup) {
            setNotes(selectedGroup.groupContent);
            setSearchedNotes(null);
        }
    }

    // TODO create Groups
    function handleCreateGroup() {
        const groupName = prompt('Masukkan nama folder baru');
        const newGroup = createGroup(groupName, groups);
        setGroups(newGroup);
        setSelectedGroupId(newGroup[newGroup.length - 1].groupId); // Pilih group baru secara otomatis
        setNotes(newGroup[newGroup.length - 1].groupContent);
    }

    // TODO create notes
    function handleCreateNote(title, body) {
        const nonCreatableNoteInGroups = ['Favorites', 'Trash', 'Recents', 'Archived Notes'];
        if (!selectedGroupId) {
            const createGroupConfirm = confirm(
                'Anda belum memilih folder, ingin membuat folder baru?'
            );
            if (createGroupConfirm) {
                handleCreateGroup();
            }
        } else if (
            nonCreatableNoteInGroups.includes(
                groups.find((group) => group.groupId === selectedGroupId).groupName
            )
        ) {
            alert('Anda tidak dapat membuat note di folder ini');
        } else {
            const createNoteTitle = prompt('Masukkan judul note baru');
            const newNote = createNote(createNoteTitle, body);
            const updatedGroups = groups.map((group) => {
                if (group.groupId === selectedGroupId) {
                    return {
                        ...group,
                        groupContent: [...group.groupContent, newNote],
                    };
                }
                return group;
            });
            setGroups(updatedGroups);
            setSelectedNoteId(newNote.id);
            setNotes((prevNotes) => {
                return [...prevNotes, newNote];
            });
        }
    }

    // TODO Selected Note
    function handleSelectNoteClick(noteId) {
        setSelectedNoteId(noteId);

        const selectedNote = notes.find((note) => note.id === noteId);

        if (selectedNote) {
            // Update grup Recents dengan note yang diakses
            const updatedGroups = displayRecentNotes(groups, selectedNote);
            setGroups(updatedGroups);
        }
    }

    // TODO Searched Note
    function handleSearchNote(query) {
        if (query.trim() === '') {
            setSearchedNotes(null);
        } else {
            const allNotes = groups.flatMap((group) => group.groupContent);
            const filteredNotes = allNotes.filter(
                (note) =>
                    note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
                    note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            );
            setSearchedNotes(filteredNotes);
        }
    }

    return (
        <div className="container flex min-w-full min-h-screen">
            <div className="flex flex-row w-2/5">
                {/* Sidebar Panel */}
                <div className="flex flex-col w-1/2 h-screen">
                    <Sidebar
                        selectedNoteId={selectedNoteId}
                        handleSelectNoteClick={handleSelectNoteClick}
                        handleCreateNote={handleCreateNote}
                        handleSearchNote={handleSearchNote}
                        groups={groups}
                        selectedGroupId={selectedGroupId}
                        handleCreateGroup={handleCreateGroup}
                        handleSelectGroupClick={handleSelectGroupClick}
                    />
                </div>
                {/* Note List Panel */}
                <div className="flex flex-col w-1/2 h-screen bg-base-200">
                    <NoteListPanel
                        notes={searchedNotes || notes}
                        searchedNotes={searchedNotes}
                        selectedNoteId={selectedNoteId}
                        handleSelectNoteClick={handleSelectNoteClick}
                        groups={groups}
                        selectedGroupId={selectedGroupId}
                    />
                </div>
            </div>
            {/* Main Editor Panel */}
            <div className="flex flex-col items-center w-3/5 h-screen">
                <NoteMainEditor notes={notes.find((note) => note.id === selectedNoteId)} />
            </div>
        </div>
    );
}
