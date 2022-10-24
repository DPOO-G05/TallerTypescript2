export class Serie{
    public id: number; 
    public name: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public link: string;
    public cover: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, link: string, cover: string) {
        this.id = id;
        this.name = name;
        this.channel = channel; 
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.cover = cover;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getChannel(): string {
        return this.channel;
    }

    public setChannel(channel: string): void {
        this.channel = channel;
    }

    public getSeasons(): number {
        return this.seasons;
    }

    public setSeasons(seasons: number): void {
        this.seasons = seasons;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public getCover(): string {
        return this.cover;
    }

    public setCover(cover: string): void {
        this.cover = cover;
    }


}