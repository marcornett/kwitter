import React from 'react';

/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/
import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner = () => (
	<Dimmer active>
		<Loader size="huge" content={'Preparing Content...'} />
	</Dimmer>
);

export default Spinner;
