import NoteFolderChooser from './NoteFolderChooser';

export default function NoteFolderEditor({ groups, selectedGroupId }) {
    const groupName = groups.find((group) => group.groupId === selectedGroupId).groupName;
    return (
        <div className="flex flex-row items-center fill-current">
            <box-icon name="folder"></box-icon>
            <p className="ml-4">Folder</p>
            <span className="ml-12 text-white underline underline-offset-4">{groupName}</span>
            <NoteFolderChooser />
        </div>
    );
}
