import { useEffect, useState } from "react";
import { dummyEmployeeDashboardData } from "../assets/assets";
import Loading from "../components/Loading";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyEmployeeDashboardData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">
        Failed to load dashobard
      </p>
    );
  if (data.role === "ADMIN") {
    return <div>admin dashboard</div>;
  } else {
    return <div>employee dashboard</div>;
  }

  // return (
  //   <div>
  //       Dashobard
  //   </div>
  // )
};

export default Dashboard;
