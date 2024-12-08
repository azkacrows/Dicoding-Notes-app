// fragment
import NoteListItem from './NoteListItem';
import NoteListSorterButton from './NoteListSorterButton';

export default function NoteListPanel() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row justify-between mx-4 mt-5 mb-2">
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
        </div>
    );
}
