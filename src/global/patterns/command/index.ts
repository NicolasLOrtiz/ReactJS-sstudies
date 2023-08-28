class OrderManager {
  private readonly orders: string[];

  constructor() {
    this.orders = [];
  }

  execute(command: Command) {
    return command.execute(this.orders);
  }
}

class Command {
  execute: (arg0: any[]) => any;

  constructor(execute: (arg0: any[]) => any) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order: string, id: string) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
}

function CancelOrderCommand(id: string) {
  return new Command((orders) => {
    orders.filter((order) => order.id !== id);
    console.log(`You have canceled your order ${id}`);
  });
}

function TrackOrderCommand(id: string) {
  return new Command(() =>
    console.log(`Your order ${id} will arrive in 20 minutes.`)
  );
}

function GetOrdersCommand() {
  return new Command((orders) => console.log(orders));
}

const orderManager = new OrderManager();

orderManager.execute(PlaceOrderCommand("Pizza", "1"));
orderManager.execute(PlaceOrderCommand("Burger", "2"));
orderManager.execute(PlaceOrderCommand("Fries", "3"));
orderManager.execute(PlaceOrderCommand("Coke", "4"));
orderManager.execute(PlaceOrderCommand("Ice Cream", "5"));
orderManager.execute(GetOrdersCommand());
orderManager.execute(CancelOrderCommand("3"));
orderManager.execute(TrackOrderCommand("1"));

export default OrderManager;
