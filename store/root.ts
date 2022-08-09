// domains

// ui
import { AppStore } from "./ui/app";

// pages

export class RootStore {
  domain: {};

  ui: {
    app: AppStore;
  };

  pages: {};

  constructor() {
    this.domain = {};

    this.ui = {
      app: new AppStore(this),
    };

    this.pages = {};
  }
}
