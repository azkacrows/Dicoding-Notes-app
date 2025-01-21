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
    handleArchiveNote,
    handlePermanentDeleteNote,
    groups,
    selectedGroupId,
    handleMoveNoteBetweenGroups,
}) {
    const selectedNotes = notes.find((note) => note.id === selectedNoteId);

    let [editedDataTitle, setEditedDataTitle] = useState({
        title: null,
    });
    let [editedDataBody, setEditedDataBody] = useState({
        body: null,
    });

    function saveEditedDataHandler() {
        handleEditNote(selectedNoteId, {
            title: editedDataTitle.title ?? selectedNotes.title,
            body: editedDataBody.body ?? selectedNotes.body,
        });

        setEditedDataTitle({ title: null });
        setEditedDataBody({ body: null });
    }

    function addNoteToFavoritesHandler() {
        handleMoveNoteBetweenGroups(selectedGroupId, 20, selectedNoteId);
    }

    function archiveNoteHandler() {
        handleArchiveNote(selectedGroupId, selectedNoteId);
    }

    function deleteNoteHandler() {
        handleMoveNoteBetweenGroups(selectedGroupId, 40, selectedNoteId);
    }

    function permanentDeleteNoteHandler() {
        const confirmation = confirm(
            'Apakah Anda yakin ingin menghapus catatan ini secara permanen? Catatan yang telah dihapus tidak dapat dikembalikan.'
        );
        if (confirmation) {
            handlePermanentDeleteNote(selectedGroupId, selectedNoteId);
        }
    }

    const titleCharLimit = 50;

    function handleTitleChange(e) {
        const inputTitle = e.target.value;
        if (inputTitle.length <= titleCharLimit) {
            setEditedDataTitle({ title: inputTitle });
        }
    }

    const remainingChar = titleCharLimit - editedDataTitle.title?.length || 0;

    return (
        <div className="flex flex-col w-full h-full p-2">
            {selectedNotes ? (
                <div className="flex flex-col w-full h-full px-8 py-2">
                    <NoteHeader
                        title={editedDataTitle.title ?? selectedNotes.title}
                        handleTitleChange={handleTitleChange}
                        remainingChar={remainingChar}
                        saveEditedDataHandler={saveEditedDataHandler}
                        deleteNoteHandler={deleteNoteHandler}
                        addNoteToFavoritesHandler={addNoteToFavoritesHandler}
                        archiveNoteHandler={archiveNoteHandler}
                        permanentDeleteNoteHandler={permanentDeleteNoteHandler}
                    />
                    <div className="flex flex-col w-full h-full">
                        <NoteDateEditor date={selectedNotes.createdAt} />
                        <hr className="my-3" />

                        <NoteFolderEditor groups={groups} selectedGroupId={selectedGroupId} />
                        <hr className="mt-3 mb-2" />

                        <NoteWSIWYGEditor />
                        <hr className="mt-2 mb-3" />
                        <NoteBoardEditor
                            body={editedDataBody.body ?? selectedNotes.body}
                            onChange={(e) => setEditedDataBody({ body: e.target.value })}
                        />
                    </div>
                </div>
            ) : (
                <NoOpenedNotes />
            )}
        </div>
    );
}
