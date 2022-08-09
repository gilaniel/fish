import { makeAutoObservable } from "mobx";
import { RootStore } from "../root";

export class AppStore {
  private root: RootStore;

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }
}
