import './styles.scss';

const prefix = 'c_banner_message';

const BannerMessage = ({ className }: { className?: string }) => {
  return (
    <div className={`${prefix} ${className ?? ''}`}>
      <span className={`${prefix}__level_one`}>¡Nuevo!</span>
      <p className={`${prefix}__level_two`}>
        <span>Seguro </span>
        <span>Vehicular </span>
        <span>Tracking</span>
      </p>
      <p className={`${prefix}__level_three`}>Cuentanos donde le haras seguimiento a tu seguro</p>
    </div>
  )
}

export default BannerMessage;