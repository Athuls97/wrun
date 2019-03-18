const form = document.querySelector('#add_data');
const cafeList = document.querySelector('#rd_data');
// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('user').add({
        Name: form.name.value,
        fid: form.fid.value,
        dept: form.dept.value,
        location: ""

    });
    form.name.value = '';
    form.fid.value = '';
    form.dept.value = '';
});


function rdfunc()
{
  var x = document.getElementById('dept').value;
  db.collection('user').where("dept","==",x).get().then(snapshot => {
      snapshot.docs.forEach(doc => {

        var n = doc.data().Name;
        console.log(n);
        pass(n);
        });

  });

}

function pass(a)
{
  var s2 = document.getElementById('sl2');
    var op = document.createElement('option');
    s2.innerHTML = "";
    op.value = a;
    op.innerHTML = a;
    s2.options.add(op);
  }
