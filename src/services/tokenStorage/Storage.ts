import { Storage } from './Storage.interfaces';

export class StorageService implements Storage {
  private readonly storage: Storage;

  public constructor() {
    this.storage = localStorage;

    this.setItem = this.setItem.bind(this);
    this.getItem = this.getItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  public setItem(name: string, value: string): void {
    this.storage.setItem(name, value);
  }

  public getItem(name: string): string | null {
    return this.storage.getItem(name) ?? null;
  }

  public removeItem(name: string): void {
    this.storage.removeItem(name);
  }
}
