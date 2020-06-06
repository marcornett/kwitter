import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { HomeScreen, ProfileScreen, NotFoundScreen } from '../../screens';
import { ConnectedRoute } from '../connected-route/ConnectedRoute';
import { Register } from '../register/Register';

export const Navigation = () => (
	<BrowserRouter>
		<Switch>
			<ConnectedRoute exact path="/" redirectIfAuthenticated component={HomeScreen} />
			<ConnectedRoute exact path="/register" redirectIfAuthenticated component={Register} />
			<ConnectedRoute exact isProtected path="/profiles/:username" component={ProfileScreen} />
			<ConnectedRoute path="*" component={NotFoundScreen} />
		</Switch>
	</BrowserRouter>
);
