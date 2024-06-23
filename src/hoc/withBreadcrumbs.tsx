/* eslint-disable @typescript-eslint/no-explicit-any */
import { matchPath } from "react-router";
import { withRouter } from "./withRouter";

export type RouteBreadcrumb = {
  path: string;
  breadcrumb: string | ((props: { match: any }) => any);
};

const renderer = ({ breadcrumb, match }: any) => {
  if (typeof breadcrumb === "function") {
    return breadcrumb({ match });
  }
  return breadcrumb;
};

export const getBreadcrumbs = ({
  routes,
  pathname,
}: {
  routes: RouteBreadcrumb[];
  pathname: string;
}) => {
  const matches: never[] = [];
  const pathnames = pathname.replace(/\/$/, "").split("/").slice(2);

  pathnames.length > 0 &&
    pathnames.reduce((previous: string, current: string) => {
      const pathSection = `${previous}/${current}`;

      let breadcrumbMatch;

      routes.some(({ breadcrumb, path }) => {
        const match = matchPath(path, pathSection);

        if (match) {
          breadcrumbMatch = {
            breadcrumb: renderer({ breadcrumb, match }),
            path,
            match,
          };
          return true;
        }

        return false;
      });

      if (breadcrumbMatch) {
        matches.push(breadcrumbMatch);
      }

      return pathSection;
    }, "");
  return matches;
};

export const withBreadcrumbs =
  (routes: RouteBreadcrumb[]) => (Component: any) =>
    withRouter((props: any) => (
      <Component
        {...props}
        breadcrumbs={getBreadcrumbs({
          pathname: props.router.location.pathname,
          routes,
        })}
      />
    ));
