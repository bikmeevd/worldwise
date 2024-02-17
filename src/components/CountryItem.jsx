import styles from "./CountryItem.module.css";
import ReactCountryFlag from "react-country-flag";
const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};
function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <ReactCountryFlag countryCode={country.emoji} svg />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
