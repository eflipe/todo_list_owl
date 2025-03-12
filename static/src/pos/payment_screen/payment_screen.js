/** @odoo-module **/

import { registry } from "@web/core/registry";
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";


// export class PaymentScreenInherit extends PaymentScreen {
//     setup(){
//         // super.setup ya que vamos a sobrescribir
//         super.setup()
//         console.log("This is PaymentScreenInherit")

//     }
// }

// registry.category("pos_screens").add("PaymentScreenInherit", PaymentScreen);


patch(PaymentScreen.prototype, {
    setup() {
        super.setup(...arguments);
        console.log("1 This is PaymentScreenInherit")
        console.log("2 This is PaymentScreenInherit")
        console.log("3 This is PaymentScreenInherit")
    },

    addNewPaymentLine(paymentMethod) {
        const payment_line = super.addNewPaymentLine(paymentMethod)
        console.log("1 This is addNewPaymentLine")
        return payment_line

    },
    
    showNextScreen() {
        console.log("1 SOY UN BOTON")
    }
});