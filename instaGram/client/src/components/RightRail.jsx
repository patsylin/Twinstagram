export default function RightRail() {
  return (
    <div className="ig-right-rail">
      <div className="ig-profile-card">
        <div className="ig-avatar" />
        <div className="ig-profile-meta">
          <div className="ig-username">patsy_o_hutch</div>
          <div className="ig-muted">Patsy Lin</div>
        </div>
        <button className="ig-link-button">Switch</button>
      </div>

      <div className="ig-section-header">
        <span>Suggested for you</span>
        <button className="ig-link-button">See All</button>
      </div>

      <ul className="ig-suggest-list">
        {["nikiborodi", "therealterryschoultz", "sonyaderman"].map((u) => (
          <li key={u} className="ig-suggest-item">
            <div className="ig-avatar sm" />
            <div className="ig-suggest-meta">
              <div className="ig-username">{u}</div>
              <div className="ig-muted">Suggested for you</div>
            </div>
            <button className="ig-link-button">Follow</button>
          </li>
        ))}
      </ul>

      <div className="ig-footer-links ig-muted">
        About · Help · Press · API · Jobs · Privacy · Terms · Locations
      </div>
    </div>
  );
}
