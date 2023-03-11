window.onload = () => {
  
  // input password
  const input = document.querySelector('.input');
  window.addEventListener('click', event => {
    // jika element yang kita tekan memiliki class show-hide
    if (event.target.classList.contains('show-hide')) {
      // ambil isi data-value dari element yang ditekan
      const value = event.target.dataset.type.toLowerCase();
      // ubah bentuk ikon
      setIcon(event.target, value);
      // ubah atribut input sesuai isi dari variabel value
      input.setAttribute('type', typeInput(value));
    }
  });
  
  function setIcon(target, value) {
    if (value == 'show') {
      /*
        jika isi data-value dari element yang kita tekan bertuliskan
        kata 'show', maka hilangkan element yang ditekan dan tampilkan 
        element setelahnya.
        
        contoh :
        
        <div class="wrapper">
          <p class="text" data-value="show">halo</p> <- element yang kita tekan akan menghilang
          <p class="text" data-value="hide">candra</p> <- dan element inilah yang nantinya akan muncul
        </div>
      */
      target.style.display = 'none';
      target.nextElementSibling.style.display = 'block';
    } else {
      /*
        jika isi data-value dari element yang kita tekan bertuliskan
        kata selain 'show', maka hilangkan element yang ditekan dan tampilkan 
        element sebelumnya.
        
        contoh :
        
        <div class="wrapper">
          <p class="text" data-value="show">halo</p> <- dan inilah element yang nantinya akan muncul
          <p class="text" data-value="hide">candra</p> <- element yang kita tekan akan menghilang
        </div>
      */
      target.style.display = 'none';
      target.previousElementSibling.style.display = 'block';
    }
  }
  
  function typeInput(value) {
    /*
      jika parameter value berisi tulisan show, maka kembalikan nilai
      berupa string 'text'. tapi apabila parameter value berisi tulisan selain show,
      maka kembalikan nilai berupa string 'password'.
    */
    return (value == 'show') ? 'text' : 'password';
  }
  
}