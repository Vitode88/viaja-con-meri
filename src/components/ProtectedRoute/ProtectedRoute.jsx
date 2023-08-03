import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { authed } = useAuth();

  return authed ? <>{children}</> : <p>No se ha podido acceder</p>;
};

export default ProtectedRoute;
