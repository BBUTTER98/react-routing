import { useState } from "react";
function useSort(props){
    const {config, data} = props;
    let sortedData;
    const [sortOrder, setSortOrder] = useState(null);
	const [sortBy, setSortBy] = useState(null);
    const handleChange = (label) => {
		if (label !== sortBy) {
			setSortBy(label);
			setSortOrder("asc");
		} else {
			setSortOrder((prevOrder) => {
				if (prevOrder === null) {
					setSortBy(label);
					return "asc";
				} else if (prevOrder === "asc") {
					setSortBy(label);
					return "desc";
				}
				setSortBy(null);
				return null;
			});
		}
	};
    if (sortBy && sortOrder) {
		const { sortValue } = config.find((column) => column.label === sortBy);
		sortedData = [...data];
		sortedData.sort((a, b) => {
			const valueA = sortValue(a);
			const valueB = sortValue(b);
			const reverseOrder = sortOrder === "asc" ? 1 : -1;
			if (typeof valueA === "number") {
				return (valueA - valueB) * reverseOrder;
			} else {
				return valueA.localeCompare(valueB) * reverseOrder;
			}
		});
	}
    else{
        sortedData = data;
    }
    return {sortBy, sortOrder, handleChange, sortedData}
}
export default useSort;