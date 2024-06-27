import s from "../FriendListItem/FriendListItem.module.css";

function FriendListItem({avatar, name, isOnline}) {
    const availability = isOnline ? s.online : s.offline;
    return (
        <div>
            <img className={s.avatar} src={avatar} alt="Avatar" width="48"/>
            <p className={s.name}>{name}</p>
            <p className={availability}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>

    );
}

export default FriendListItem;