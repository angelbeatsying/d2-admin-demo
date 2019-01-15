import request from '@/plugin/axios'

export function TableData (data) {
  return request({
    url: '/tableData',
    method: 'get'
  })
}
