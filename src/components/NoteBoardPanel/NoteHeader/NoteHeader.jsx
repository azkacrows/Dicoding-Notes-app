import { useState } from 'react';

import NoteHeaderButton from './NoteHeaderButton';

export default function NoteHeader({
    title,
    onChange,
    saveEditedDataHandler,
    deleteNoteHandler,
    addNoteToFavoritesHandler,
    archiveNoteHandler,
    permanentDeleteNoteHandler,
    handleTitleChange,
    remainingChar,
}) {
    const [isTitleInputActive, setIsTitleInputActive] = useState(false);
    return (
        <div className="flex flex-row items-center justify-between">
            <input
                name="title"
                value={title}
                onChange={(e) => {
                    handleTitleChange(e);
                    setIsTitleInputActive(true);
                }}
                onBlur={() => setIsTitleInputActive(false)}
                type="text"
                className="text-2xl font-bold text-white bg-transparent border-none focus:outline-none"
            />
            {isTitleInputActive && (
                <span className={`${remainingChar === 0 ? 'text-red-500' : 'text-inherit'}`}>
                    {remainingChar} karakter tersisa
                </span>
            )}
            <NoteHeaderButton
                saveEditedDataHandler={saveEditedDataHandler}
                deleteNoteHandler={deleteNoteHandler}
                addNoteToFavoritesHandler={addNoteToFavoritesHandler}
                archiveNoteHandler={archiveNoteHandler}
                permanentDeleteNoteHandler={permanentDeleteNoteHandler}
            />
        </div>
    );
}
