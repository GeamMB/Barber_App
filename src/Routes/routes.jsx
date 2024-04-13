import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "../Components/Login/Login";
import Registro from "../Components/Registro/Registro";
import Home from "../Components/Home";
import NotFound from "../Components/NotFound";

export default function AppRoutes() {
	function PrivateRoute({ children }) {
		const isAuthenticated = localStorage.getItem("BS_Auth");

		if (isAuthenticated === "true") {
			return children;
		} else {
			return <Navigate to="/" />;
		}
	}

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/registrar" element={<Registro />} />
					<Route
						path="/home"
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
