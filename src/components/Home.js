import { useState } from "react";
import AudioPreview from "./AudioPreview";

const homeContent = [
  {
    title: "coooool audio ver recomend",
    author: "Jamab jamolaaaa",
    duration: "03:10",
    image:
      "https://media.istockphoto.com/id/131723828/vector/on-patrol.jpg?s=612x612&w=0&k=20&c=iBZUXNi_AJjhtxqJfwcrIFhtKR1Oj9Dlfc21N_fyx4c=",
    url: "https://ia902709.us.archive.org/8/items/20230722_20230722_1516/%D9%85%D8%A7%20%D9%87%D9%85%20%D8%A8%D8%A3%D9%85%D8%A9%20%D8%A7%D8%AD%D9%85%D8%AF.mp3",
    id: "1",
  },
  {
    title: "toxinaaaa topxin",
    author: "Jamab jamolaaaa",
    duration: "05:11",
    image: "https://i1.sndcdn.com/avatars-J2DJT6ywqe0hZFNx-ek2h1g-t500x500.jpg",
    url: "https://ia802709.us.archive.org/8/items/20230722_20230722_1516/%D9%85%D8%A7%D8%B6%20%D9%83%D8%A7%D9%84%D8%B3%D9%8A%D9%81.mp3",
    id: "2",
  },
];

let curItem, curAuido;
export default function Home() {
  const [items, setItems] = useState(homeContent);

  function playAudio() {
    curAuido.play();
    setItems((items) =>
      items.map((item) =>
        item.id === curItem.id
          ? { ...item, playing: true }
          : { ...item, playing: false }
      )
    );
  }

  function pauseAudio() {
    curAuido.pause();
    setItems((items) =>
      items.map((item) =>
        item.id === curItem.id
          ? { ...item, playing: false }
          : { ...item, playing: false }
      )
    );
  }

  function PlayItem(item) {
    if (!curItem) {
      curItem = item;
      curAuido = new Audio(item.url);
      playAudio();

      return;
    }

    if (item.id !== curItem?.id) {
      pauseAudio();

      curItem = item;
      curAuido = new Audio(item.url);
      playAudio();

      return;
    }

    if (isPlaying(curAuido)) pauseAudio();
    else {
      playAudio();
    }
  }

  function isPlaying(audio) {
    return !audio.paused;
  }

  return (
    <div className="home">
      <ul className="home__list">
        {items.map((item) => (
          <AudioPreview key={item.id} item={item} PlayItem={PlayItem} />
        ))}
      </ul>
    </div>
  );
}
