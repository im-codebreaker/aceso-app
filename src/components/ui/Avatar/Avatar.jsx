import './Avatar.scss';

function Avatar({ src = '/avatar.svg', className = 'default' }) {
  return (
    <img
      className={className}
      src={src}
      width={56}
      height={56}
      alt='Profile Avatar'
    />
  );
}

export { Avatar };
