let React = require('react')
  , { 
    Combobox
  , DropdownList
  , NumberPicker
  , Calendar
  , DateTimePicker
  , Multiselect
  , SelectList } = require('react-widgets')

let wrapWithDefaults = 
  (Component, defaults) => props => ({
    props,
    render() {
      return React.createElement(Component, {...defaults, ...this.props})
    }
  })

let types = Object.create(null);


types.combobox       = Combobox
types.dropdownlist   = DropdownList
types.calendar       = Calendar
types.selectlist     = SelectList

types.date           =
  types.datepicker   = wrapWithDefaults(DateTimePicker, { time: false })

types.time           =
  types.timepicker   = wrapWithDefaults(DateTimePicker, { date: false })

type.datetime =
types['datetime-local'] = 
  types.datetimepicker  = DateTimePicker

types.number         = 
  types.numberpicker = NumberPicker

types.array          =
  types.multiselect  = Multiselect

module.exports = types