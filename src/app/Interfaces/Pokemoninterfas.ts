export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: Ability2;
}

export interface Form {
    name: string;
    url: string;
}

export interface Version {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    version: Version;
}

export interface Item {
    name: string;
    url: string;
}

export interface Version2 {
    name: string;
    url: string;
}

export interface Generation {
    name: string;
    url: string;
}

export interface PastType {
    generation: Generation;
    types: Type[];
}


export interface Emerald {
    front_default: string;
    front_shiny: string;
}

export interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
}
export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
    versions: Versions;
}
export interface Other {
    // Define las propiedades de la interfaz Other según sea necesario
    dream_world: {
        front_default: string;
        front_female?: any;
    };
    home: {
        front_default: string;
        front_female?: any;
        front_shiny: string;
        front_shiny_female?: any;
    };
    // Agrega más propiedades según los requisitos de tu aplicación
}
export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndice[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
}
export interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  export interface Form {
    name: string;
    url: string;
  }
  
  export interface GameIndice {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  export interface HeldItem {
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
  
  export interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }
  
  export interface Species {
    name: string;
    url: string;
  }
  
  export interface Sprites {
    front_default: string;
    back_default: string;
    // Agrega otras propiedades según necesites
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  export interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  export interface PastType {
    // Define las propiedades de PastType según sea necesario
  }
  
  export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndice[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
  }
  
export enum Versions {
    "generation-i" = "GenerationI",
    "generation-ii" = "GenerationII",
    "generation-iii" = "GenerationIII",
    "generation-iv" = "GenerationIV",
    "generation-v" = "GenerationV",
    "generation-vi" = "GenerationVI",
    "generation-vii" = "GenerationVII",
    "generation-viii" = "GenerationVIII"
}
export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string; // Asegúrate de que el tipo aquí coincida
        url: string;  // Asegúrate de que el tipo aquí coincida
    };
}


export interface Type {
    slot: number;
    type: TypeDetail;
}

export interface TypeDetail {
    name: string;
    url: string;
}
export interface HeartgoldSoulsilver {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Platinum {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}



