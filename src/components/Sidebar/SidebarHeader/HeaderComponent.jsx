import SearchBox from './SearchBox';
import SearchButton from './SearchButton';
import NewNoteButton from './NewNoteButton';

export default function HeaderComponent({ handleCreateNote }) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mt-5 text-white">
                {/* <div className="w-full" >
                        <SearchBox />
                     </div> */}

                <h1 className="relative flex font-serif text-2xl font-bold">
                    Nowted
                    <span className="absolute fill-current -top-1 -right-7">
                        <box-icon name="pencil" animation="tada"></box-icon>
                    </span>
                </h1>
                <SearchButton />
            </div>
            <div className="flex flex-row items-center justify-center my-4 text-white">
                <NewNoteButton onAddNote={handleCreateNote} />
            </div>
        </div>
    );
}
