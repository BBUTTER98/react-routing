import { useState, useEffect } from "react";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import useSort from "../hooks/useSort";

function SortableTable(props) {
  const { data, config } = props;

  const [prevSortedData, setPrevSortedData] = useState(null);
  const { sortBy, sortOrder, handleChange, sortedData } = useSort({
    data: prevSortedData || data,
    config
  });
  useEffect(() => {
    if (sortedData !== prevSortedData) {
      setPrevSortedData(sortedData);
    }
  }, [sortedData, prevSortedData]);
	function getIcons(label, sortBy, sortOrder) {
		if (label !== sortBy) {
			return (
				<div>
					<GoArrowSmallUp />
					<GoArrowSmallDown />
				</div>
			);
		}
		if (sortOrder === null) {
			return (
				<div>
					<GoArrowSmallUp />
					<GoArrowSmallDown />
				</div>
			);
		} else if (sortOrder === "asc") {
			return (
				<div>
					<GoArrowSmallUp />
				</div>
			);
		} else if (sortOrder === "desc") {
			return (
				<div>
					<GoArrowSmallDown />
				</div>
			);
		}
	}
	const updatedConfig = config.map((item) => {
		if (item.sortValue) {
			return {
				...item,
				header: () => (
					<th className="cursor-pointer hover:bg-gray-100" onClick={() => handleChange(item.label)}>
						<div className="flex items-center">
                        {getIcons(item.label,sortBy,sortOrder)}
						{item.label}
                        </div>
					</th>
				),
			};
		}
		return item;
	});
	
	return (
		<div>
			<Table {...props} data={sortedData} config={updatedConfig} />
		</div>
	);
}
export default SortableTable;
