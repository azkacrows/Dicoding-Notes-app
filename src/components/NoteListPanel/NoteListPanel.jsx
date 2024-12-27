import { useState, useEffect } from 'react';

// fragment
import NoteListItem from './NoteListItem';
import NoteListSorterButton from './NoteListSorterButton';
import NoteListEmpty from './NoteListEmpty';

// utils
import { sortNotes } from '../../utils/logic';

export default function NoteListPanel({
    notes,
    searchedNotes,
    selectedNoteId,
    handleSelectNoteClick,
    groups,
    selectedGroupId,
}) {
    const [sortOrder, setSortOrder] = useState('asc');

    let selectedGroup = groups.find((group) => group.groupId === selectedGroupId);
    // let selectedNote = selectedGroup.groupContent.find((note) => note.id === selectedNoteId);
    // const sortedNotes = sortNotes(displayedNotes, sortOrder);
    // console.log(selectedGroup.groupContent);

    if (searchedNotes) {
        selectedGroup = searchedNotes;
    }

    function handleShortOrder() {
        setSortOrder('des');
    }
    return (
        <div className="flex flex-col w-full h-full">
            {selectedGroup.groupContent.length > 0 ? (
                <>
                    <div className="flex flex-row justify-between mx-4 mt-5 mb-2">
                        <h1 className="text-2xl font-medium text-white">
                            {selectedGroup.groupName}
                        </h1>
                        <NoteListSorterButton
                            descending={sortOrder === 'des' ? descending : null}
                            onClick={handleShortOrder}
                        />
                    </div>
                    <div className="flex flex-col gap-5 overflow-y-auto">
                        <NoteListItem
                            active
                            title="Reflection on the Month of June"
                            body="It's hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me."
                            date={new Date()}
                        />
                    </div>
                </>
            ) : (
                <NoteListEmpty />
            )}
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
