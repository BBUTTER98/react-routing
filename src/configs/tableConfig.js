function tableConfig() {
	const config = [
		{ label: "Name", render: (object) => object.name, sortValue: (object)=>object.name },
		{
			label: "Color",
			render: (object) => <div className={`px-3 py-2 ${object.color}`}></div>,
		},
		{
			label: "Score",
			render: (object) => object.score,
            sortValue: (object) => object.score
		},
	];
	return config;
}
export default tableConfig;
