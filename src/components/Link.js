import useNavigationContext from "../hooks/ContextHook";
import classNames from "classnames";
function Link({to, children, className, activeClassName}){
    const { navigate, currentPath } = useNavigationContext();
    const handleClick = (e) =>{
        if(e.ctrlKey || e.metaKey){
            return;
        }
        e.preventDefault();
        navigate(to);
    }
    const classes = classNames('text-blue-500',className,
    currentPath=== to && activeClassName);
    return(
        <a href={to} onClick={handleClick} className={classes}>
            {children}
        </a>
    )
}
export default Link;