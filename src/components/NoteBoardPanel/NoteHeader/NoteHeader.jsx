import NoteHeaderButton from './NoteHeaderButton';

export default function NoteHeader({
    title,
    onChange,
    saveEditedDataHandler,
    deleteNoteHandler,
    addNoteToFavoritesHandler,
    archiveNoteHandler,
    permanentDeleteNoteHandler,
}) {
    return (
        <div className="flex flex-row items-center justify-between">
            <input
                name="title"
                value={title}
                onChange={onChange}
                type="text"
                className="text-2xl font-bold text-white bg-transparent border-none focus:outline-none"
            />
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
