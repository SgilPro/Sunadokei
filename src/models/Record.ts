import Tag from "./Tag";

export default class Record {
  constructor(
    public title: string,
    public description: string,
    public tags: Tag[],
    public seconds: number,
    public date: Date
  ) {}

  get timeSpan(): { hours: number; minutes: number; seconds: number } {
    const seconds = this.seconds % 60;
    const minutes = Math.floor(this.seconds / 60) % 60;
    const hours = Math.floor(Math.floor(this.seconds / 60) / 60);
    return { hours, minutes, seconds };
  }

  get timeSpanString(): string {
    return `${this.timeSpan.hours}:${this.timeSpan.minutes}:${this.timeSpan.seconds}`;
  }
}
