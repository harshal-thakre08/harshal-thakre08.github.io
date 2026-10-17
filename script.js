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
  // 5. Contact Form Validation & Static Site Notice Modal
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  
  // Dialog Elements
  const contactDialog = document.getElementById('contact-dialog');
  const dialogSenderName = document.getElementById('dialog-sender-name');
  const previewSender = document.getElementById('preview-sender');
  const previewBody = document.getElementById('preview-body');
  const dialogMailtoBtn = document.getElementById('dialog-mailto-btn');
  const dialogCopyBtn = document.getElementById('dialog-copy-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');

  // RFC 5322 compliant email regex for client-side format testing
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  const validateField = (input, testCondition) => {
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
    return validateField(nameInput, () => nameInput.value.trim().length >= 2);
  };

  const validateEmail = () => {
    return validateField(emailInput, () => {
      const val = emailInput.value.trim();
      return val.length > 0 && emailRegex.test(val);
    });
  };

  const validateMessage = () => {
    return validateField(messageInput, () => messageInput.value.trim().length >= 10);
  };

  // Modern input event listeners for responsive feedback
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

  if (messageInput) {
    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', () => {
      if (messageInput.classList.contains('is-invalid')) validateMessage();
    });
  }

  // Form submission logic
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (!isNameValid) {
        nameInput.focus();
        return;
      }
      if (!isEmailValid) {
        emailInput.focus();
        return;
      }
      if (!isMessageValid) {
        messageInput.focus();
        return;
      }

      // Gather form values
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      // Populate Notice Dialog
      if (dialogSenderName) dialogSenderName.textContent = name;
      if (previewSender) previewSender.textContent = `${name} (${email})`;
      if (previewBody) previewBody.textContent = message;

      // Prepare mailto link fallback
      // Harshal can add his real email here if desired, e.g. mailto:harshal@example.com
      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(`Hi Harshal,\n\n${message}\n\nBest regards,\n${name}\n${email}`);
      if (dialogMailtoBtn) {
        dialogMailtoBtn.setAttribute('href', `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`);
      }

      // Configure copy to clipboard action
      if (dialogCopyBtn && copyBtnText) {
        dialogCopyBtn.onclick = async () => {
          const formattedText = `From: ${name} (${email})\nSubject: Portfolio Inquiry\n\nMessage:\n${message}`;
          try {
            await navigator.clipboard.writeText(formattedText);
            const originalText = copyBtnText.textContent;
            copyBtnText.textContent = 'Copied!';
            setTimeout(() => {
              copyBtnText.textContent = originalText;
            }, 2500);
          } catch (err) {
            console.error('Clipboard copy error: ', err);
          }
        };
      }

      // Open <dialog> modal with accessibility focus
      if (contactDialog && typeof contactDialog.showModal === 'function') {
        contactDialog.showModal();
      }

      // Reset form fields cleanly
      contactForm.reset();
      [nameInput, emailInput, messageInput].forEach((input) => {
        input.classList.remove('is-invalid');
        input.removeAttribute('aria-invalid');
        const group = input.closest('.form-group');
        if (group) group.classList.remove('has-error');
      });
    });
  }

  // Close dialog handler
  if (dialogCloseBtn && contactDialog) {
    dialogCloseBtn.addEventListener('click', () => {
      contactDialog.close();
    });
  }

  // Light-dismiss fallback for browsers without native `closedby` attribute support
  if (contactDialog && !('closedBy' in HTMLDialogElement.prototype)) {
    contactDialog.addEventListener('click', (event) => {
      if (event.target !== contactDialog) return;

      const rect = contactDialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );

      if (!isDialogContent) {
        contactDialog.close();
      }
    });
  }
});
