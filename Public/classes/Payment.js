var Payment = /** @class */ (function () {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    //   constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    //   }
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
export { Payment };
