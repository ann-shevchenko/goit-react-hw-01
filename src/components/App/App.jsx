import './App.css';
import "modern-normalize";
import Profile from "../Profile/Profile.jsx";
import userData from "../../data/userData.json"
import friends from "../../data/friends.json"
import transactions from "../../data/transactions.json"
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";

const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};


export default App
