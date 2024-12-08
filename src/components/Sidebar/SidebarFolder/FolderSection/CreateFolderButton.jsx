export default function CreateFolderButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
            type="button"
        >
            <box-icon name="folder-plus"></box-icon>
        </button>
    );
}
