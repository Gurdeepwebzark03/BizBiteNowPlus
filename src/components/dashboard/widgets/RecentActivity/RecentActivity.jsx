import { Link } from "react-router-dom";
import DashboardWidget from "../../DashboardWidget";
import EmptyState from "../../../UI/EmptyState";
import ActivityItem from "./ActivityItem";
import { activities } from "../../../../data/dashboardData";

const RecentActivity = () => {
  return (
    <DashboardWidget
      title="Recent Activity"
      subtitle="Latest updates from your business"
      action={
        <Link
          to="/seller/activity"
          className="text-sm font-medium text-[#1A4D2E] hover:underline"
        >
          View All
        </Link>
      }
    >
      {activities.length === 0 ? (
        <EmptyState
          title="No activity yet"
          description="Business activity will appear here."
        />
      ) : (
        <div>
          {activities.map((activity, index) => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              isLast={index === activities.length - 1}
            />
          ))}
        </div>
      )}
    </DashboardWidget>
  );
};

export default RecentActivity;