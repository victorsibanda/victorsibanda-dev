const Tweaks = ({ editMode, play, setPlay }) => {
  if (!editMode) return null;

  const level =
    play < 0.15
      ? 'SUIT MODE'
      : play < 0.4
        ? 'NORMAL'
        : play < 0.65
          ? 'SUPER SAIYAN'
          : play < 0.85
            ? 'SSJ 2'
            : 'EVEN FURTHER BEYOND';

  return (
    <div className="tweaks-panel open">
      <h4>
        <span>Tweaks</span>
        <span style={{ color: 'var(--accent)' }}>●</span>
      </h4>
      <div className="lvl">
        <label htmlFor="playfulness-slider">Playfulness</label>
        <span>{level}</span>
      </div>
      <input
        id="playfulness-slider"
        type="range"
        min="0"
        max="100"
        value={Math.round(play * 100)}
        aria-valuetext={level}
        onChange={(e) => setPlay(Number(e.target.value) / 100)}
      />
      <div className="hint">
        Slide from <span className="mono">subtle</span> →{' '}
        <span className="mono" style={{ color: 'var(--accent)' }}>
          full anime
        </span>
        . Affects background scanlines, hero glitch, and a little easter egg.
      </div>
    </div>
  );
};

export default Tweaks;
