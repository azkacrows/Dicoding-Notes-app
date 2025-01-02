export default function SearchBox({ onChange }) {
    return (
        <input
            className="w-full h-8 max-w-xs input input-bordered"
            placeholder="Type Something..."
            onChange={(e) => onChange(e.target.value)}
            type="text"
            aria-label="Search input"
        />
    );
}
