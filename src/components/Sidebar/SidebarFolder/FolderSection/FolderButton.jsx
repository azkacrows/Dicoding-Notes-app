export default function FolderButton({
    handleSelectGroupClick,
    groupId,
    title,
    activeFolder = false,
}) {
    let folderAktif;
    let ikonAktif;

    if (activeFolder) {
        folderAktif = 'bg-base-200 text-white';
        ikonAktif = 'folder-open';
    }

    return (
        <div className={folderAktif}>
            <button
                onClick={() => handleSelectGroupClick(groupId)}
                className="flex items-center w-full px-3 py-2 text-current cursor-pointer fill-current"
            >
                <box-icon name={ikonAktif || 'folder'}></box-icon>
                <span className="ml-2 truncate max-w-52">{title}</span>
            </button>
        </div>
    );
}
