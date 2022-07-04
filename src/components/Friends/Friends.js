import axios from "axios";
import { useEffect, useState } from "react";
import { BsListNested } from "react-icons/bs";

function Friends() {

  const [users, setUsers] = useState([]);

  const fetchUserProfiles = () => {


    axios
        .get('http://localhost:8080/user/get_all_users')
        .then(res => {
          console.log(res);
          setUsers(res.data)
        });
  }

  useEffect(() => {
    fetchUserProfiles();
  }, []);


// function addFriend(){
//     axios
//         .post()
// }

// function deleteFriend(){
//     axios
//         .post()
// }

// Show output in browser
  
  // Event listeners
  const addFriendButton = () => {
    console.log("friend added!");
  }

  return users.map((user, index) => {

    return (
      <>
      <div key={index}>
      <h1>{user.username}</h1>
      <p>{user.firstname}</p>
      <p>{user.lastname}</p>
      <button onClick={addFriendButton}>Add Friend</button>
      </div>
      </>
  );
    
  })

}

export default Friends;