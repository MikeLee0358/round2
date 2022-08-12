import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : '-'
    }
  }
}
export const emptyImage = {
  filters: {
    emptyImage(src) {
      return src || "https://fakeimg.pl/350x220/DFDFDF/?text=No+Image";
    },
  },

}
