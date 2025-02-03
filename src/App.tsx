import { useEffect, useState } from "react";
import "./App.css";
import EmployeeCard from "./components/EmployeeCard";

//

type EmployeeI = {
	name: {
		first: string;
		last: string;
	};
	email: string;
	picture: {
		medium: string;
	};
};

function App() {
	const [newEmployees, setEmployees] = useState<EmployeeI | null>(null);

	useEffect(() => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log(data.result[0]);
				setEmployees(data.result[0]);
			});
	}, []);

	return (
		<>
			{/* {newEmployees.map((employee) => (
				<EmployeeCard
					key={newEmployees.indexOf(employee)}
					employee={employee}
				/>
			))} */}
			<section>
				<p> {`${newEmployees?.name.first} ${newEmployees?.name.last}`}</p>
				<img src={newEmployees?.picture.medium} alt="" />
				<p>{newEmployees?.email} </p>
			</section>
		</>
	);
}

export default App;
