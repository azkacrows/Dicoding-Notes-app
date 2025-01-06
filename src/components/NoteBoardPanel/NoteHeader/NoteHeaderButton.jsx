export default function NoteHeaderButton() {
    return (
        <div className="border rounded-full dropdown dropdown-end border-white/60">
            <div
                tabIndex={0}
                role="button"
                className="flex h-0 p-1 rounded-full fill-current min-h-fit btn active:opacity-30"
            >
                <box-icon size="sm" name="dots-horizontal-rounded"></box-icon>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 rounded-lg z-[1] w-52 p-2 shadow"
            >
                <li className="active:opacity-30">
                    <a>Save Notes</a>
                </li>
                <li className="active:opacity-30">
                    <a>Delete Notes</a>
                </li>
                <li className="active:opacity-30">
                    <a>Favorites Notes</a>
                </li>
                <li className="active:opacity-30">
                    <a>Archived Notes</a>
                </li>
                <li className="active:opacity-30">
                    <a>Delete Folder</a>
                </li>
            </ul>
        </div>
    );
}
