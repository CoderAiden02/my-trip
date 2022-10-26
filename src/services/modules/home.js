import HYRequest from '@/services/request/index'

export function getHotSuggests() {
  return HYRequest.get({
    url: '/home/hotSuggests',
  })
}
