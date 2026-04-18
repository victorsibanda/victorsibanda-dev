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
        <span>Playfulness</span>
        <span>{level}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={Math.round(play * 100)}
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
