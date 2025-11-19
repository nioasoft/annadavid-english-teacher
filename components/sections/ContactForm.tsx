'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Phone number is required'),
  language: z.enum(['English', 'עברית']),
  message: z.string().min(10, 'Please tell us about your goals (minimum 10 characters)')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations('Contact');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      language: 'English'
    }
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          {t('form.name')} *
        </label>
        <input
          {...register('name')}
          type="text"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.name ? 'border-red-500' : 'border-border-light'
          }`}
          placeholder="Your name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          {t('form.email')} *
        </label>
        <input
          {...register('email')}
          type="email"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.email ? 'border-red-500' : 'border-border-light'
          }`}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          {t('form.phone')} *
        </label>
        <input
          {...register('phone')}
          type="tel"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.phone ? 'border-red-500' : 'border-border-light'
          }`}
          placeholder="Your phone number"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          {t('form.language')} *
        </label>
        <select
          {...register('language')}
          className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          disabled={isSubmitting}
        >
          <option value="English">English</option>
          <option value="עברית">עברית</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          {t('form.message')} *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent ${
            errors.message ? 'border-red-500' : 'border-border-light'
          }`}
          placeholder={t('form.message')}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isSubmitting ? 'Sending...' : t('form.submit')}
      </button>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Message sent successfully! We'll contact you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
}
