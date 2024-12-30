export default function RecentNotesButton({ title, onClick, recentActive = false }) {
    let aktifRecent = recentActive ? 'bg-[#312EB5] text-white' : '';
    return (
        <div className={aktifRecent} role="button" onClick={onClick}>
            <button className="flex items-center w-full px-3 py-2 text-current cursor-pointer fill-current">
                <box-icon name="file"></box-icon>
                <span className="ml-2 truncate max-w-52">{title}</span>
            </button>
        </div>
    );
}
