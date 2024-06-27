import s from "./Profiles.module.css";

function Profile({name, tag, location, image, stats}) {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <img className={s.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={s.name}>{name}</p>
                <p className={s.text}>@{tag}</p>
                <p className={s.text}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span>Followers</span>
                    <span className={s.statsText}>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span className={s.statsText}>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span className={s.statsText}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
}

export default Profile;