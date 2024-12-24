import CreateFolderButton from './CreateFolderButton';
import FolderButton from './FolderButton';

export default function FolderComponent({
    selectedGroupId,
    handleSelectGroupClick,
    handleCreateGroup,
    groups,
}) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>Folders</p>
                <CreateFolderButton handleCreateGroup={handleCreateGroup} />
            </div>
            <div className="lg:max-2xl:h-[7.5rem] h-[4.8rem] overflow-y-auto">
                {[...groups]
                    .filter(
                        (group) =>
                            group.groupName !== 'Favorites' &&
                            group.groupName !== 'Trash' &&
                            group.groupName !== 'Recents' &&
                            group.groupName !== 'Archived Notes'
                    )
                    .sort((a, b) => b.groupId - a.groupId)
                    .map((group, index) => (
                        <FolderButton
                            groupId={group.groupId}
                            handleSelectGroupClick={handleSelectGroupClick}
                            title={group.groupName}
                            key={index}
                            activeFolder={selectedGroupId === group.groupId}
                        />
                    ))}
            </div>
        </div>
    );
}
