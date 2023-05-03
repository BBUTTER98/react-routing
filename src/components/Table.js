function Table({ data, config }) {
	const headers = config.map(({ label, header }) =>{
		if(header){
			return header(label);
		}
		return <th key={label}>{label}</th>
	});
	const rows = data.map((data) => {
		return (
			<tr className="border-b" key={data.name}>
				{config.map((object) => (
					<td key={object.label} className="text-xl px-10 py-7">{object.render(data)}</td>
				))}
			</tr>
		);
	});
	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="text-xl border-b-2">{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
export default Table;
