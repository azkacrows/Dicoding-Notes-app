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
    const selectedNotes = notes.find((note) => note.id === selectedNoteId) || null;
    // local state
    const [editedData, setEditedData] = useState({
        title: selectedNotes.title,
        body: selectedNotes.body,
    });

    if (
        selectedNotes &&
        (editedData.title !== selectedNotes.title || editedData.body !== selectedNotes.body)
    ) {
        setEditedData({
            title: selectedNotes.title,
            body: selectedNotes.body,
        });
    }

    function dataChangeHandler(event) {
        const { name, value } = event.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function saveEditedDataHandler() {
        handleEditNote(selectedNoteId, editedData);
    }
    return (
        <div className="flex flex-col w-full h-full p-2">
            {!selectedNotes ? (
                <NoOpenedNotes />
            ) : (
                <div className="flex flex-col w-full h-full px-8 py-2">
                    <NoteHeader
                        title={selectedNotes.title}
                        onChange={(e) =>
                            dataChangeHandler({
                                ...e,
                                target: { name: 'title', value: e.target.value },
                            })
                        }
                    />
                    <div className="flex flex-col w-full h-full">
                        <NoteDateEditor date={selectedNotes.createdAt} />
                        <hr className="my-3" />

                        <NoteFolderEditor groups={groups} selectedGroupId={selectedGroupId} />
                        <hr className="mt-3 mb-2" />

                        <NoteWSIWYGEditor />
                        <hr className="mt-2 mb-3" />

                        {/* <NoteBoardEditor body={selectedNotes.body} /> */}
                    </div>
                </div>
            )}
        </div>
    );
}
