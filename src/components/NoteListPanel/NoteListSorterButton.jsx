export default function NoteListSorterButton({ descending, onClick }) {
    let icon = descending ? 'chevrons-up' : 'chevrons-down';
    return (
        <button
            onClick={onClick}
            className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
            type="button"
        >
            <box-icon name={icon}></box-icon>
        </button>
    );
}
