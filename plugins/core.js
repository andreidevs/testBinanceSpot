
import { EventBus } from './eventBus';
import { SDK } from './SDK'

export default (ctx, inject) => {
    inject('bus', EventBus)
    inject('sdk', SDK)

}

