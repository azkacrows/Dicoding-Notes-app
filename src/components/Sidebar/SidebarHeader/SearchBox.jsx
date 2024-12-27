export default function SearchBox({ onChange, value }) {
    const handleInputChange = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <input
            className="w-full h-8 max-w-xs input input-bordered"
            placeholder="Type Something..."
            onChange={handleInputChange}
            value={value}
            type="text"
            aria-label="Search input"
        />
    );
}
