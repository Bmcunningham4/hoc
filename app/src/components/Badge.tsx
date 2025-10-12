import badgeImg from "../assets/badge.png";
import coopsImg from "../assets/coops.png";
import dryBonesImg from "../assets/dry-bones.png";

export default function Badge() {
  return (
    <div>
      <img src={badgeImg} alt="Badge" />
      <img src={coopsImg} alt="Coops" />
      <img src={dryBonesImg} alt="Dry Bones" />
    </div>
  );
}
