import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

const Wrapper = styled.main`
  color: #000000;
  padding: 3rem 0;

  .heading {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .subheading {
    font-weight: 600;
  }

  p {
    margin: 1rem 0;
    line-height: 200%;
  }
`;

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Container>
        <article>
          <h1 className="heading">Privacy Policy</h1>
          <h2 className="subheading">Introduction</h2>
          <p>
            CityShoppa is committed to safeguarding your privacy; in this policy
            we explain how your personal data, meaning any information relating
            to you as an identified or identifiable natural person, and your
            electronic communications as a natural or legal person, that we may
            hold, is collected, used, stored, disclosed, and removed (each and
            all referred to as "processing").
          </p>
          <p>
            We do not collect any personally identifiable information from
            children or minors under the age of 18. If you believe that a child
            or minor under the age of 18 has provided us with personally
            identifiable information, please contact our customer support.
          </p>
          <p>This Policy only applies to information we process.</p>
          <p>
            We may update this policy from time to time and will notify you of
            changes to this policy affecting your rights by email and/or by
            posting on cityshoppa.com.
          </p>
          <h2 className="subheading">Your Personal Data that we may process</h2>
          <p>
            We may process your personal identification information. Personal
            identification information may include your full name, email
            address, username, telephone number, country of residence, date of
            birth, age, nationality, gender and home address. The source of the
            personal identification information is you. The personal
            identification information may be processed for the purposes of
            providing our services, communicating with you.
          </p>
          <p>
            We may process company information (“company information”). Company
            information may include information and documentation related to the
            name, industry, ownership, registration, country of incorporation,
            and business address of the company. Company information may also
            contain personal identification information and formal
            identification information related to the company account holder,
            possible subaccount holders, beneficial owners and/or members of the
            board of directors of the company. The sources of the company
            information are the company account holder, possible subaccount
            holders, beneficial owners and/or members of the board of directors
            of the company. The company information may be processed for the
            purposes of providing our services.
          </p>
          <p>
            We may process data about your use of our website and services
            ("usage information"). Usage information is primarily
            non-personally-identifying information of the sort that web
            browsers, servers, and services like Google Analytics typically make
            available, such as the browser type, language preference, referring
            site, and the time of each visit. We may process information about
            your approximate location, cookies set by our site, etc. The Data
            that we collect may be used for behaviour statistics, business
            intelligence and email campaigns. We gather website traffic data
            with the help of Google Analytics. We gather data on website errors
            which may occasionally contain usage data. We also log certain
            events from your actions on our site.
          </p>
          <p>
            We may process data relating to the business contacts that you
            conduct through our website ("trade information").
          </p>
          <p>
            We may process information contained in or relating to any
            communication (including any electronic communications) that you
            send to us or that you generate through the use of our service
            ("communication information"). Communication information includes 1)
            all your messages, requests and other communication with our
            customer support; emails, or by means of any other communication
            tool; and 2) all your communication and file attachments or other
            data that you generate mainly by communicating to businesses listed
            on our website. CityShoppa is a party to such communications,
            including but not limited to the trade chat messages, which
            CityShoppa necessarily must be able to review and process in order
            to provide its services to you. CityShoppa may review and otherwise
            process any contents and metadata of messages comprised in the
            communication information. Communication information may include,
            email address, username, IP address, full name. The source of the
            communication information is you. The communication information may
            be processed for the purposes of communicating with you,
            record-keeping, in order to review and serve our customers better
            and improve our service. The legality for this processing is the
            legitimate interest of CityShoppa such as for proper administration
            of our website and business.
          </p>
          <p>
            Please try to avoid supplying any unnecessary personal data to us.
          </p>
          <p className="subheading">Your Rights under data protection law:</p>
          <p>
            You have the right to confirm whether or not we process your
            personal data. Where we access the personal data, providing that the
            rights and freedoms of others are not affected, we will supply to
            you a copy of your personal data.
          </p>
          <p>
            You have the right to rectify any inaccurate personal data about you
            and for the purposes of the processing, to have any incomplete
            personal data about you completed. You can correct or update some of
            your personal data yourself through your user account.
          </p>
          <p>
            You have a legal right to lodge a complaint with a supervisory
            authority responsible for data protection, if you consider that our
            processing of your personal information infringes data protection
            laws.
          </p>
          <p>
            Contact our customer service, to exercise any of your rights in
            relation to your personal data.
          </p>
          <p>
            As is common practice with almost all professional websites, this
            site uses cookies.
          </p>
          <p>What are cookies?</p>
          <p>
            Cookies are tiny files that are saved to your web browser, to
            improve your experience and to enable certain features, such as
            authentication. This page describes what information they gather,
            how we use it and why we sometimes need to store these cookies. We
            will also share how you can prevent these cookies from being stored,
            however this may downgrade or 'break' certain elements of the site’s
            functionality.
          </p>
          <p>
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about you
            may be linked to the information stored in and obtained from
            cookies.
          </p>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser. Disabling cookies may result in some functionality and
            features of this site being disabled.
          </p>
          <p>How to Contact Us</p>
          <p>
            If you have any questions about this Privacy Policy, your rights
            and/or our data collection practices, please contact us.
          </p>
          <p>
            Director,
            <br />
            CityShoppa Inc.
            <br />
            146 Carleton Drive
            <br />
            Saskatoon, SK
            <br />
            Canada S7H3N6
            <br />
            Email: contact@cityshoppa.com
          </p>
        </article>
      </Container>
    </Wrapper>
  );
};

export default PrivacyPolicy;
