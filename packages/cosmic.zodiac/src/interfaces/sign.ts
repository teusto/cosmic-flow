export interface ISign {
    name: string;
    startDate: Date;
    endDate: Date;
    element:'Fire' | 'Earth' | 'Air' | 'Water';
    rulingPlanet: 'Moon' | 'Sun' | 'Mercury' | 'Mars' | 'Venus' | 'Pluto' | 'Jupiter' | 'Saturn' | 'Uranus' | 'Neptune';
    house: any;
}