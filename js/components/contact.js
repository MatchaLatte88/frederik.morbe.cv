// Component: Contact
function renderContact() {
  return `
<section class="contact-section" id="contact">
  <div class="contact-container">
    <div class="contact-header reveal">
      <span class="num">07</span>
      <span class="line"></span>
      <span class="title" data-i18n="contact_label">Contact</span>
    </div>

    <div class="contact-grid">
      <div class="reveal reveal-delay-1">
        <h2 class="contact-big">
          <span data-i18n="contact_big_1">Let's build something </span><span class="italic-accent" data-i18n="contact_big_highlight">remarkable</span><span data-i18n="contact_big_2"> together.</span>
        </h2>
        <p style="color:#9a9a9a;font-size:14px;line-height:1.7;max-width:440px;" data-i18n="contact_desc">
          Open to leadership roles in mechanical design, R&D project management, and medical device innovation.
        </p>
      </div>

      <div class="contact-links reveal reveal-delay-2">
        <a href="mailto:frederik.morbe@outlook.com" class="contact-link" data-hover>
          <div class="contact-link-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
          </div>
          <div>
            <div class="contact-link-label" data-i18n="contact_email_label">Email</div>
            <div class="contact-link-value">frederik.morbe@outlook.com</div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/frederik-morbe" target="_blank" rel="noopener noreferrer" class="contact-link" data-hover>
          <div class="contact-link-icon">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </div>
          <div>
            <div class="contact-link-label">LinkedIn</div>
            <div class="contact-link-value">www.linkedin.com/in/frederik-morbe</div>
          </div>
        </a>
        <a href="#" class="contact-link" data-hover>
          <div class="contact-link-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
          </div>
          <div>
            <div class="contact-link-label" data-i18n="contact_location_label">Location</div>
            <div class="contact-link-value" data-i18n="contact_location_value">Morfelden-Walldorf, Germany</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
  `;
}
