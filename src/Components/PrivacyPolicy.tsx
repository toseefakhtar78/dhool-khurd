"use client";
// import React from 'react';
import React, { useRef } from 'react';  
import { useRouter } from 'next/navigation';
import { Button } from './components/ui/button';
import Link from 'next/link';
const PrivacyPolicy = () => {
  const Router = useRouter();
  const acceptTermsRef = useRef<HTMLInputElement>(null);
  const acceptLastTermRef = useRef<HTMLInputElement>(null);

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isCheckbox1Checked = acceptTermsRef.current?.checked;
    const isCheckbox2Checked = acceptLastTermRef.current?.checked;

    if (isCheckbox1Checked && isCheckbox2Checked) {
      // If all required checkboxes are checked, proceed with form submission
      Router.push('/'); // Redirect to the desired URL
    } else {
      // If any required checkbox is not checked, display an alert
      alert('Please check all required checkboxes.');
    }
  };
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Dhoolkhurd! We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL] (the Site). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
      </p>

      <h2 className="text-2xl font-bold mb-2">2. Information We Collect</h2>

      <h3 className="text-xl font-bold mb-1">2.1 Personal Information</h3>
      <p className="mb-4">
        When you visit or use the Site, we may collect personal information that you voluntarily provide to us, such as your name, email address, and phone number. This information is collected when you fill out forms, subscribe to our newsletter, or communicate with us directly.
      </p>

      <h3 className="text-xl font-bold mb-1">2.2 Usage Data</h3>
      <p className="mb-4">
        We collect information automatically when you visit the Site, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This helps us understand how you use the Site and improve your experience.
      </p>

      <h3 className="text-xl font-bold mb-1">2.3 Cookies and Tracking Technologies</h3>
      <p className="mb-4">
        We use cookies and similar tracking technologies to track activity on our Site and store certain information. Cookies are small files stored on your device that help us remember your preferences and provide a more personalized experience. You can manage cookies through your browser settings. However, disabling cookies may affect the functionality of the Site.
      </p>

      <h2 className="text-2xl font-bold mb-2">3. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect for various purposes, including:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li>To operate, maintain, and improve the Site.</li>
        <li>To personalize your experience and provide content tailored to your interests.</li>
        <li>To communicate with you, including sending newsletters, updates, and promotional materials.</li>
        <li>To analyze usage patterns and improve our services.</li>
        <li>To respond to your inquiries and provide customer support.</li>
      </ul>
      <h3 className="text-xl font-bold mb-1">Opt-Out Options:</h3>
      <span className='font-bold'>User Choices:</span>
      <p className='mb-4'> Provide information on how users can opt out of personalized advertising or disable cookies. Include instructions for opting out of Google AdSense or other third-party ad services.</p>
      <h1 className='text-2xl font-bold mb-1'>Childrens Privacy:</h1>
      <span className='font-bold'>COPPA Compliance</span>
      <p className='mb-4'> If applicable, state that you do not knowingly collect personal information from children under 13 (or other relevant age based on local regulations).</p>
      <h2 className="text-2xl font-bold mb-2">4. How We Share Your Information</h2>
      <p className="mb-4">
        We may share your information in the following circumstances:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li>With Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.</li>
        <li>For Legal Reasons: We may disclose your information if required to do so by law or in response to legal requests, such as a subpoena or court order.</li>
        <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
      </ul>
   <h2 className='text-xl font-bold mb-1'> Changes to Privacy Policy:</h2>
   <span className='font-bold'>Updates:</span>
   <p className='mb-4'>Indicate how and when you will notify users about changes to your Privacy Policy.</p>
      <h2 className="text-2xl font-bold mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>
 <h2 className='text-xl font-bold mb-1'>Contact Information:</h2>
 <span className='font-bold m-1'>Inquiries:</span>
 <p className='mb-4'>Provide a contact method for users to ask questions or request information regarding your Privacy Policy.</p>
      <h2 className="text-2xl font-bold mb-2">6. Your Choices and Rights</h2>
      <p className="mb-4">
        You have the right to:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li>Access and Update: Access and update your personal information by contacting us directly.</li>
        <li>Opt-Out: Opt-out of receiving marketing communications by following the unsubscribe instructions in those communications.</li>
        <li>Delete: Request the deletion of your personal information, subject to certain</li></ul>
        <h2 className="text-2xl font-bold mb-2">7. Third-Party Advertising</h2>
      <p className="mb-4">
        We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. If you would like more information about this practice and to know your choices about not having this information used by these companies, click <a href="https://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <h3 className='mb-2 uppercase font-bold'>Please note</h3>
      <p className="mb-4 text-sm">
         that we do not sell your personal information to third parties. By using our website, you acknowledge that you have read, understood, and agree to our privacy policy. You also acknowledge that you cannot challenge or dispute this policy in any court of law or through any other means.  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
         </p>
      

      {/* <div className="flex items-center justify-center mb-8 border border-fuchsia-600 p-4 rounded-md">
       
        </div> */}

<div className="flex flex-col items-center justify-center mb-8 border border-fuchsia-600 p-4 rounded-md">
  <div className="flex items-center">
    <input
      type="checkbox"
      id="acceptTerms"
      required
      ref={acceptTermsRef}
      className="w-6 h-6 text-fuchsia-600 bg-white border-fuchsia-600 rounded-md mr-4"
    />
    <label
      htmlFor="acceptTerms"
      className="text-lg font-medium text-fuchsia-600"
    >
      I accept all terms and policies
    </label>
  </div>
  <div className="flex items-center m-4">
    <input
      type="checkbox"
      required
      id="acceptLastTerm"
      ref={acceptLastTermRef}
      className="w-6 h-6 text-fuchsia-600 bg-white border-fuchsia-600 rounded-md mr-4"
    />
    <label
      htmlFor="acceptLastTerm"
      className="text-lg font-medium text-fuchsia-600"
    >
      I accept the Third-Party Advertising
    </label>
  </div>
</div>
<div className="flex justify-end">
  
  <form onSubmit={handleSubmit}>
    <Button
    
      type="submit"
      className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-md"
    >
      Submit
    </Button>
    </form>
 
</div>
 </div>

        );
    };
    
export default PrivacyPolicy