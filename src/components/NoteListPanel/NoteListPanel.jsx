import { useState } from 'react';

// fragment
import NoteListItem from './NoteListItem';
import NoteListSorterButton from './NoteListSorterButton';
import NoteListEmpty from './NoteListEmpty';

export default function NoteListPanel({
    notes,
    searchedNotes,
    selectedNoteId,
    handleSelectNoteClick,
    groups,
    selectedGroupId,
}) {
    const [sortOrder, setSortOrder] = useState('asc');

    const groupSource = selectedGroupId
        ? groups.find((group) => group.groupId === selectedGroupId)
        : null;

    function notesToDisplay() {
        const notesToUse =
            Array.isArray(searchedNotes) && searchedNotes.length > 0 ? searchedNotes : notes;

        return notesToUse.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.id - b.id; // ascending
            } else {
                return b.id - a.id; // descending
            }
        });
    }

    function handleSortOrder() {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'des' : 'asc'));
    }
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between mx-4 mt-5 mb-2">
                <h1 className="text-2xl font-medium text-white">{groupSource?.groupName}</h1>
                <NoteListSorterButton onClick={handleSortOrder} descending={sortOrder === 'des'} />
            </div>
            {notesToDisplay().length > 0 ? (
                <div className="flex flex-col gap-5 overflow-y-auto">
                    {notesToDisplay().map((note) => (
                        <NoteListItem
                            key={note.id}
                            active={note.id === selectedNoteId}
                            title={note.title}
                            body={note.body}
                            date={note.createdAt}
                            onClick={() => handleSelectNoteClick(note.id)}
                        />
                    ))}
                </div>
            ) : (
                <NoteListEmpty />
            )}
        </div>
    );
}
