const VEG_COLOR = "#E8622D";
const NON_VEG_COLOR = "#8B2E2E";

const FoodTypeIndicator = ({ isVeg }) => {
  const color = isVeg ? VEG_COLOR : NON_VEG_COLOR;
  return (
    <span
      className="shrink-0 flex items-center justify-center rounded-sm"
      style={{ width: "14px", height: "14px", border: `1.5px solid ${color}` }}
    >
      {isVeg ? (
        <span className="rounded-full" style={{ width: "6px", height: "6px", backgroundColor: color }} />
      ) : (
        <span
          style={{
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderBottom: `7px solid ${color}`,
          }}
        />
      )}
    </span>
  );
};

export default FoodTypeIndicator;
