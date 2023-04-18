class Observable {
  private observers: ((data: any) => void)[] = [];

  constructor() {
    this.observers = [];
  }

  subscribe(func: (data: any) => void): void {
    this.observers.push(func);
  }

  unsubscribe(func: (data: any) => void): void {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: any): void {
    this.observers.forEach((observer) => observer(data));
  }
}

export default Observable;
