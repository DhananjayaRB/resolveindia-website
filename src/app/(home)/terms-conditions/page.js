import React from 'react';
import styles from './termsConditions.module.scss';

const TermsConditions = () => {
  return (
    <div className={styles.termsContainer}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>TERMS & CONDITIONS</h1>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>ELIGIBILITY</h2>
          <p className={styles.sectionText}>
            By using the Website and the Service, you represent and warrant that all registration information you submit is truthful and accurate and that you agree to maintain the accuracy of such information. You further represent and warrant that you are 18 years of age or older and that your use of the ResolveBiz Services and Apps Private Limited shall not violate any applicable law or regulation. Your profile may be deleted without warning, if it is found that you are misrepresenting your age. Your Membership is solely for your personal use, and you shall not authorize others to use your account, including your profile or email address. You are solely responsible for all content published or displayed through your account, including any email messages, and for your interactions with other members.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>CHANGES</h2>
          <p className={styles.sectionText}>
          We reserve the right to add to or change/modify the terms of this Agreement including but not limited to suspend / cancel, or discontinue any or all channels, or service at any time without notice, make modifications and alterations in any or all of the content, products and services contained on the site without prior notice. You will be deemed to have accepted such change/s if you continue to access the Site subsequent to such changes.          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>LIMITED PERMISSION OF COPY</h2>
          <p className={styles.sectionText}>
          You are permitted to print or download extracts from these pages for your personal non-commercial use only. Any copies of these pages saved to disk or to any other storage medium may only be used for subsequent viewing purposes or to print extracts for personal use. You may not (whether directly or through the use of any software program) create a database in electronic or structured manual form by regularly or systematically downloading and storing all or any part of the pages from this site. No part of the Site may be reproduced or transmitted to or stored in any other web site, nor may any of its pages or part thereof be disseminated in any electronic or non-electronic form, nor included in any public or private electronic retrieval system or service without prior written permission. Requests to republish ResolveBiz Services and Apps Private Limited material for distribution should be addressed to blogadmin@resolveindia.com.          </p>
        </div>

                 <div className={styles.section}>
           <h2 className={styles.sectionTitle}>RIGHTS OF RESOLVEBIZ SERVICES AND APPS PRIVATE LIMITED</h2>
           <p className={styles.sectionText}>
             ResolveBiz Services and Apps Private Limited reserves its right to terminate your account without any prior notice for any violation.
           </p>
           <p className={styles.sectionText}>
             All content posted by you becomes the property of ResolveBiz Services and Apps Private Limited and you agree to grant/assign the royalty free, perpetual right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display such content (in whole or part) worldwide and/or to incorporate it in other works in any form, media, or technology now known or later developed.
           </p>
         </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>CANCELLATION AND REFUND POLICY</h2>
          <p className={styles.sectionText}>
          Our SaaS subscriptions do not include automatic renewal. Upon the expiration of your subscription, the service will be deactivated without the need for manual cancellation. We do not provide refunds for any subscription payments, including partial or unused subscription periods. All sales are final and non-refundable.          </p>
        </div>

        
      </div>
    </div>
  );
};

export default TermsConditions;