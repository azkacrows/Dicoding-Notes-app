export default function NewNoteButton({ handleCreateNote }) {
    return (
        <button
            onClick={handleCreateNote}
            className="w-full mx-4 py-1.5 cursor-pointer fill-current flex items-center justify-center rounded-sm bg-base-300 active:opacity-50"
            type="button"
        >
            <box-icon name="plus"></box-icon>
            New Notes
        </button>
    );
}
