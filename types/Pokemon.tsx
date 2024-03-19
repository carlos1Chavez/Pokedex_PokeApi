type pokemon = {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
  };

  type AbilityDetail = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  };
  
  type Pokemon = {
    id: number, 
    name: string;
    types: { type: { name: string } }[]; 
    weight: number; 
    height: number; 
    abilities: AbilityDetail[];
  };
  
  export default Pokemon;