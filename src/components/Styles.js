import styles from "@/data/stylesData";
import StyleCategory from "./StyleCategory";

export default function Styles() {
  return (
    <div className="px-[15rem] py-[5rem] bg-white flex flex-col gap-[1rem]">
      <StyleCategory type="hair" data={styles.hair} />
      <StyleCategory type="beard" data={styles.beard} />
    </div>
  );
}
