import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ProtectedRoutes, Home, HomePage, PokemonPage, SearchPage } from './pages';

export const AppRouter = () => {

	const name = useSelector (state => state.username)

	return (
		<Routes>
			


			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};
