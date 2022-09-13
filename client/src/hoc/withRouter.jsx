import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams
  } from "react-router-dom";
  
  export const  withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      const [search] = useSearchParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params, search }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }