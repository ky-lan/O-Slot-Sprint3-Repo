import "./Hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="Hero" src={props.imageName} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <a href={props.url} className={props.btnClass}>
            {props.btnName}
          </a>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
