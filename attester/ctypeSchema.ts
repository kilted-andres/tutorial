//# create a local CType definition

import * as Kilt from '@kiltprotocol/sdk-js'

// Return CType with the properties matching a given schema.
export function getCtypeSchema(): Kilt.ICType {
  return Kilt.CType.fromProperties('ClaimTutorial', {
    phrase: {
      type: 'string'
    },
    validationPeriod: {
      type: 'integer'
    },
    price: {
        type: 'integer'
      },
    lie: {
    type: 'boolean'
    },
    rate: {
        type: 'number'
      },
  })
}