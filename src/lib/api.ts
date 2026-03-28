export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface FormspreeResponse {
  ok: boolean;
  message?: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<FormspreeResponse> {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formspreeId) {
    console.error('NEXT_PUBLIC_FORMSPREE_ID is not set');
    return { ok: false, message: 'Form is not configured' };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { ok: true };
    } else {
      return { ok: false, message: 'Failed to submit form' };
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return { ok: false, message: 'An error occurred' };
  }
}
