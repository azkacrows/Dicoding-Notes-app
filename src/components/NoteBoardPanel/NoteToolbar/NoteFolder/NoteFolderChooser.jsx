export default function NoteListSorterButton({ descending, onClick }) {
    let icon = descending ? 'chevron-up' : 'chevron-down';
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div
                tabindex="0"
                role="button"
                class="btn min-h-fit flex items-center h-0 m-0 p-0 bg-transparent hover:bg-transparent border-0 active:opacity-30"
            >
                <box-icon name={icon}></box-icon>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 rounded-lg z-[1] w-52 p-2 shadow"
            >
                <li className="active:opacity-30">
                    <a>Favorite Notes</a>
                </li>
                <li className="active:opacity-30">
                    <a>Archived Notes</a>
                </li>
                <li className="active:opacity-30">
                    <a>Delete Notes</a>
                </li>
            </ul>
        </div>
    );
}
