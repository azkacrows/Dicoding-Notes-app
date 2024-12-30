/* eslint-disable react/prop-types */
export default function MyCard({ active, title, body, date, onClick }) {
    const activeCard = active ? '!bg-primary/80' : '';
    const cardFullDate = new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div
            className={`card w-auto bg-base-300/40 shadow-2xl ml-4 mr-2 max-h-32 rounded-sm hover:cursor-pointer ${activeCard}`}
            role="button"
            onClick={onClick}
        >
            <div className="w-full gap-1 p-3 card-body">
                <h2 className="text-lg text-white card-title line-clamp-1">{title}</h2>
                <div className="flex flex-col items-start w-full gap-2">
                    <p className="text-base line-clamp-1">{body}</p>
                    <div className="flex flex-row justify-between w-full gap-2">
                        <p className="badge badge-neutral">{cardFullDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
