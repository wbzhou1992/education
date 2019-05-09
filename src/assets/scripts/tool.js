export default {
  getPhone: function(phone){
    return phone.replace(/(\d{3})\d{5}(\d{3})/g,'$1*****$2')
  },
  cookie: {
    add (name, value, iDay, domain) {
      if (!iDay) return

      var oDate = new Date()
      oDate.setDate(oDate.getDate() + iDay)
      document.cookie = name + '=' + value + ';path=/;expires=' + oDate.toGMTString() + ';domain=' + (domain || '')
    },
    get (name) {
      let cookies = document.cookie.split('; ')
      for (let i = 0, len = cookies.length; i < len; i++) {
        let arr = cookies[i].split('=')
        if (arr[0] === name) return cookies[i].replace(arr[0] + '=', '')
      }
      return ''
    },
    del (name, domain) {
      document.cookie = name + '=;path=/;expires=' + (new Date(0)).toGMTString() + ';domain=' + (domain || '')
    },
    getBase (name) {
      let cookies = document.cookie.split('; ')
      for (let i = 0, len = cookies.length; i < len; i++) {
        let arr = cookies[i].split('=')
        if (arr[0] === name) {
          if (arr[1].length === 11) {
            return arr[1].substr(0, 3) + '*****' + arr[1].substr(-3)
          } else {
            return Base64.decode(decodeURIComponent(cookies[i].replace(arr[0] + '=', '')))
          }
        }
      }
      return ''
    }
  }
}