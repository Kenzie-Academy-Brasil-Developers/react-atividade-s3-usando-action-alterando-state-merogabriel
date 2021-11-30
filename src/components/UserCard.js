import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/modules/user/actions";

const UserCard = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const newName = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(name));
  };

  return (
    <div>
      <h2>Username: {newName.name}</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
