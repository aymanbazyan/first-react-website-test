import BarListItem from "./BarListItem";

export default function Sidebar({
  items,
  handleItem,
  sideStatus,
  setSideStatus,
}) {
  return (
    <div className={`sidebar ${sideStatus ? "sidebar-active" : ""}`}>
      <div className="close" onClick={() => setSideStatus(false)}>
        <ion-icon name="close"></ion-icon>
      </div>
      <ul>
        {items.map((item, index) => (
          <BarListItem key={index} item={item} handleItem={handleItem} />
        ))}
      </ul>
    </div>
  );
}
