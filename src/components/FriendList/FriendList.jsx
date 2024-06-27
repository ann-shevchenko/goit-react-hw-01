import React from "react";
import s from "./FriendList.module.css";


import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({friends}) => {
    return (
        <ul className={s.container}>
            {friends.map((friend) => {
                return <li className={s.containerItem} key={friend.id}>
                    <FriendListItem avatar={friend.avatar}
                                    name={friend.name}
                                    isOnline={friend.isOnline}/>
                </li>;
            })}
        </ul>
    );
}


export default FriendList;