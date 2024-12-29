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

    console.log(groupSource);

    function notesToDisplay() {
        if (searchedNotes !== null && searchedNotes.length > 0) {
            return searchedNotes;
        } else {
            return notes;
        }
    }

    function handleSortOrder() {
        notesToDisplay().sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.id - b.id;
                setSortOrder('desc');
            } else {
                return b.id - a.id;
                setSortOrder('asc');
            }
        });
    }
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between mx-4 mt-5 mb-2">
                <h1 className="text-2xl font-medium text-white">{groupSource?.groupName}</h1>
                <NoteListSorterButton onClick={handleSortOrder} descending={sortOrder === 'desc'} />
            </div>
            {/* <div className="flex flex-row justify-between mx-4 mt-5 mb-2">
                <h1 className="text-2xl font-medium text-white">Personal</h1>
                <NoteListSorterButton />
            </div>
            <div className="flex flex-col gap-5 overflow-y-auto">
                <NoteListItem
                    active
                    title="Reflection on the Month of June"
                    body="It's hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me."
                    date={new Date()}
                />
            </div>
            <NoteListEmpty /> */}
        </div>
    );
}
