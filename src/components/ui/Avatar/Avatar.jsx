import './Avatar.scss';

function Avatar({ src = '/avatar.svg', className = 'default' }) {
  return (
    <picture>
      <img
        className={className}
        src={src}
        width={56}
        height={56}
        alt='Profile Avatar'
      />
    </picture>
  );
}

export { Avatar };
