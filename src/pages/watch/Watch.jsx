import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        Home
      </div>
      <iframe
        src="https://www.youtube.com/embed/mzOilOUWsow?si=SKA9JncgA5GDgAQy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
