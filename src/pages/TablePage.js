import SortableTable from "../components/SortableTable";
import tableConfig from "../configs/tableConfig";
function TablePage(){
    const config = tableConfig();
    const data = [
        {name:'orange', color:'bg-orange-500',score: 5},
        {name:'blue', color:'bg-blue-500',score: 5},
        {name:'green', color:'bg-green-500',score: 7},
        {name:'red', color:'bg-red-500',score: 2},
        {name:'indigo', color:'bg-indigo-500',score: 4},
    ];
    return <SortableTable data={data} config={config} />
}
export default TablePage;
//state jako tabelka inicjacja
//update state za kazdym sortowaniem
//uzywaj stanu do wyswietlenia tabelki