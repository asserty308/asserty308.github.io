# Marilena Achtsamkeitstraining Website

Eine moderne, statische Website für eine Anbieterin von Achtsamkeitstrainings.

## Über das Projekt

Diese Website wurde als statische HTML/CSS/JavaScript-Website entwickelt, um einfach auf GitHub Pages gehostet werden zu können. Sie ist modern, minimalistisch und ruhig gestaltet, mit Fokus auf Lesbarkeit und viel Weißraum.

## Struktur

- **Startseite (`index.html`)**: Kurze Einführung und Überblick der Angebote
- **Über Mich (`ueber-mich.html`)**: Informationen zur Person und Qualifikationen
- **Angebote (`angebote.html`)**: Detaillierte Informationen zu den angebotenen Kursen
- **Kontakt (`kontakt.html`)**: Kontaktformular und Kontaktinformationen

## Assets

- **CSS**: `assets/css/style.css` enthält alle Styling-Informationen
- **JavaScript**: `assets/js/main.js` enthält einfache Interaktionen
- **Bilder**: Platzieren Sie Bilder im Verzeichnis `assets/images/`

## Deployment auf GitHub Pages

1. Erstellen Sie ein Repository auf GitHub
2. Laden Sie alle Dateien in das Repository hoch
3. Gehen Sie zu "Settings" > "Pages"
4. Wählen Sie unter "Source" den Branch "main"
5. Klicken Sie auf "Save"
6. Nach einigen Minuten ist Ihre Website unter `https://[username].github.io/[repository-name]/` verfügbar

## Formular-Integration

Das Kontaktformular ist für die Nutzung mit [Formspree](https://formspree.io/) vorbereitet. Um es funktionsfähig zu machen:

1. Erstellen Sie ein Konto bei Formspree
2. Erstellen Sie ein neues Formular und erhalten Sie Ihre Formular-ID
3. Ersetzen Sie in `kontakt.html` die Platzhalter `https://formspree.io/f/your-formspree-id` mit Ihrer eigenen Formspree-URL

## Bilder einfügen

Für diese Website werden die folgenden Bilder benötigt:

1. `assets/images/meditation.jpg` - Ein Bild für die Startseite
2. `assets/images/profile.jpg` - Ein Profilbild für die Über-Mich-Seite

Ersetzen Sie diese durch eigene Bilder oder laden Sie passende lizenzfreie Bilder herunter.

## Anpassung

- **Farben**: Die Farbpalette kann in der CSS-Datei unter den `:root`-Variablen angepasst werden
- **Texte**: Alle Texte können direkt in den HTML-Dateien bearbeitet werden
- **Bilder**: Ersetzen Sie die Bilder im `assets/images/`-Verzeichnis
- **Kontaktdaten**: Aktualisieren Sie alle Kontaktinformationen in `kontakt.html`

## Technologien

- HTML5
- CSS3
- Vanilla JavaScript
- FontAwesome für Icons
- Google Fonts (Open Sans & Raleway)

## Lizenz

Dieses Projekt kann frei verwendet und angepasst werden.
