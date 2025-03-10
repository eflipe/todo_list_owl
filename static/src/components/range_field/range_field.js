/** @odoo-module **/

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";

import { Component, useState, onWillUpdateProps } from "@odoo/owl";

// export class RangeField extends Component {
//     setup() {
//         this.state = useState({
//             range: this.props.value || '',

//         });
//         console.log("---- Range Field Inherited ----")
//         console.log(this.props)
//         console.log("this.props.value:", this.props.value)
//         const { currency_id } = this.props.record.data
//         this.currency = currency_id ? currency_id[1] : ''
//     }
// }

// RangeField.template = "owl.RangeField";

// export const rangeField = {
//     ...standardFieldProps,
//     component: RangeField,
//     supportedTypes: ["integer"],
// };
class NewRangeField extends Component {
    static template = "owl.RangeField";

    setup() {
        // Estado reactivo para almacenar el valor del rango
        this.state = useState({ value: this.props.initialValue || 0 });
        console.log("---- Range Field Inherited ----")
        console.log(this.props)
        console.log("this.props.initialValue:", this.props.initialValue)
        // const { currency_id } = this.props.record.data
        // this.currency = currency_id ? currency_id[1] : ''
    }
    
    

    // Método para manejar el cambio en el input range
    onRangeChange(ev) {
        const newValue = ev.target.value
        this.state.value = newValue;

        // Actualiza el valor en el campo del modelo BUSCAR EN EL FUENTE update
        this.props.update(newValue);

    }
}

export const newRangeField = {
    component: NewRangeField,
    supportedTypes: ["integer"],
};
registry.category("fields").add("range_widget_2", newRangeField);
