import tableConfig from "../configs/tableConfig";
import Link from "./Link";
function SideBar(){
    
    const links = [
        {label: 'Dropdown',direction:'/'},
        {label: 'Button Page',direction:'/button'},
        {label: 'Accordion Page',direction:'/accordion'},
        {label: 'Modal Window',direction:'/modal'},
        {label: 'Table',direction:'/table'},
        {label: 'Couter',direction:'/counter'},
    ];
    const linkList = links.map(({label,direction})=>{
    return <Link className='mb-3' activeClassName='font-bold border-l-4 border-blue-500 pl-2' key={label} to={direction}>{label}</Link>
    })
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {linkList}
        </div>
    )
}
export default SideBar;