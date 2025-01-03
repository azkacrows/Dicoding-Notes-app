import NoteHeaderButton from './NoteHeaderButton';

export default function NoteHeader({ title }) {
    return (
        <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <NoteHeaderButton />
        </div>
    );
}
