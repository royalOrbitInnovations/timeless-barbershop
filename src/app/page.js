import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Styles from "@/components/Styles";

export default function page() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Styles />
      <Contact />
    </div>
  );
}
