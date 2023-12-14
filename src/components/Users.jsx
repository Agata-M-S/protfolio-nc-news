import { useContext, useEffect, useState } from "react";
import { getAllUsers } from "./utils";
import { UserContext } from "../contexts/userContext";

export const Users = () => {
	const [users, setUsers] = useState([]);
	const { user, setUser } = useContext(UserContext);
	const [className, setClassName] = useState("hidden");
  const [isLoading, setIsLoading] =useState(true)
	useEffect(() => {
		getAllUsers().then(({ users }) => {
      setIsLoading(false)
			setUsers(users);
		});
	}, []);
  if (isLoading) {return <p>loading users</p>}
	return (
		<div className="flex">
			<select
				defaultValue={""}
				form="users"
				onChange={(e) => {
					console.log(e);
					setClassName("show");
					setUser(e.target.value);
				}}
			>
				<option value={""} disabled>
					select user
				</option>

				{users.map((user) => {
					return (
						<option key={user.username} value={user.username}>
							{user.username}
						</option>
					);
				})}
			</select>
			<p className={className}>logged in as: {user}</p>
		</div>
	);
};
