import wallapaperMobile1x from '@/assets/img/wallpaper-mobile-1x.png';
import wallapaperMobile2x from '@/assets/img/wallpaper-mobile-2x.png';
import wallapaperDesktop1x from '@/assets/img/wallpaper-desktop-1x.png';
import wallapaperDesktop2x from '@/assets/img/wallpaper-desktop-2x.png';
import './styles.scss';

const prefix = 'c_banner_wallpaper';

const BannerWallpaper = ({ className }: { className?: string }) => {
  return (
    <picture className={`${prefix} ${className ?? ''}`}>
      <source 
        media="(min-width: 1200px)" 
        srcSet={`${wallapaperDesktop1x} 1x, ${wallapaperDesktop2x} 2x`} 
      />
      <img 
        srcSet={`${wallapaperMobile1x} 1x, ${wallapaperMobile2x} 2x`} 
        src={wallapaperMobile2x} 
        alt="wallpaper-mobile" 
      />
    </picture>
  )
}

export default BannerWallpaper