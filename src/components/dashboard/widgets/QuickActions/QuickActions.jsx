import DashboardWidget from "../../DashboardWidget";
import QuickActionCard from "./QuickActionCard";
import { QUICK_ACTIONS } from "./actions";

const QuickActions = () => {
  return (
    <DashboardWidget
      title="Action Center"
      subtitle="Frequently used shortcuts"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {QUICK_ACTIONS.map((action) => (
          <QuickActionCard
            key={action.id}
            action={action}
          />
        ))}
      </div>
    </DashboardWidget>
  );
};

export default QuickActions;