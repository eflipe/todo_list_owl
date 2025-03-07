/** @odoo-module */

import { registry } from "@web/core/registry"
import { EmailField } from "@web/views/fields/email/email_field"

class ValidEmailField extends EmailField {
    setup(){
        super.setup()
        console.log("Email Field Inherited")
        console.log(this.props)
        console.log("Props Record", this.props.record)
        console.log("Props Record data[this.props.name]", this.props.record.data[this.props.name])

    }

    get isValidEmail(){
        let re = /\S+@\S+\.\S+/;
        return re.test(this.props.record.data[this.props.name])
    }
}

ValidEmailField.template = "owl.ValidEmailField"

export const validEmailField = {
    ...EmailField,
    component: ValidEmailField,
    supportedTypes: ["char"],
};

registry.category("fields").add("valid_email_2", validEmailField)

// class FormEmailField extends EmailField {
//     static template = "web.FormEmailField";
// }

// export const formEmailField = {
//     ...emailField,
//     component: FormEmailField,
// };

// registry.category("fields").add("form.email", formEmailField);