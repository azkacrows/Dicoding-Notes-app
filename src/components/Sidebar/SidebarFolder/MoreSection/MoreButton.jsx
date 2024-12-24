export default function MoreButton({
    handleSelectGroupClick,
    groupId,
    title,
    icon,
    activeMore = false,
}) {
    return (
        <div className={activeMore ? 'text-white bg-base-200' : ''}>
            <button
                onClick={() => handleSelectGroupClick(groupId)}
                className="flex items-center w-full px-3 py-2 text-current cursor-pointer fill-current"
            >
                <box-icon name={icon}></box-icon>
                <span className="ml-2 truncate max-w-52">{title}</span>
            </button>
        </div>
    );
}
