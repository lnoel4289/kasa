import Tag from "./Tag";
import Rating from "./Rating";
import Host from "./Host";

const Presentation = ({ title, location, tags, rating, host }) => {
  return (
    <section className="presentation">
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="tags">
          {tags.map((tag, index) => {
            return <Tag key={index} tag={tag} />;
          })}
        </div>
      </div>
      <div className="host-rating-cont">
        <Rating rating={rating} />
        <Host name={host.name} imgUrl={host.picture} />
      </div>
    </section>
  );
};

export default Presentation;
