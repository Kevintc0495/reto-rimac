import { BannerMessage, BannerWallpaper } from '@/pages/home/components';
import './styles.scss';

const prefix = 'm_banner';

const BannerModule = () => {
  return (
    <div className={prefix}>
      <BannerMessage className={`${prefix}__banner_message`} />
      <BannerWallpaper className={`${prefix}__banner_wallpaper`} />
    </div>
  )
};

export default BannerModule;