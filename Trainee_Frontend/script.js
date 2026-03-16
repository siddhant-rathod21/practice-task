document.getElementById('callBtn').addEventListener('click', async ()=>{
  const resultEl = document.getElementById('result');
  resultEl.textContent = 'Loading...';
  try{
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();
    resultEl.textContent = JSON.stringify(data, null, 2);
  }catch(e){
    resultEl.textContent = 'Error: '+e.message;
  }
});