let footer = document.querySelector('footer');
let year = new Date().getFullYear();

footer.innerHTML = `
<img src="./media/logo/logo-transparrent.png" class="footer-logo">

<div class="footer-col-container">
    <div class="footer-col">
        <i class="fa-sharp fa-solid fa-location-dot footer-icon"></i>
        <p>123 Street Name, City Name, AB1&nbsp;4CO</p>
    </div>
    <div class="footer-col">
        <i class="fa-sharp fa-solid fa-phone footer-icon"></i>
        <a href="tel:01234567890" id="tel">01234 567890</a>
    </div>
    <div class="footer-col">
        <i class="fa-solid fa-envelope footer-icon"></i>
        <p>email@email.com</p>
    </div>

</div>

<h3>Follow us</h3>   

<div class="social-icons-container">
    <a href="#"><i class="fa-brands fa-facebook social-icon"></i></a>
    <a href="#"><i class="fa-brands fa-instagram social-icon"></i></a>
    <a href="#"><i class="fa-brands fa-twitter social-icon"></i></a>
</div>

<div class="footer-bottom">
    <p class="footer-copyright">&copy; ${year} Company Name | <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
    <p class="footer-built-by">Built with  &#9829;  by New World Digital Media</p>
</div>
`;