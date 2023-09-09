export default function BarListItem({ item, handleItem }) {
  return (
    <li onClick={() => handleItem(item)}>
      <a href={`#${item.name.replace(" ", "")}`}>
        {item.name}
        <ion-icon
          name={`${item.icon}${item.selected ? "" : "-outline"}`}
        ></ion-icon>
      </a>
    </li>
  );
}
