/**
 * Harshal Thakre - Personal Portfolio
 * Clean, Accessible Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Dynamic Footer Year
  // -------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // 2. Navigation & Mobile Drawer Menu
  // -------------------------------------------------------------------------
  const siteHeader = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMenu = () => {
    if (navToggle && primaryNav) {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
    }
  };

  const openMenu = () => {
    if (navToggle && primaryNav) {
      navToggle.setAttribute('aria-expanded', 'true');
      primaryNav.classList.add('is-open');
    }
  };

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInside = primaryNav.contains(event.target) || navToggle.contains(event.target);
      if (!isClickInside && primaryNav.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  // Header scroll state
  const handleScroll = () => {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // -------------------------------------------------------------------------
  // 3. Active Navigation Link on Scroll (IntersectionObserver)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // -------------------------------------------------------------------------
  // 4. Back-to-Top Button
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 5. Contact Form System (Formspree Integration)
  // -------------------------------------------------------------------------
  // =========================================================================
  // INSTRUCTIONS FOR HARSHAL THAKRE:
  // 1. Create a free account at https://formspree.io/
  // 2. Click "+ New Form", title it (e.g. "Harshal Portfolio Contact"), and
  //    enter your private email address where you want to receive messages.
  // 3. Confirm/verify your email with Formspree.
  // 4. Copy your form endpoint URL (format: https://formspree.io/f/<your-form-id>)
  // 5. Paste your endpoint below, replacing 'YOUR_FORMSPREE_ENDPOINT_HERE'
  // =========================================================================
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpjrgdg';

  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('form-submit-btn');
  const statusBanner = document.getElementById('form-status');

  // RFC 5322 compliant email regex for client-side format testing
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  // Safe HTML escaper for user-provided strings reflected into status banners
  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  };

  // Helper to render accessible status banners
  const showStatusBanner = (type, title, descriptionHtml) => {
    if (!statusBanner) return;

    statusBanner.className = `form-status-banner is-${type}`;
    statusBanner.setAttribute('role', type === 'error' ? 'alert' : 'status');

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg class="status-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg class="status-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
    } else {
      iconSvg = '<svg class="status-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    statusBanner.innerHTML = `
      <div class="status-icon-wrap" aria-hidden="true">${iconSvg}</div>
      <div class="status-body">
        <strong class="status-heading">${title}</strong>
        <p class="status-description">${descriptionHtml}</p>
      </div>
    `;

    statusBanner.hidden = false;
    statusBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const validateField = (input, testCondition) => {
    if (!input) return false;
    const isValid = testCondition();
    const group = input.closest('.form-group');

    if (!isValid) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      if (group) group.classList.add('has-error');
    } else {
      input.classList.remove('is-invalid');
      input.setAttribute('aria-invalid', 'false');
      if (group) group.classList.remove('has-error');
    }
    return isValid;
  };

  const validateName = () => {
    return validateField(nameInput, () => nameInput && nameInput.value.trim().length >= 2);
  };

  const validateEmail = () => {
    return validateField(emailInput, () => {
      if (!emailInput) return false;
      const val = emailInput.value.trim();
      return val.length > 0 && emailRegex.test(val);
    });
  };

  const validateSubject = () => {
    return validateField(subjectInput, () => subjectInput && subjectInput.value.trim().length >= 3);
  };

  const validateMessage = () => {
    return validateField(messageInput, () => messageInput && messageInput.value.trim().length >= 10);
  };

  // Real-time input listeners to clear validation errors upon typing
  if (nameInput) {
    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', () => {
      if (nameInput.classList.contains('is-invalid')) validateName();
    });
  }

  if (emailInput) {
    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('is-invalid')) validateEmail();
    });
  }

  if (subjectInput) {
    subjectInput.addEventListener('blur', validateSubject);
    subjectInput.addEventListener('input', () => {
      if (subjectInput.classList.contains('is-invalid')) validateSubject();
    });
  }

  if (messageInput) {
    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', () => {
      if (messageInput.classList.contains('is-invalid')) validateMessage();
    });
  }

  let isSubmitting = false;

  // Form submission with real Formspree HTTP POST integration
  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      // Validate all required fields
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();

      if (!isNameValid) {
        nameInput.focus();
        return;
      }
      if (!isEmailValid) {
        emailInput.focus();
        return;
      }
      if (!isSubjectValid) {
        subjectInput.focus();
        return;
      }
      if (!isMessageValid) {
        messageInput.focus();
        return;
      }

      // Trim all inputs
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Check if endpoint is configured or still placeholder
      const isEndpointConfigured = 
        FORMSPREE_ENDPOINT &&
        FORMSPREE_ENDPOINT !== 'YOUR_FORMSPREE_ENDPOINT_HERE' &&
        !FORMSPREE_ENDPOINT.startsWith('YOUR_') &&
        FORMSPREE_ENDPOINT.startsWith('https://formspree.io/');

      if (!isEndpointConfigured) {
        // Do not pretend the message was sent; show clear setup instructions
        showStatusBanner(
          'info',
          'Form Service Setup Required',
          'The contact system is fully coded and ready, but your Formspree endpoint has not been inserted yet. Please create a free form at <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:underline;font-weight:600;">formspree.io</a>, verify your recipient email, and paste your form URL into <code>script.js</code> (line 143). Your entered message has been preserved below.'
        );
        return;
      }

      // Prevent duplicate submissions
      if (isSubmitting) return;
      isSubmitting = true;

      // Update submit button to loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('is-loading');
        submitBtn.setAttribute('aria-busy', 'true');
        const btnText = submitBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = 'Sending Message...';
      }

      // Hide previous status banner while request is in flight
      if (statusBanner) statusBanner.hidden = true;

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message
          })
        });

        if (response.ok) {
          // Confirmed successful delivery by the form service
          showStatusBanner(
            'success',
            'Message Sent Successfully!',
            `Thank you, ${escapeHtml(name)}! Your message has been delivered to Harshal's inbox. I'll get back to you shortly.`
          );

          // Clear form fields ONLY on confirmed success
          contactForm.reset();
          [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
            if (input) {
              input.classList.remove('is-invalid');
              input.removeAttribute('aria-invalid');
              const group = input.closest('.form-group');
              if (group) group.classList.remove('has-error');
            }
          });
        } else {
          // Server returned an error (e.g. invalid submission, rate limit)
          let errorDetails = 'Please review your details and try again.';
          try {
            const data = await response.json();
            if (data && data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
              errorDetails = data.errors.map((e) => e.message || e.field).join(', ');
            } else if (data && data.error) {
              errorDetails = data.error;
            }
          } catch (jsonErr) {
            // Non-JSON response body
          }

          showStatusBanner(
            'error',
            'Submission Failed',
            `The contact service was unable to accept the message: ${escapeHtml(errorDetails)}. Your message has been preserved below so you can retry.`
          );
        }
      } catch (networkError) {
        // Network connection error or CORS/offline issue
        showStatusBanner(
          'error',
          'Network Error',
          'A connection error occurred while sending your message. Please check your internet connection and try again. Your entered message has been preserved below.'
        );
      } finally {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.classList.remove('is-loading');
          submitBtn.removeAttribute('aria-busy');
          const btnText = submitBtn.querySelector('.btn-text');
          if (btnText) btnText.textContent = 'Send Message';
        }
      }
    });
  }
});
