import HeaderComponent from './SidebarHeader/HeaderComponent';
import RecentComponent from './SidebarFolder/RecentSection/RecentComponent';
import FolderComponent from './SidebarFolder/FolderSection/FolderComponent';
import MoreComponent from './SidebarFolder/MoreSection/MoreComponent';

export default function Sidebar({ handleCreateNote, handleCreateGroup, groups }) {
    return (
        <div className="flex flex-col">
            <HeaderComponent handleCreateNote={handleCreateNote} />
            <RecentComponent groups={groups} />
            <FolderComponent groups={groups} handleCreateGroup={handleCreateGroup} />
            <MoreComponent groups={groups} />
        </div>
    );
}
