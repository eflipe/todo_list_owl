/** @odoo-module **/

import { ProductsWidget } from "@point_of_sale/app/screens/product_screen/product_list/product_list";
import { patch } from "@web/core/utils/patch";

patch(ProductsWidget.prototype, {
    setup() {
        super.setup(...arguments);
        console.log("1 This is ProductListInherit")
        console.log("2 This is POS DB", this.pos.db)
    },

    // addNewPaymentLine(paymentMethod) {
    //     const payment_line = super.addNewPaymentLine(paymentMethod)
    //     console.log("1 This is addNewPaymentLine")
    //     return payment_line

    // },
    
    get getFavProducts() {
        const { db } = this.pos;
        let products_list = db.get_product_by_category(2);
        console.log("products_list", products_list)
        return products_list
    }
});