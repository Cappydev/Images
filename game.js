let xhr = new XMLHttpRequest();

const keyWords = ["people","vacation","pizza","food","tennis","football","developper","videogames","animals","pig","cat",]


xhr.open("GET",'https://pixabay.com/api/');

xhr.reponseType = "json";
let keyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
console.log(keyWord);
xhr.send(JSON.stringify({
  key: '18705551-a7dd60a2f1679d2ec4bdc2f84'
}));

xhr.onload = function(){
  //Si le statut HTTP n'est pas 200...
  if (xhr.status != 200){ 
      console.log(xhr);
      // alert("Erreur " + xhr.status + " : " + xhr.statusText);
  //Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
  }else{
      const response = JSON.parse(xhr.response)
      console.log(response);
      // document.querySelector('#img').src = response.urls.small;
      // console.log(response.urls.small);
  }
};

//Si la requête n'a pas pu aboutir...
xhr.onerror = function(){
  alert("La requête a échoué");
};

//Pendant le téléchargement...
xhr.onprogress = function(event){
  //lengthComputable = booléen; true si la requête a une length calculable
  if (event.lengthComputable){
      //loaded = contient le nombre d'octets téléchargés
      //total = contient le nombre total d'octets à télécharger
      alert(event.loaded + " octets reçus sur un total de " + event.total);
  }
};
