import { useState, useRef } from 'react';

import SearchBox from './SearchBox';
import SearchButton from './SearchButton';
import NewNoteButton from './NewNoteButton';

export default function HeaderComponent({ handleCreateNote, searchQuery, onSearchChange }) {
    const [searchActive, setSearchActive] = useState(false);
    const searchBoxRef = useRef(null);

    const handleSearchBlur = (e) => {
        // Tutup SearchBox jika fokus berpindah ke luar
        if (!searchBoxRef.current.contains(e.relatedTarget)) {
            setSearchActive(false);
        }
    };

    const searchButtonClicked = () => {
        setSearchActive(true);
    };

    return (
        <div>
            <div className="flex flex-row justify-between m-4 mt-5 text-white">
                {searchActive ? (
                    <div className="w-full" ref={searchBoxRef} onBlur={handleSearchBlur}>
                        <SearchBox onChange={onSearchChange} value={searchQuery} autoFocus />
                    </div>
                ) : (
                    <>
                        <h1 className="relative flex font-serif text-2xl font-bold">
                            Nowted
                            <span className="absolute fill-current -top-1 -right-7">
                                <box-icon name="pencil" animation="tada"></box-icon>
                            </span>
                        </h1>
                        <SearchButton onClick={searchButtonClicked} />
                    </>
                )}
            </div>
            <div className="flex flex-row items-center justify-center my-4 text-white">
                <NewNoteButton handleCreateNote={handleCreateNote} />
            </div>
        </div>
    );
}
