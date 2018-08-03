class FileUpload {
  constructor(url, headers = {}, onProgress = () => {}) {
    this.url = url
    this.headers = headers
    this.onProgress = onProgress
  }

  upload(file, additionalData = {}) {
    console.log("in upload- multipart")
    let xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    // Headers
    xhr.open('POST', this.url, true)
    this._setXhrHeaders(xhr)

    // Events
    xhr.upload.addEventListener('progress', this.onProgress, false)
    let promise = new Promise((resolve, reject) => {
      xhr.onload = e =>
        xhr.status >= 200 && xhr.status < 400 ? resolve(e) : reject(e)
      xhr.onerror = e => reject(e)
    })

//    var reader = new FileReader()
//    reader.onloadend = ((evt) => {
//      xhr.send(evt.target.result)
//    })
//    reader.readAsBinaryString(file)
    // Start upload
    let formData = new FormData()
    formData.append('file', file)
    Object.keys(additionalData).forEach(p => {
      formData.append(p, additionalData[p])
    })
    xhr.send(file)
//
    return promise
  }

  _setXhrHeaders(xhr) {
    Object.keys(this.headers).forEach(p =>
      xhr.setRequestHeader(p, this.headers[p])
    )
  }
}

export default FileUpload
