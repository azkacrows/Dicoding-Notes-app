import { useState } from 'react';

import NoteHeader from './NoteHeader/NoteHeader';
import NoteDateEditor from './NoteToolbar/NoteDate/NoteDateDisplayer';
import NoteFolderEditor from './NoteToolbar/NoteFolder/NoteFolderDisplayer';
import NoteWSIWYGEditor from './NoteToolbar/NoteWSIWYG/NoteWSIWYGEditor';
import NoteBoardEditor from './NoteToolbar/NoteBoard/NoteBoardEditor';
import NoOpenedNotes from './NoOpenedNotes';

export default function NoteMainEditor({
    notes,
    selectedNoteId,
    handleEditNote,
    groups,
    selectedGroupId,
}) {
    const selectedNotes = notes.find((note) => note.id == selectedNoteId);

    let [editedData, setEditedData] = useState({
        title: null,
        body: null,
    });

    function saveEditedDataHandler() {
        handleEditNote(selectedNoteId, editedData);
    }

    return (
        <div className="flex flex-col w-full h-full p-2">
            {selectedNotes ? (
                <div className="flex flex-col w-full h-full px-8 py-2">
                    <NoteHeader
                        title={editedData.title ?? selectedNotes.title}
                        onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                        saveEditedDataHandler={saveEditedDataHandler}
                    />
                    <div className="flex flex-col w-full h-full">
                        <NoteDateEditor date={selectedNotes.createdAt} />
                        <hr className="my-3" />

                        <NoteFolderEditor groups={groups} selectedGroupId={selectedGroupId} />
                        <hr className="mt-3 mb-2" />

                        <NoteWSIWYGEditor />
                        <hr className="mt-2 mb-3" />
                        <NoteBoardEditor body={selectedNotes.body} />
                    </div>
                </div>
            ) : (
                <NoOpenedNotes />
            )}
        </div>
    );
}
