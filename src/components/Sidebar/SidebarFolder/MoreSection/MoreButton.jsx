export default function MoreButton({ title, icon, activeMore = false }) {
    let moreAktif = activeMore ? 'text-white bg-base-200' : '';
    return (
        <div className={moreAktif}>
            <button className="flex items-center w-full px-3 py-2 text-current cursor-pointer fill-current">
                <box-icon name={icon}></box-icon>
                <span className="ml-2 truncate max-w-52">{title}</span>
            </button>
        </div>
    );
}
