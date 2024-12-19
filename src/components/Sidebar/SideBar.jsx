import HeaderComponent from './SidebarHeader/HeaderComponent';
import RecentComponent from './SidebarFolder/RecentSection/RecentComponent';
import FolderComponent from './SidebarFolder/FolderSection/FolderComponent';
import MoreComponent from './SidebarFolder/MoreSection/MoreComponent';

export default function Sidebar({ handleCreateNote }) {
    return (
        <div className="flex flex-col">
            <HeaderComponent handleCreateNotes={handleCreateNote} />
            <RecentComponent />
            <FolderComponent />
            <MoreComponent />
        </div>
    );
}
