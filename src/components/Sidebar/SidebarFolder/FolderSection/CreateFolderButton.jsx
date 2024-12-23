export default function CreateFolderButton({ handleCreateGroup }) {
    return (
        <button
            onClick={handleCreateGroup}
            className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30"
            type="button"
        >
            <box-icon name="folder-plus"></box-icon>
        </button>
    );
}
