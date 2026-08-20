import Icon from "./icons/Icon";

const CheckOutPage = ({ onBack }) => {
  return (
    <button className="btn btn--ghost btn--back" onClick={() => onBack()}>
      <Icon id={"arrow-left-icon"} /> Back To Menu
    </button>
  );
};

export default CheckOutPage;
