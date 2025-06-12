import { isoDate, role, UUID } from './common';

interface weight {
  imperial: string;
  metric: string;
}

//////////////////////////////////////////////////////
/////////////////// Api interfaces ///////////////////
//////////////////////////////////////////////////////

export interface ICatListItem {
  name: string;
  id: string;
}

export interface ICat {
  weight: weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface ICatImageResponse {
  id: string;
  width: number;
  height: number;
  url: string;
}

//////////////////////////////////////////////////////
//////////////////// Api adapters ////////////////////
//////////////////////////////////////////////////////

export class Cat {
  weight: weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;

  constructor(cat: ICat) {
    this.weight = cat.weight;
    this.id = cat.id;
    this.name = cat.name;
    this.cfa_url = cat.cfa_url;
    this.vetstreet_url = cat.vetstreet_url;
    this.vcahospitals_url = cat.vcahospitals_url;
    this.temperament = cat.temperament;
    this.origin = cat.origin;
    this.country_codes = cat.country_codes;
    this.country_code = cat.country_code;
    this.description = cat.description;
    this.life_span = cat.life_span;
    this.indoor = cat.indoor;
    this.lap = cat.lap;
    this.alt_names = cat.alt_names;
    this.adaptability = cat.adaptability;
    this.affection_level = cat.affection_level;
    this.child_friendly = cat.child_friendly;
    this.dog_friendly = cat.dog_friendly;
    this.energy_level = cat.energy_level;
    this.grooming = cat.grooming;
    this.health_issues = cat.health_issues;
    this.intelligence = cat.intelligence;
    this.shedding_level = cat.shedding_level;
    this.social_needs = cat.social_needs;
    this.stranger_friendly = cat.stranger_friendly;
    this.vocalisation = cat.vocalisation;
    this.experimental = cat.experimental;
    this.hairless = cat.hairless;
    this.natural = cat.natural;
    this.rare = cat.rare;
    this.rex = cat.rex;
    this.suppressed_tail = cat.suppressed_tail;
    this.short_legs = cat.short_legs;
    this.wikipedia_url = cat.wikipedia_url;
    this.hypoallergenic = cat.hypoallergenic;
    this.reference_image_id = cat.reference_image_id;
  }
}
