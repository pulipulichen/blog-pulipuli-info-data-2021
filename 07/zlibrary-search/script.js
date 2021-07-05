

function setupIframe (q) {
  
  // https://1lib.tw/s/?q=The+Gutenberg+elegies%3A+the+fate+of+reading+in+an+electronic+age&order=date
  document.getElementById('book').src = `https://1lib.tw/s/?q=` + q
  
  //https://booksc.org/s/?q=Learning+by+Association%3F+Interorganizational+Networks+and+Adaptation+to+Environmental+Change
  document.getElementById('article').src = `https://booksc.org/s/?q=` + q
}

let {search} = new URL(location.href)
//console.log(search)
if (search.startsWith('?')) {
  
  search = search.slice(1)
  
  let getParameters = {}
  
  search.split('&').forEach(pair => {
    let equalPos = pair.indexOf('=')
    if (equalPos === -1) {
      return false
    }
    
    getParameters[pair.slice(0, equalPos)] = pair.slice(equalPos + 1)
  })
  
  let {q = ''} = getParameters
  
  //console.log(getParameters)
  
  document.getElementById('q').value = q
  
  document.getElementById('book').innerText = q
  document.getElementById('article').innerText = q
  
  setupIframe(q)
  
}

document.getElementById('q').onchange = function () {
  q = this.value
  console.log(q)
  setupIframe(q)
}