import styles from "@/styles/MapComponent.module.css";
const MapComponent = () => {
  return (
    <div className={styles.mapComponent}>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1204085822214!2d-0.17752498524825536!3d5.695737995871634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d56a7c5cb71%3A0xe0d1be1239c24eaa!2sCastle%20Gate%20Estate!5e0!3m2!1sen!2sgh!4v1680259864032!5m2!1sen!2sgh"
          width="600"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.information}>
        <div className="address">
          <h4>Information</h4>
          <p>
            ADDRESS CASTLE BRIDGE STREET, EAST ADENTA, ACCRA, Adentan PHONE
            (+233) 0245362113 EMAIL info@zhelpafricainternational.org
          </p>
        </div>

        <div className="digitalAddress">
          <h4>Information</h4>
          <p>
            ADDRESS CASTLE BRIDGE STREET, EAST ADENTA, ACCRA, Adentan PHONE
            (+233) 0245362113 EMAIL info@zhelpafricainternational.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
