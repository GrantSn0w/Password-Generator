const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordFirstTab = document.getElementById("pass-1")
let passwordSecondTab = document.getElementById("pass-2")
let buton = document.getElementById("buton")

function generatePassword() {
        let c1= Math.floor( Math.random() * characters.length)
        let c2= Math.floor( Math.random() * characters.length)
        let c3= Math.floor( Math.random() * characters.length)
        let c4= Math.floor( Math.random() * characters.length)
        let c5= Math.floor( Math.random() * characters.length)
        let c6= Math.floor( Math.random() * characters.length)
        let c7= Math.floor( Math.random() * characters.length)
        let c8= Math.floor( Math.random() * characters.length)
        let c9= Math.floor( Math.random() * characters.length)
        let c10= Math.floor( Math.random() * characters.length)
        let c11= Math.floor( Math.random() * characters.length)
        let c12= Math.floor( Math.random() * characters.length)
        let c13= Math.floor( Math.random() * characters.length)
        let c14= Math.floor( Math.random() * characters.length)
        let c15= Math.floor( Math.random() * characters.length)
        let c16= Math.floor( Math.random() * characters.length)
        let c17= Math.floor( Math.random() * characters.length)
        let c18= Math.floor( Math.random() * characters.length)
        let c19= Math.floor( Math.random() * characters.length)
        let c20= Math.floor( Math.random() * characters.length)
        let c21= Math.floor( Math.random() * characters.length)
        let c22= Math.floor( Math.random() * characters.length)
        let c23= Math.floor( Math.random() * characters.length)
        let c24= Math.floor( Math.random() * characters.length)
        let c25= Math.floor( Math.random() * characters.length)
        let c26= Math.floor( Math.random() * characters.length)
        let c27= Math.floor( Math.random() * characters.length)
        let c28= Math.floor( Math.random() * characters.length)
        let c29= Math.floor( Math.random() * characters.length)
        let c30= Math.floor( Math.random() * characters.length)
        let generatedPassword1 = characters[c1] + characters[c2] + characters[c3] + characters[c4] + characters[c5] + characters[c6] + characters[c7] + characters[c8] + characters[c9] + characters[c10] + characters[c11] + characters[c12] + characters[c13] + characters[c14] + characters[c15]
        let generatedPassword2 = characters[c16] + characters[c17] + characters[c18] + characters[c19] + characters[c20] + characters[c21] + characters[c22] + characters[23] + characters[c24] + characters[c25] + characters[c26] + characters[c27] + characters[c28] + characters[c29] + characters[c30]
        passwordFirstTab.textContent = generatedPassword1
        passwordSecondTab.textContent = generatedPassword2;
    }
    function copycat() {
        // Get the text field
        var copyText = document.getElementById("pass-1");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        alert("Copied the text: " + copyText.value);
      }


