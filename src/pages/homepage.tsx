import { Card, CardContent, CardHeader } from "@mui/material";
import { useGetIdentity } from "react-admin";

export const Homepage = () => {
  const { identity, isPending } = useGetIdentity();

  if (isPending) return <div>Loading...</div>;

  return (
    <Card>
      <CardHeader title="Welcome to the admin dashboard" />
      <CardContent>
        Hello, {identity?.fullName}! This is the homepage of your admin
        dashboard.
      </CardContent>
    </Card>
  );
};

export default Homepage;
