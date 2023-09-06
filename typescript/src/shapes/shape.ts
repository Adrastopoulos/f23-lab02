interface Shape {
		computeArea(): number;
		[extraProps: string]: any;
}