class Device {
  name: string;
  type: string;
  description: string;
  public getName(): string {
    return this.name;
  }

  public getType(): string{
    return this.type
  }

  public getDescription(): string{
    return this.description;
  }

}