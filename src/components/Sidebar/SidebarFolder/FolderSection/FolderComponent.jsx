import CreateFolderButton from './CreateFolderButton';
import FolderButton from './FolderButton';

export default function FolderComponent() {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>Folders</p>
                {/* <MyButtons className="flex items-center cursor-pointer fill-current opacity-60 active:opacity-30">
                    <box-icon name="folder-plus"></box-icon>
                </MyButtons> */}
                <CreateFolderButton />
            </div>
            <div className="h-[7.5rem] overflow-y-auto">
                <FolderButton title="Personal" />
                <FolderButton title="Personal" />
                <FolderButton title="Personal" />
            </div>
        </div>
    );
}
