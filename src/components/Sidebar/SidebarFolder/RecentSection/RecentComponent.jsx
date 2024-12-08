import RecentNotesButton from './RecentNotesButton';

export default function RecentComponent() {
    return (
        <div className="flex flex-col w-full h-[9.5rem]">
            <p className="mx-4 mb-2 text-primary-content">Recents</p>
            <div>
                <RecentNotesButton title="Personal" recentActive />
                <RecentNotesButton title="Personal" />
                <RecentNotesButton title="Personal" />
            </div>
        </div>
    );
}
