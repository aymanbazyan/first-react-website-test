import BarListItem from "./BarListItem";

export default function Navbar({
  items,
  handleItem,
  sideStatus,
  setSideStatus,
}) {
  return (
    <div className="navbar">
      <h3 className="logo">
        React
        {/* <ion-icon name="logo-react"></ion-icon> */}
        <i className="fa-solid fa-person-rifle"></i>
        App!
      </h3>
      <ul>
        {items.map((item, index) => (
          <BarListItem key={index} item={item} handleItem={handleItem} />
        ))}
      </ul>
      <div className="menu" onClick={() => setSideStatus(!sideStatus)}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </div>
  );
}
