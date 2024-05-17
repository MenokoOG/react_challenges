import React from "react";

// Import your images
import hatShieldSword from "../images/hat-shield-sword.png";
import hatShieldStaff from "../images/hat-shield-staff.png";
import hatNoShieldSword from "../images/hat-noShield-sword.png";
import hatNoShieldStaff from "../images/hat-noShield-staff.png";
import noHatShieldSword from "../images/noHat-shield-sword.png";
import noHatShieldStaff from "../images/noHat-shield-staff.png";
import noHatNoShieldSword from "../images/noHat-noShield-sword.png";
import noHatNoShieldStaff from "../images/noHat-noShield-staff.png";

function Character({ characterData }) {
  if (!characterData.noData) {
    switch (true) {
      case characterData.hat === undefined:
        throw Error("No hat value provided.");
      case characterData.shield === undefined:
        throw Error("No shield value provided.");
      case characterData.weapon === undefined:
        throw Error("No weapon value provided.");
      case characterData.name === undefined:
        throw Error("No name value provided.");
      case typeof characterData.name !== "string":
        throw Error("Invalid name value.");
      case characterData.name.trim().length < 2:
        throw Error("Invalid name length.");
      case typeof characterData.hat !== "boolean":
        throw Error("Invalid hat value.");
      case typeof characterData.shield !== "boolean":
        throw Error("Invalid shield value.");
      case characterData.weapon !== "sword" && characterData.weapon !== "staff":
        throw Error("Invalid weapon value.");
    }
  }

  const hat = characterData.hat ? "hat" : "noHat";
  const shield = characterData.shield ? "shield" : "noShield";
  const weapon = characterData.weapon;

  let characterImageUrl;
  if (!characterData.noData) {
    switch (`${hat}-${shield}-${weapon}`) {
      case "hat-shield-sword":
        characterImageUrl = hatShieldSword;
        break;
      case "hat-shield-staff":
        characterImageUrl = hatShieldStaff;
        break;
      case "hat-noShield-sword":
        characterImageUrl = hatNoShieldSword;
        break;
      case "hat-noShield-staff":
        characterImageUrl = hatNoShieldStaff;
        break;
      case "noHat-shield-sword":
        characterImageUrl = noHatShieldSword;
        break;
      case "noHat-shield-staff":
        characterImageUrl = noHatShieldStaff;
        break;
      case "noHat-noShield-sword":
        characterImageUrl = noHatNoShieldSword;
        break;
      case "noHat-noShield-staff":
        characterImageUrl = noHatNoShieldStaff;
        break;
      default:
        characterImageUrl = null;
    }
  }

  return (
    <div className="character-container">
      {characterImageUrl && <img src={characterImageUrl} alt="character" />}
      <div className="character-name">{characterData.name}</div>
    </div>
  );
}

export default Character;
