import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListMahasiswa from './pages/ListMahasiswa';
import CreateMahasiswa from './pages/CreateMahasiswa';
import EditMahasiswa from "./pages/EditMahasiswa";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/list-mahasiswa" element={<App />}>
					<Route index element={<ListMahasiswa />} />
					<Route path="create" element={<CreateMahasiswa />} />
					<Route path="edit/:index" element={<EditMahasiswa />} />
				{/* <Route path="teams" element={<Teams />}>
					<Route path=":teamId" element={<Team />} />
					<Route path="new" element={<NewTeamForm />} />
					<Route index element={<LeagueStandings />} />
				</Route> */}
				</Route>
				<Route
					path="*"
					element={<Navigate to="/list-mahasiswa" replace />}
				/>
			</Routes>
		</BrowserRouter>
  	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
