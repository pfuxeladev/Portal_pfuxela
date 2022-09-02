import { useUtils as useI18nUtils } from '@core/libs/i18n'
<<<<<<< HEAD
// import { useUtils as useAclUtils } from '@core/libs/acl'

const { t } = useI18nUtils()
// const { canViewVerticalNavMenuHeader } = useAclUtils()
=======
import { useUtils as useAclUtils } from '@core/libs/acl'

const { t } = useI18nUtils()
const { canViewVerticalNavMenuHeader } = useAclUtils()
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  render(h) {
    const span = h('span', {}, t(this.item.header))
    const icon = h('feather-icon', { props: { icon: 'MoreHorizontalIcon', size: '18' } })
<<<<<<< HEAD
    if (this.item) {
=======
    if (canViewVerticalNavMenuHeader(this.item)) {
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      return h('li', { class: 'navigation-header text-truncate' }, [span, icon])
    }
    return h()
  },
}
