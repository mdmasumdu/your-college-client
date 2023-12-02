

const Faq = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl text-orange-600 mt-10 mb-5">FAQ-Frequently Asked Question</h1>
            <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  1. How do I enroll in a course?
  </div>
  <div className="collapse-content"> 
    <p>To enroll in a course, simply browse our course catalog, select the course you are interested in, and click the Enroll button. Follow the on-screen instructions to complete the enrollment process.</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  2. Are there any prerequisites for the courses?
  </div>
  <div className="collapse-content"> 
    <p>Prerequisites vary for each course. Check the course description for details on recommended prerequisites. Many of our beginner-level courses have no prerequisites, making them accessible to all skill levels.</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  3. How long do I have access to the course materials?
  </div>
  <div className="collapse-content"> 
    <p>Once enrolled, you have lifetime access to the course materials. Feel free to revisit the content at any time to refresh your knowledge or stay updated on industry trends.</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  4. Can I access the courses on my mobile device?
  </div>
  <div className="collapse-content"> 
    <p> Yes, our platform is mobile-friendly. You can access courses on your smartphone or tablet by simply logging in through your mobile browser. Additionally, we offer a dedicated app for an optimized mobile learning experience.</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  5.What types of payment methods do you accept?
  </div>
  <div className="collapse-content"> 
    <p>We accept a variety of payment methods, including major credit cards, debit cards, and PayPal. Browse our payment options during the checkout process for more details.</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  6. Is financial aid or scholarships available?
  </div>
  <div className="collapse-content"> 
    <p>we understand the importance of accessibility. While we do not currently offer financial aid or scholarships, we strive to keep our courses affordable. Check our website regularly for any updates on financial assistance programs.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  7. How are assessments and assignments graded?
  </div>
  <div className="collapse-content"> 
    <p>Assessments and assignments are typically graded automatically by our system. Instant feedback is provided to help you understand your performance. Some courses may include peer-reviewed assignments for a more collaborative learning experience.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  8. Do you offer refunds if I am not satisfied with a course?
  </div>
  <div className="collapse-content"> 
    <p>Yes, we offer a satisfaction guarantee. If you are not satisfied with a course within the first 30 days of enrollment, contact our support team for a full refund, no questions asked.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  9. Can I download course materials for offline viewing?
  </div>
  <div className="collapse-content"> 
    <p>Currently, we do not support downloading course materials for offline use. However, you can access the content online from anywhere with an internet connection.</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  10. Do you provide certificates upon course completion?
  </div>
  <div className="collapse-content"> 
    <p>Yes, upon successful completion of a course, you will receive a certificate of completion. Certificates can be downloaded from your account and shared on professional networks such as LinkedIn.</p>
  </div>
</div>
            
        </div>
    );
};

export default Faq;