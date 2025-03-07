/** @odoo-module */

import { registry } from "@web/core/registry"
import { CharField } from "@web/views/fields/char/char_field"

class UsernameField extends CharField {
    setup(){
        super.setup()
        console.log("Char Field Inherited")
        console.log(this.props)
        console.log("Props Record", this.props.record)
        console.log("Props Record Data", this.props.record.data)

    }

    get emailDomain(){
        const { email } = this.props.record.data
        return email ? email.split('@')[1] : ''
    }
}

UsernameField.template = "owl.UsernameField"
UsernameField.components = { CharField }

export const usernameField = {
    ...CharField,
    component: UsernameField,
    supportedTypes: ["char"],
};


registry.category("fields").add("username_widget", usernameField)