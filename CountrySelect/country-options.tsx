import * as R from 'ramda'
import countries from './countries.json'
import {Option} from '../common/types'

// Takes the data structure and converts it into array of options for <Select />
export const countryOptions = R.map<{name: string, code: string}, Option>(R.applySpec({
    label: R.path(['name']),
    value: R.path(['code']),
}))(countries)
