import CreateFolderButton from './CreateFolderButton';
import FolderButton from './FolderButton';

export default function FolderComponent({ activeGroupId, handleSetActiveGroup, groups }) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>Folders</p>
                <CreateFolderButton />
            </div>
            <div className="lg:max-2xl:h-[7.5rem] h-[4.8rem] overflow-y-auto">
                <FolderButton activeFolder />
            </div>
        </div>
    );
}
