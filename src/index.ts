export type PokemonType =
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ghost"
  | "dark"
  | "psychic"
  | "fairy"
  | "normal"
  | "rock"
  | "ground"
  | "steel"
  | "ice"
  | "dragon"
  | "fighting"
  | "flying"
  | "poison"
  | "bug";

export const stats = [
  "hp",
  "attack",
  "defense",
  "spatk",
  "spdef",
  "speed",
] as const;
export type Stat = (typeof stats)[number];

export type StatObject = Record<Stat, number>;

export type Nature =
  | "hardy"
  | "lonely"
  | "adamant"
  | "naughty"
  | "brave"
  | "bold"
  | "docile"
  | "impish"
  | "lax"
  | "relaxed"
  | "modest"
  | "mild"
  | "bashful"
  | "rash"
  | "quiet"
  | "calm"
  | "gentle"
  | "careful"
  | "quirky"
  | "sassy"
  | "timid"
  | "hasty"
  | "jolly"
  | "naive"
  | "serious";
