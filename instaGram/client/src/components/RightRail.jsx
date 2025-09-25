// src/components/RightRail.jsx
import { USERS } from "../data/users.js";

export default function RightRail() {
  const suggestions = USERS.slice(0, 3); // or however many you want

  return (
    <div className="ig-right-rail">
      {/* suggestions only */}
      <div className="ig-section-header">
        <span>Suggested for you</span>
        <button className="ig-link-button">See All</button>
      </div>

      <ul className="ig-suggest-list">
        {suggestions.map((u) => (
          <li key={u.handle} className="ig-suggest-item">
            <img
              src={u.avatar || "/images/avatars/default.png"}
              alt={u.handle}
              className="ig-avatar sm"
              style={{ width: 36, height: 36, borderRadius: "50%" }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/avatars/default.png";
              }}
            />
            <div className="ig-suggest-meta">
              <div className="ig-username">{u.handle}</div>
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

// export default function RightRail() {
//   return (
//     <div className="ig-right-rail">
//       <div className="ig-profile-card">
//         <div className="ig-avatar" />
//         <div className="ig-profile-meta">
//           <div className="ig-username">patsy_o_hutch</div>
//           <div className="ig-muted">Patsy Lin</div>
//         </div>
//         <button className="ig-link-button">Switch</button>
//       </div>

//       <div className="ig-section-header">
//         <span>Suggested for you</span>
//         <button className="ig-link-button">See All</button>
//       </div>

//       <ul className="ig-suggest-list">
//         {["nikiborodi", "therealterryschoultz", "sonyaderman"].map((u) => (
//           <li key={u} className="ig-suggest-item">
//             <div className="ig-avatar sm" />
//             <div className="ig-suggest-meta">
//               <div className="ig-username">{u}</div>
//               <div className="ig-muted">Suggested for you</div>
//             </div>
//             <button className="ig-link-button">Follow</button>
//           </li>
//         ))}
//       </ul>

//       <div className="ig-footer-links ig-muted">
//         About · Help · Press · API · Jobs · Privacy · Terms · Locations
//       </div>
//     </div>
//   );
// }
