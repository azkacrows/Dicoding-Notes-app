import { useState, useEffect, useRef } from 'react';

// fragment
import SearchBox from './SearchBox';
import SearchButton from './SearchButton';
import NewNoteButton from './NewNoteButton';

export default function HeaderComponent() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchBoxRef = useRef(null);

    const handleSearchClick = () => {
        setIsSearchActive(true);
    };

    const handleOutsideClick = (e) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
            setIsSearchActive(false);
        }
    };

    // this state search value
    const handleSearchChange = (value) => {
        setSearchValue(value);
        console.log(value);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-between m-4 mt-5 text-white">
                {isSearchActive ? (
                    <div className="w-full" ref={searchBoxRef}>
                        <SearchBox onChange={handleSearchChange} />
                    </div>
                ) : (
                    <>
                        <h1 className="relative flex font-serif text-2xl font-bold">
                            Nowted
                            <span className="absolute fill-current -top-1 -right-7">
                                <box-icon name="pencil" animation="tada"></box-icon>
                            </span>
                        </h1>
                        <SearchButton onClick={handleSearchClick} />
                    </>
                )}
            </div>
            <div className="flex flex-row items-center justify-center my-4 text-white">
                <NewNoteButton />
            </div>
        </div>
    );
}
