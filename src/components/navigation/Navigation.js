import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { HomeScreen, ProfileScreen, NotFoundScreen, RegisterScreen } from '../../screens';
import { ConnectedRoute } from '../connected-route/ConnectedRoute';

export const Navigation = () => (
	<BrowserRouter>
		<Switch>
			<ConnectedRoute exact path="/" redirectIfAuthenticated component={HomeScreen} />
			<ConnectedRoute exact path="/register" redirectIfAuthenticated component={RegisterScreen} />
			<ConnectedRoute exact isProtected path="/profiles/:username" component={ProfileScreen} />
			<ConnectedRoute path="*" component={NotFoundScreen} />
		</Switch>
	</BrowserRouter>
);
