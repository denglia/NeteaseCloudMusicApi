const assert = require('assert')
const axios = require('axios')
const host = global.host || 'http://localhost:3000'

describe('测试获取用户歌单是否正常', () => {
  it('数据的 code 应该为200', (done) => {
    const qs = {
      uid: 32953014,
    }

    axios
      .get(`${host}/user/playlist`, {
        params: qs,
      })
      .then(({ status, data }) => {
        if (status == 200) {
          assert(data.code === 200)
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
