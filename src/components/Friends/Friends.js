import axios from "axios";
import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";
import './Friends.css';
import { ReactComponent as SearchIcon } from '../../components/assets/images/search.svg';

function Friends({userLoggedIn}) {

  const mockUsername = "thelifeandtimesofnaeem"

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState([]);
  const [ friends, setFriends ] = useState([]);
  
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

  const deleteFriend = async (e) => {
    const username = e.target.value;
    try {
      const friends = await axios
          .delete(`http://localhost:8080/friend/deleteFriend/${mockUsername}/${username}`)
          const data = friends.data;
          setFriends(data)
          console.log("friend deleted");
    } catch (err) {
      setFriends([])
    }
  }

const addFriend = async (fA) => {

  const currentUserUsername = userLoggedIn.username;
  try {
    const friends = await axios
        .post(`http://localhost:8080/friend/addFriend/${currentUserUsername}/${fA.username}`)
        const data = friends.data;
        setFriends(data)
        document.getElementById(`${fA.id}addFriendBtn`).innerHTML = "Added";
  } catch (err) {
    setFriends([])
    document.getElementById(`${fA.id}friendBTNclick`).innerHTML = `${err.response.data.message}`;
  }
}

// function deleteFriend(){
//     axios
//         .post()
// }

// Show output in browser
  
  // Event listeners


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
                    <div key={index} id="one-user">
                      <div id="user-p-container">
                      <div className="search-user-image-container">
                        <img src={user.imgURL} alt="" className="user-image-style"/>
                      </div>
                      <h1 id="headingUser">{user.firstname} {user.lastname}</h1>
                        <p id="pUsername">{user.username}</p>

                      <button id="addFriendBtn" onClick={() => addFriend(user)}>Add Friend</button>

                        
                      </div>
                      <div className="err-return">
                      <p id={`${user.id}friendBTNclick`} className="friendBtnclick"></p>
                      </div>
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