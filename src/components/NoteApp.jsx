import { useEffect, useState } from 'react';

// fragmet
import Sidebar from './Sidebar/SideBar';
import NoteListPanel from './NoteListPanel/NoteListPanel';
import NoteMainEditor from './NoteEditorPanel/NoteMainEditor';

// utils
import { getInitialData, showFormattedDate } from '../utils';

export default function NoteApp() {
    return (
        <div className="container flex min-w-full min-h-screen">
            <div className="flex flex-row w-2/5">
                <div className="flex flex-col w-1/2 h-screen">
                    <Sidebar notes={notes} />
                </div>
                <div className="flex flex-col w-1/2 h-screen bg-base-200">
                    <NoteListPanel notes={notes} />
                </div>
            </div>
            <div className="flex flex-col items-center w-3/5 h-screen">
                <NoteMainEditor notes={notes} />
            </div>
        </div>
    );
}
