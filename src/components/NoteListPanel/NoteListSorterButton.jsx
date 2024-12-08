export default function NoteListSorterButton({ decending }) {
    let icon = decending ? 'chevrons-up' : 'chevrons-down';
    return (
        <button
            className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
            type="button"
        >
            <box-icon name={icon}></box-icon>
        </button>
    );
}
