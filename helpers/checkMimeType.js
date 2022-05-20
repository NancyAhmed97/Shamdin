
export const checkMimeType = (event, notAllowedTxt, type) => {
    //getting file object
    let files = event.target.files 
    //define message container
    let err = ''
    // list allow mime type
   const types = (!type || type == '') ? ['image/png', 'image/jpeg', 'image/gif'] : ['image/png', 'image/jpeg', 'image/gif', type];
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container   
         err += files[x].type+' '+notAllowedTxt+' \n';
       }
     };
  
   if (err !== '') { // if message not same old that mean has error 
        event.target.value = null // discard selected file
        //console.log(err)
         return err; 
    }
   return true;
  
  }