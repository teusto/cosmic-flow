export interface ISign {
    name: string;
    startDate: Date;
    endDate: Date;
    element:'Fire' | 'Earth' | 'Air' | 'Water';
    rullingPlanet: 'Moon' | 'Sun' | 'Mercury' | 'Mars' | 'Venus' | 'Pluto' | 'Jupiter' | 'Saturn' | 'Uranus' | 'Neptune';
}