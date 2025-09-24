export const USERS = [
  { handle: "penny_pumpkin", name: "Penny O'Brien" },
  { handle: "NatureGirl", name: "Sally Soleman" },
  { handle: "YogiForever", name: "Willow Wilson" },
  { handle: "BeYourself", name: "Oscar Wilding" },
  { handle: "ConnectedToLife ", name: "Allie Anderson" },
];

export const userByHandle = (h) => USERS.find((u) => u.handle === h);

export function normalizeHandle(h) {
  const m = /^user_(\d+)$/.exec(h);
  if (!m) return h;
  const idx = (Number(m[1]) - 1) % USERS.length;
  return USERS[idx].handle;
}
