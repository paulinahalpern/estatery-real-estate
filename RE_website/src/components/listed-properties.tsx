import classes from "./listed-properties.module.scss";
import properties from "./data.tsx";

export function ListedProperties() {
  return (
    <>
      {properties.map((property, index) => (
        <div key={index} className={classes["single-property"]}>
          <img src={property.img} className={classes["property-img"]} />
          <div className={classes["single-property-description"]}>
            <p>
              <span className={classes.price}>{property.price}</span>
              <span className={classes.price2}>/month</span>
            </p>
            <p className={classes.title}>{property.title}</p>
            <p className={classes.address}>{property.address}</p>
            <div className={classes.icons}>
              <span className={classes.icon}>
                <img src="bed.png" className={classes["icon-image"]} />{" "}
                {property.bedNum} Beds{" "}
              </span>
              <span className={classes.icon}>
                {" "}
                <img src="bath.png" className={classes["icon-image"]} />{" "}
                {property.bathNum} bathrooms{" "}
              </span>
              <span className={classes.icon}>
                <img
                  src="square-meters.png"
                  className={classes["icon-image"]}
                />
                {property.squareMeters}m²
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
