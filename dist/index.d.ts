type PokemonType = "fire" | "water" | "grass" | "electric" | "ghost" | "dark" | "psychic" | "fairy" | "normal" | "rock" | "ground" | "steel" | "ice" | "dragon" | "fighting" | "flying" | "poison" | "bug";
declare const stats: readonly ["hp", "attack", "defense", "spatk", "spdef", "speed"];
type Stat = (typeof stats)[number];
type StatObject = Record<Stat, number>;
type Nature = "hardy" | "lonely" | "adamant" | "naughty" | "brave" | "bold" | "docile" | "impish" | "lax" | "relaxed" | "modest" | "mild" | "bashful" | "rash" | "quiet" | "calm" | "gentle" | "careful" | "quirky" | "sassy" | "timid" | "hasty" | "jolly" | "naive" | "serious";
interface AbilitySlot {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}
interface HeldItemSlot {
    item: {
        name: string;
        url: string;
    };
    version_details: {
        rarity: number;
        version: {
            name: string;
            url: string;
        };
    }[];
}
interface StatInfo {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}
interface TypeInfo {
    slot: number;
    type: {
        name: PokemonType;
        url: string;
    };
}
type LearnMethod = "egg" | "machine" | "level-up" | "tutor" | "form-change" | "zygarde-cube" | "xd-purification" | "xd-shadow" | "colosseum-purification" | "colosseum-shadow" | "light-ball-egg" | "stadium-surfing-pikachu";
interface PokemonData {
    abilities: AbilitySlot[];
    base_experience: number;
    height: number;
    cries: {
        latest: string;
    };
    held_items: HeldItemSlot[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
        move: {
            name: string;
            url: string;
        };
        version_group_details: {
            level_learned_at: number;
            move_learn_method: {
                name: LearnMethod;
            };
        }[];
    }[];
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
        other: {
            dream_world: {
                front_default: string | null;
                front_female: string | null;
            };
            home: {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "official-artwork": {
                front_default: string | null;
                front_shiny: string | null;
            };
            showdown: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
    };
    stats: StatInfo[];
    types: TypeInfo[];
    weight: 60;
}

export { type AbilitySlot, type HeldItemSlot, type LearnMethod, type Nature, type PokemonData, type PokemonType, type Stat, type StatInfo, type StatObject, type TypeInfo, stats };
