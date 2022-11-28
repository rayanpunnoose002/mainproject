const form = document.getElementById('comments');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comments').add({
       name: form.name.value,
       comment: form.comment.value
    });
    form.name.value = '';
    form.comment.value = '';
    alert("Your Comment has been posted publically")
}
);

const div =document.querySelector('.cont');

renderList = (doc)=>{
     var mmdiv=document.createElement('div')
var maindiv =document.createElement('div');
var bdyrev =document.createElement('div');
var nmerev =document.createElement('div');
var rsting =document.createElement('div');
var desrev =document.createElement('div');
var br=document.createElement('br')
var card_body =document.createElement('div');
var name = document.createElement('h5');
var comment = document.createElement('p')
maindiv.setAttribute('class','review');
bdyrev.setAttribute('class','body-review');
nmerev.setAttribute('class','name-review');
desrev.setAttribute('class','desc-review');
div.setAttribute('class','space')
mmdiv.setAttribute('class','reviews')
name.textContent = doc.data().name;
comment.textContent = doc.data().comment;
mmdiv.appendChild(div)
desrev.appendChild(comment)
nmerev.appendChild(name);
bdyrev.appendChild(desrev);
bdyrev.appendChild(nmerev);
maindiv.appendChild(bdyrev);
div.appendChild(maindiv);

}
db.collection('comments').onSnapshot(snap=>{
    let changes=snap.docChanges();
    changes.forEach(change =>{
        if(change.type == 'added'){
            renderList(change.doc)
            console.log(change);
        }
    })
})