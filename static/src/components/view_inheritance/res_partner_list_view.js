/** @odoo-module */

import { registry } from "@web/core/registry"
import { listView } from "@web/views/list/list_view"
import { ListController } from "@web/views/list/list_controller"


class ResPartnerListController extends ListController {
    setup(){
        // super.setup ya que vamos a sobrescribir ListController
        super.setup()
        console.log("This is res partner controller")
        // this.action = useService("action")
    }
}


export const resPartnerListView = {
    ...listView,
    // reemplazmos el controller por el nuevo definido arriba
    Controller: ResPartnerListController,
    buttonTemplate: "owl.ResPartnerListView.Buttons",
}

registry.category("views").add("res_partner_list_view", resPartnerListView)
