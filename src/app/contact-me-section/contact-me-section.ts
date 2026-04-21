import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me-section.html',
  styleUrl: './contact-me-section.scss',
})
export class ContactMeSection {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const emailData = {
        service_id: 'service_k6ap8mw',
        template_id: 'template_63funkl',
        user_id: 'xE-f2ZqRzIkXSZm2L',
        template_params: {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        },
      };

      this.http
        .post('https://api.emailjs.com/api/v1.0/email/send', emailData, { responseType: 'text' })
        .subscribe({
          next: () => {
            alert('Message sent successfully!');
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
          },
        });
    }
  }
}
