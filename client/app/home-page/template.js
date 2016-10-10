/**
 * Templates should be stateless and "dumb". No logic here please.
**/
import React from 'react';

function CcHomeTemplate() {
  return (
    <div>
      <h3>
        Web App Architecture Example
      </h3>
      <p>
        This site is a <strong>partial</strong> implementation of a an e-commerce
        storefront for a fictional company called "CleanCo".
        It's purpose is to demonstrate key concepts of a highly stable,
        layered, web application architecture.
      </p>
      <p>
        Many of these concepts are explained by Robert C. Martin (aka "Uncle
        Bob") in&nbsp;
        <a href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html">
          The Clean Architecture<super><small>*</small></super>
        </a>
      </p>
      <small><em>
        <super>*</super>
        This site is in no way endrosed by,
        or affiliated with, Robert C. Martin
      </em></small>
    </div>
  );
}

export default CcHomeTemplate;
