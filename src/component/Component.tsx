import React from 'react';

interface IComponent {
	var1: string,
	var2: number,
	var3: boolean
}

export const Component: React.FC<IComponent> = (props) => {

	return (
		<div className="Component">
			<h1>Component Updated</h1>
			<pre>{JSON.stringify(props)}</pre>
		</div>
	);

}
