/** @odoo-module */

import { registry } from "@web/core/registry"
import { Layout } from "@web/search/layout"
import { getDefaultConfig } from "@web/views/view"
import { useService } from "@web/core/utils/hooks"
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog"
import { routeToUrl } from "@web/core/browser/router_service"
import { browser } from "@web/core/browser/browser"

const { Component, useSubEnv, useState } = owl

export class OwlOdooServices extends Component {
    setup(){
        console.log("Owl Odoo Services")
        this.display = {
            controlPanel: {"top-right": false, "bottom-right": false}
        }

        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            }
        })
    }


showNotification(){
    const notification = this.env.services.notification
    notification.add("This is a sample notification.", {
        title: "Odoo Notification Service",
        type: "info", //info, warning, danger, success
        sticky: true,
        className: "",
        buttons: [
            {
                name: "Notification Action",
                onClick: ()=>{
                    console.log("This is notification action")
                },
                primary: true,
            },
            {
                name: "Show me again",
                onClick: ()=>{
                    this.showNotification()
                },
                primary: false,
            }
        ]
    })
}
showDialog(){
    const dialog = this.env.services.dialog
    dialog.add(ConfirmationDialog, {
        title: "Dialog Service",
        body: "Are you sure you want to continue this action?",
        confirm: ()=>{
            console.log("Dialog Confirmed.")
        },
        cancel: ()=>{
            console.log("Dialog Cancelled")
        }
    }, {
        onClose: ()=> {
            console.log("Dialog service closed....")
        }
    })
    console.log(dialog)
}

showEffect(){
    const effect = this.env.services.effect
    console.log(effect)
    effect.add({
        type: "rainbow_man",
        message: "This is an awesome odoo effect service."
    })
}



}




OwlOdooServices.template = "owl.OdooServices"
OwlOdooServices.components = { Layout }

registry.category("actions").add("owl.OdooServices", OwlOdooServices)