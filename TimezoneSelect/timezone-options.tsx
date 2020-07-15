import * as R from 'ramda'
import {Option, Timezone} from '../common/types'
import timezones from './timezones.json'

// Takes the data structure and converts it into array of options for <Select />
export const timeZoneOptions = R.map<Timezone, Option>(R.applySpec({
    label: R.path(['text']),
    value: R.path(['value']),
}))(timezones)
