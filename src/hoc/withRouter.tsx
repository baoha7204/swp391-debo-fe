import { FunctionComponent } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter<ComponentProps>(
  Component: FunctionComponent<ComponentProps>
) {
  function ComponentWithRouterProp(props: ComponentProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
