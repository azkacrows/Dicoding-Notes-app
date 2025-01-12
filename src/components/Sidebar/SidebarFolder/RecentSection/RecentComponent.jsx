import RecentNotesButton from './RecentNotesButton';

export default function RecentComponent({ selectedNoteId, handleSelectNoteClick, groups }) {
    return (
        <div className="flex flex-col w-full max-h-[9.5rem] h-auto">
            <p className="mx-4 mb-2 text-primary-content">Recents</p>
            <div>
                {groups[4].groupContent.map((note, index) => (
                    <RecentNotesButton
                        key={index}
                        title={note.title}
                        onClick={() => handleSelectNoteClick(note.id)}
                        recentActive={note.id === selectedNoteId}
                    />
                ))}
            </div>
        </div>
    );
}
