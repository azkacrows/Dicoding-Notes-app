import NoteHeader from './NoteHeader/NoteHeader';
import NoteDateEditor from './NoteToolbar/NoteDate/NoteDateEditor';
import NoteFolderEditor from './NoteToolbar/NoteFolder/NoteFolderEditor';
import NoteWSIWYGEditor from './NoteToolbar/NoteWSIWYG/NoteWSIWYGEditor';
import NoteBoardEditor from './NoteToolbar/NoteBoard/NoteBoardEditor';

export default function NoteMainEditor() {
    return (
        <div className="flex flex-col w-full h-full p-2">
            <div className="flex flex-col w-full h-full px-8 py-2">
                {/* Header Section */}
                <NoteHeader />
                <div className="flex flex-col w-full">
                    {/* Note Date Section */}
                    <NoteDateEditor />
                    <hr className="my-3" />
                    {/* Note Folder Section */}
                    <NoteFolderEditor />
                    <hr className="mt-3 mb-2" />
                    {/* Note WSIWYG Section */}
                    <NoteWSIWYGEditor />
                    <hr className="mt-2 mb-3" />
                    {/* Note Board Section */}
                    <NoteBoardEditor />
                </div>
            </div>
        </div>
    );
}
