import HYRequest from '@/services/request/index'

export function getCityAll() {
  return HYRequest.get({
    url: '/city/all',
  })
}
