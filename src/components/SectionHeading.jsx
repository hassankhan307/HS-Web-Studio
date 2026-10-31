export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = ''
}) {
  return (
    <div
      className={`section-header ${align === 'left' ? 'text-left' : ''} ${className}`}
      style={align === 'left' ? { textAlign: 'left', marginLeft: 0 } : {}}
    >
      {badge && (
        <div className="section-badge">
          <span className="badge-dot" />
          <span>{badge}</span>
        </div>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
