const { body } = document;
document.addEventListener('mousemove', e => {
  body.style.setProperty('--x', `${e.clientX}px`);
  body.style.setProperty('--y', `${e.clientY}px`);
});

const handleStart = e => {
  const handleMove = e => {
    const { clientX, clientY } = e.touches[0];
    body.style.setProperty('--x', `${clientX}px`);
    body.style.setProperty('--y', `${clientY}px`);
  };

  const handleEnd = e => {
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
  };

  document.addEventListener('touchmove', handleMove);
  document.addEventListener('touchend', handleEnd);
};

document.addEventListener('touchstart', handleStart, {
  passive: true
});
