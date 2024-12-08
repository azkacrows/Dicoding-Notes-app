import NoteHeaderButton from './NoteHeaderButton';

export default function NoteHeader() {
    return (
        <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Reflection on the Month of June</h1>
            <NoteHeaderButton />
        </div>
    );
}
