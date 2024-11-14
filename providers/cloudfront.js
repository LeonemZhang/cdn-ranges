const axios = require('axios')

module.exports = async () => {
  const { data } = await axios.get(
    'https://d7uri8nf7uskq.cloudfront.net/tools/list-cloudfront-ips'
  )

  return data.prefixes.reduce((arr, { service, ip_prefix }) => {
    if (service === 'CLOUDFRONT') arr.push(ip_prefix)
    return arr
  }, [])
}
