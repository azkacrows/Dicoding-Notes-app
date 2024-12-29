export default function NoteListSorterButton({ descending, handleSortOrder }) {
    let icon = descending ? 'chevrons-up' : 'chevrons-down';
    return (
        <button
            onClick={handleSortOrder}
            className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
            type="button"
        >
            <box-icon name={icon}></box-icon>
        </button>
    );
}
