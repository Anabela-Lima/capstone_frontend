import axios from "axios";
import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import './Friends.css';
import { ReactComponent as SearchIcon } from '../../components/assets/images/search.svg'

function Friends() {

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const [currentUserUsername, setCurrentUserUsername] = useState([]);
  const [friendToAddUsername, setFriendToAddUsername] = useState([]);

  const fetchUserProfiles = () => {


    axios
        .get('http://localhost:8080/user/get_all_users')
        .then(res => {
          console.log(res);
          setUsers(res.data)
        });
  }

  useEffect(() => {
    // fetchUserProfiles();
    searchUsers('scott');
  }, []);


  const searchUsers = async (e) => {
    const username = e.target.value;
    console.log(username)
    try {
      const users = await axios.get(`http://localhost:8080/user/getUserByUserName/${username}`)
      const data = users.data;
      setUsers(data)
    }
    catch (err) {
      setUsers([])
      console.log(err)
    }
  }


const addFriend = (currentUserUsername, friendToAddUsername) => {
    axios
        .post(`http://localhost/friend-controller/addFriend/${currentUserUsername}/${friendToAddUsername}`)
        .then(res => console.log(res)).catch(err => console.log(err))
}

// function deleteFriend(){
//     axios
//         .post()
// }

// Show output in browser
  
  // Event listeners
  const addFriendButton = () => {
    addFriend();
  }


    return (
      <>  
        <div id="search-page-container">
          <div id="search-users-container">
            <div id="search-users-searchbox-icon-container">
              <SearchIcon id="search-users-search-icon"/>
            </div>
            <div id="search-users-searchbox-background"></div>
            <input 
              type="text" 
              id="search-users-searchbox" 
              onChange={searchUsers}
                placeholder="Search Users..."
              />
          </div>
          <div id="users-list">
              {
                users.map((user, index) => {
                  return (
                    <div key={index} className="one-user">
                      <div className="search-user-image-container">
                        <img src={user.imgURL} alt="" className="user-image-style"/>
                      </div>
                      <h1 id="headingUser">{user.firstname} {user.lastname}</h1>
                        <p id="pUsername">{user.username}</p>
                      <button id="addFriendBtn"onClick={addFriendButton}>Add Friend</button>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </>
  );

}

export default Friends;