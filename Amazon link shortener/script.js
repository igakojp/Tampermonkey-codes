// ==UserScript==
// @name         Auto Amazon link shortener
// @namespace    http://tampermonkey.net/
// @version      2025-02-15
// @description  Make Amazon link shorter
// @author       You
// @match        https://www.amazon.co.jp/*/dp/*
// @icon         https://static.vecteezy.com/system/resources/previews/019/136/322/original/amazon-logo-amazon-icon-free-free-vector.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Get the current URL
const url = window.location.href;

// Regular expression to extract the product ID from the URL
const regex = /\/dp\/([A-Za-z0-9]{10})/;

// Use the regex to find the product ID
const match = url.match(regex);

// Check if a match is found
if (match) {
  // The product ID is in the first capturing group
  const productId = match[1];
  window.location.href = `https://www.amazon.co.jp/dp/${productId}/`;
} else {
  console.log("No product ID found in the URL");
}

})();
