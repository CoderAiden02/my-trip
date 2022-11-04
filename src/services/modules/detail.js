import HYRequest from '@/services/request/index'

export function getDetailInfos(houseId) {
  return HYRequest.get({
    url: '/detail/infos',
    params: {
      houseId,
    },
  })
}
