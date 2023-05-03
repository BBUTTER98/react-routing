import useNavigationContext from "../hooks/ContextHook";
function Route({path,children}){
    const { currentPath } = useNavigationContext();
    if(path===currentPath){
        return children;
    }
    return null;
}
export default Route;