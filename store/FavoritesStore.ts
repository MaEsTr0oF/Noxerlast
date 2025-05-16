import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

export class FavoritesStore {
  favoritesIds: number[] = [];

  constructor() {
    makeAutoObservable(this);

    if (typeof window !== "undefined") {
      makePersistable(this, {
        name: "FavoritesStore",
        properties: ["favoritesIds"],
        storage: window.localStorage,
      });
    }
  }

  toggleFavorite(id: number) {
    this.favoritesIds.includes(id)
      ? (this.favoritesIds = this.favoritesIds.filter((favId) => favId !== id))
      : this.favoritesIds.push(id);
  }

  removeFavorite(id: number) {
    this.favoritesIds = this.favoritesIds.filter((favId) => favId !== id);
  }

  isFavorite(id: number) {
    return this.favoritesIds.includes(id);
  }
}

export const favoritesStore = new FavoritesStore();
