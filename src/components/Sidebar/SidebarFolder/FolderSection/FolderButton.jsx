export default function FolderButton({ title, activeIcon = false, activeFolder = false }) {
    let ikonAktif = activeIcon ? 'folder-open' : 'folder';
    let folderAktif = activeFolder ? 'bg-base-200 text-white' : '';
    return (
        <div className={folderAktif}>
            <button className="flex items-center w-full px-3 py-2 text-current cursor-pointer fill-current">
                <box-icon name={ikonAktif}></box-icon>
                <span className="ml-2 truncate max-w-52">{title}</span>
            </button>
        </div>
    );
}
