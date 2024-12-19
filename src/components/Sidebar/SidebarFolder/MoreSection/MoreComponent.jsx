import MoreButton from './MoreButton';

export default function MoreComponent({ activeGroupId }) {
    return (
        <div>
            <div className="flex flex-row justify-between m-4 mb-2 text-primary-content">
                <p>More</p>
            </div>
            <div className="lg:max-2xl:h-[7.5rem] h-[4.8rem] overflow-y-auto">
                <MoreButton title="Favorites" icon="star" activeMore />
                <MoreButton title="Archived Notes" icon="box" />
                <MoreButton title="Trash" icon="trash" />
            </div>
        </div>
    );
}
