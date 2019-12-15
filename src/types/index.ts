export type Status = 'Alive' | 'Dead' | 'unknown';

export type Gender = 'Female' | 'Male' | 'Genderless'| 'unknown';

export type Place = {
    name: string;
    url: string;
};

export type Character = {
    id: number;
    name: string;
    status: Status;
    type: string;
    gender: Gender;
    origin: Place;
    location: Place;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export type Data = {
    data: {
        results: Character[];
        info: {
            next: string;
        }
    }
}