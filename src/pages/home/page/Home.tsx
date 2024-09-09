import { BannerModule, FormModule } from "@/pages/home/modules";
import "./styles.scss";

const prefix = "p-login";

const HomePage = () => {


  return (
    <div className={prefix}>
      <BannerModule/>
      <div className={`${prefix}__wrapper_form`}>
        <FormModule className={`${prefix}__form`} />
      </div>
    </div>
  );
};

export default HomePage;
