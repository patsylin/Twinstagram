export const USERS = [
  {
    handle: "penny_pumpkin",
    name: "Penny O'Brien",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Katherine",
  },
  {
    handle: "NatureGirl",
    name: "Sally Soleman",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alexander",
  },
  {
    handle: "YogiForever",
    name: "Willow Wilson",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=George",
  },
  {
    handle: "BeYourself",
    name: "Oscar Wilding",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan",
  },
  {
    handle: "ConnectedToLife ",
    name: "Allie Anderson",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Eden",
  },
];

export const userByHandle = (h) => USERS.find((u) => u.handle === h);

export function normalizeHandle(h) {
  const m = /^user_(\d+)$/.exec(h);
  if (!m) return h;
  const idx = (Number(m[1]) - 1) % USERS.length;
  return USERS[idx].handle;
}
