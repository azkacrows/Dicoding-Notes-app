import NoteHeaderButton from './NoteHeaderButton';

export default function NoteHeader({ title, onChange }) {
    return (
        <div className="flex flex-row items-center justify-between">
            <input
                name="title"
                value={title}
                onChange={onChange}
                type="text"
                className="text-2xl font-bold text-white"
            />
            <NoteHeaderButton />
        </div>
    );
}
