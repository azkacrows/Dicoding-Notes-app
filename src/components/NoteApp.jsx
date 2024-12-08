import { useEffect, useState } from 'react';

// fragmet
import Sidebar from './Sidebar/SideBar';
import NoteListPanel from './NoteListPanel/NoteListPanel';
import NoteMainEditor from './NoteEditorPanel/NoteMainEditor';

// utils
import { getInitialData } from '../utils';
import { addNoteToGroup, moveNoteToGroup } from '../utils/logic';

export default function NoteApp() {
    // State for groups and notes
    const [group, setGroup] = useState(() => {
        const savedGroups = localStorage.getItem('groups');
        return savedGroups
            ? JSON.parse(savedGroups)
            : [
                  {
                      title: 'Default',
                      content: getInitialData(),
                  },
              ];
    });

    const [notes, setNotes] = useState(() => {
        return group[0]?.content || [];
    });

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    }, [groups]);

    const handleAddNewNote = (newNote) => {
        const updatedGroups = addNoteToGroup(groups, newNote, 'Default');
        setGroups(updatedGroups);

        setNotes(updatedGroups.find((group) => group.title === 'Default').content);
    };

    const handleMoveNote = (noteId, sourceGroup, targetGroup) => {
        const updatedGroups = moveNoteToGroup(groups, noteId, sourceGroup, targetGroup);
        setGroups(updatedGroups);
        setNotes(
            updatedGroups.find(
                (group) => group.title === sourceGroup || group.title === targetGroup
            ).content
        );
    };

    return (
        <div className="container flex min-w-full min-h-screen">
            <div className="flex flex-row w-2/5">
                {/* Sidebar Panel */}
                <div className="flex flex-col w-1/2 h-screen">
                    <Sidebar notes={notes} />
                </div>
                {/* Note List Panel */}
                <div className="flex flex-col w-1/2 h-screen bg-base-200">
                    <NoteListPanel notes={notes} />
                </div>
            </div>
            {/* Main Editor Panel */}
            <div className="flex flex-col items-center w-3/5 h-screen">
                <NoteMainEditor notes={notes} />
            </div>
        </div>
    );
}
