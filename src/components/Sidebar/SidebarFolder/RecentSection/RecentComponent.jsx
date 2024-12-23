import RecentNotesButton from './RecentNotesButton';

export default function RecentComponent({ groups }) {
    return (
        <div className="flex flex-col w-full h-[9.5rem]">
            <p className="mx-4 mb-2 text-primary-content">Recents</p>
            <div>
                {/* <RecentNotesButton
                    recentActive={activeNoteId}
                    title={notes ? notes[0].title : ''}
                /> */}
                {groups[4].groupContent.map((note, index) => (
                    <RecentNotesButton title={note.title} key={index} />
                ))}
            </div>
        </div>
    );
}
