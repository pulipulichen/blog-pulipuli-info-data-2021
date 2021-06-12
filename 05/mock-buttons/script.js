let onDrop = function (event) {

  event.preventDefault()
  event.stopPropagation()

  //console.log(event)
  let dt = event.dataTransfer
  let files = dt.files


  if (files.length === 0) {
    return false
  }
  //console.log(files.length)

  let file = files[0]

  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => {
    //console.log(reader.result)
    document.getElementById('screen').src = reader.result
  }
}


document.onpaste = function(event)
{
    var items = event.clipboardData.items;
    //console.log(JSON.stringify(items)); // will give you the mime types
    if (items[0].kind !== 'file') {
      return false
    }
    
    var blob = items[0].getAsFile();
    
    
    
    var reader = new FileReader();
    reader.onload = function(event)
    {
        //console.log(event.target.result)
        document.getElementById('screen').src = event.target.result
    }; // data url  
    reader.readAsDataURL(blob); 
}
