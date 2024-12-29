import HeaderComponent from './SidebarHeader/HeaderComponent';
import RecentComponent from './SidebarFolder/RecentSection/RecentComponent';
import FolderComponent from './SidebarFolder/FolderSection/FolderComponent';
import MoreComponent from './SidebarFolder/MoreSection/MoreComponent';

export default function Sidebar({
    handleCreateNote,
    handleSearchNote,
    selectedGroupId,
    handleSelectGroupClick,
    handleCreateGroup,
    groups,
}) {
    return (
        <div className="flex flex-col">
            <HeaderComponent
                handleCreateNote={handleCreateNote}
                handleSearchNote={handleSearchNote}
            />
            <RecentComponent groups={groups} />
            <FolderComponent
                groups={groups}
                selectedGroupId={selectedGroupId}
                handleSelectGroupClick={handleSelectGroupClick}
                handleCreateGroup={handleCreateGroup}
            />
            <MoreComponent
                selectedGroupId={selectedGroupId}
                handleSelectGroupClick={handleSelectGroupClick}
                groups={groups}
            />
        </div>
    );
}
