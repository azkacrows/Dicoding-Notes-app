export default function SearchBox({ handleSearchNote, value }) {
    return (
        <input
            className="w-full h-8 max-w-xs input input-bordered"
            placeholder="Type Something..."
            onChange={handleSearchNote}
            value={value}
            type="text"
            aria-label="Search input"
        />
    );
}
