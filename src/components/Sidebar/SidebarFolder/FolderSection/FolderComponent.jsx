import CreateFolderButton from './CreateFolderButton';
import FolderButton from './FolderButton';

export default function FolderComponent({ handleCreateGroup, groups }) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>Folders</p>
                <CreateFolderButton handleCreateGroup={handleCreateGroup} />
            </div>
            <div className="lg:max-2xl:h-[7.5rem] h-[4.8rem] overflow-y-auto">
                {/* <FolderButton activeFolder /> */}
                {groups.map((group, index) => {
                    if (
                        group.groupName !== 'Favorites' &&
                        group.groupName !== 'Trash' &&
                        group.groupName !== 'Recents' &&
                        group.groupName !== 'Archived Notes'
                    ) {
                        return <FolderButton title={group.groupName} key={index} />;
                    }
                })}
            </div>
        </div>
    );
}
