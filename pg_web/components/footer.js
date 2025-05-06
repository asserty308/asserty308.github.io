document.addEventListener('DOMContentLoaded', function () {
    const footer = `
        <div class="footer-content">
            <div class="contact-info">
                <h4>Kontakt</h4>
                <p>P&G Haustechnik Kanalservice</p>
                <p>Steinsstr. 27</p>
                <p>41238 Mönchengladbach</p>
                <p>Tel: <a href="tel:+4917375029869">+49 (0) 173 7502986</a></p>
                <p>Email: <a href="mailto:info@pg-kanalservice.de">info@pg-kanalservice.de</a></p>
            </div>
            <div class="footer-links">
                <a href="imprint.html">Impressum</a>
                <a href="contact.html">Kontakt</a>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} P&G Haustechnik Kanalservice. Alle Rechte vorbehalten.</p>
        </div>
    `;

    document.querySelector('footer').innerHTML = footer;
});